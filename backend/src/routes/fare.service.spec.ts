import { Test, TestingModule } from '@nestjs/testing';
import { FareService } from '../routes/fare.service';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Unit tests for FareService.
 * PrismaService is mocked so no DB connection is required.
 */
describe('FareService', () => {
  let fareService: FareService;
  let prisma: jest.Mocked<PrismaService>;

  const mockPrisma = {
    fare: { findFirst: jest.fn() },
    stop: { findFirst: jest.fn() },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FareService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    fareService = module.get<FareService>(FareService);
    prisma = module.get(PrismaService);
    jest.clearAllMocks();
  });

  describe('calculateFare', () => {
    it('returns the admin-set exact fare when one exists', async () => {
      mockPrisma.fare.findFirst.mockResolvedValue({ amount: 25 });

      const result = await fareService.calculateFare('route-1', 1, 3);

      expect(result).toBe(25);
      expect(mockPrisma.fare.findFirst).toHaveBeenCalledWith({
        where: { routeId: 'route-1', fromStopOrder: 1, toStopOrder: 3 },
      });
      // Should NOT fall through to distance lookup
      expect(mockPrisma.stop.findFirst).not.toHaveBeenCalled();
    });

    it('falls back to distance formula when no exact fare is configured', async () => {
      mockPrisma.fare.findFirst.mockResolvedValue(null);
      mockPrisma.stop.findFirst
        .mockResolvedValueOnce({ distanceFromStart: 0 }) // from stop
        .mockResolvedValueOnce({ distanceFromStart: 10 }); // to stop (10 km)

      const result = await fareService.calculateFare('route-1', 1, 3);

      // ₹5 base + 10 km * ₹1.5 = ₹20
      expect(result).toBe(20);
    });

    it('rounds up fractional fares (Math.ceil)', async () => {
      mockPrisma.fare.findFirst.mockResolvedValue(null);
      mockPrisma.stop.findFirst
        .mockResolvedValueOnce({ distanceFromStart: 0 })
        .mockResolvedValueOnce({ distanceFromStart: 3.1 }); // 3.1 km → 5 + 4.65 = 9.65 → ceil → 10

      const result = await fareService.calculateFare('route-1', 1, 2);
      expect(result).toBe(10);
    });

    it('returns the safe fallback (10) when stops are not found', async () => {
      mockPrisma.fare.findFirst.mockResolvedValue(null);
      mockPrisma.stop.findFirst.mockResolvedValue(null);

      const result = await fareService.calculateFare('missing-route', 1, 99);
      expect(result).toBe(10);
    });
  });
});
