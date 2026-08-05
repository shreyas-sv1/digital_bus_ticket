import { Test, TestingModule } from '@nestjs/testing';
import { BusesService } from './buses.service';
import { PrismaService } from '../prisma/prisma.service';

describe('BusesService', () => {
  let service: BusesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusesService,
        {
          provide: PrismaService,
          useValue: {
            bus: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<BusesService>(BusesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
