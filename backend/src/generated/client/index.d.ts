
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model Stop
 * 
 */
export type Stop = $Result.DefaultSelection<Prisma.$StopPayload>
/**
 * Model Fare
 * 
 */
export type Fare = $Result.DefaultSelection<Prisma.$FarePayload>
/**
 * Model Bus
 * 
 */
export type Bus = $Result.DefaultSelection<Prisma.$BusPayload>
/**
 * Model TravelSession
 * 
 */
export type TravelSession = $Result.DefaultSelection<Prisma.$TravelSessionPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model VerificationLog
 * 
 */
export type VerificationLog = $Result.DefaultSelection<Prisma.$VerificationLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  TRAVELER: 'TRAVELER',
  CONDUCTOR: 'CONDUCTOR',
  SUPERVISOR: 'SUPERVISOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SessionStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  TICKET_ISSUED: 'TICKET_ISSUED',
  CANCELLED: 'CANCELLED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  ONLINE: 'ONLINE'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PAID: 'PAID',
  PENDING: 'PENDING'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const VerificationResult: {
  VALID: 'VALID',
  INVALID: 'INVALID',
  ALREADY_CHECKED: 'ALREADY_CHECKED'
};

export type VerificationResult = (typeof VerificationResult)[keyof typeof VerificationResult]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type VerificationResult = $Enums.VerificationResult

export const VerificationResult: typeof $Enums.VerificationResult

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stop`: Exposes CRUD operations for the **Stop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stops
    * const stops = await prisma.stop.findMany()
    * ```
    */
  get stop(): Prisma.StopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fare`: Exposes CRUD operations for the **Fare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fares
    * const fares = await prisma.fare.findMany()
    * ```
    */
  get fare(): Prisma.FareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bus`: Exposes CRUD operations for the **Bus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buses
    * const buses = await prisma.bus.findMany()
    * ```
    */
  get bus(): Prisma.BusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelSession`: Exposes CRUD operations for the **TravelSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelSessions
    * const travelSessions = await prisma.travelSession.findMany()
    * ```
    */
  get travelSession(): Prisma.TravelSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationLog`: Exposes CRUD operations for the **VerificationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationLogs
    * const verificationLogs = await prisma.verificationLog.findMany()
    * ```
    */
  get verificationLog(): Prisma.VerificationLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Route: 'Route',
    Stop: 'Stop',
    Fare: 'Fare',
    Bus: 'Bus',
    TravelSession: 'TravelSession',
    Ticket: 'Ticket',
    VerificationLog: 'VerificationLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "route" | "stop" | "fare" | "bus" | "travelSession" | "ticket" | "verificationLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      Stop: {
        payload: Prisma.$StopPayload<ExtArgs>
        fields: Prisma.StopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          findFirst: {
            args: Prisma.StopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          findMany: {
            args: Prisma.StopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>[]
          }
          create: {
            args: Prisma.StopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          createMany: {
            args: Prisma.StopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>[]
          }
          delete: {
            args: Prisma.StopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          update: {
            args: Prisma.StopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          deleteMany: {
            args: Prisma.StopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>[]
          }
          upsert: {
            args: Prisma.StopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          aggregate: {
            args: Prisma.StopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStop>
          }
          groupBy: {
            args: Prisma.StopGroupByArgs<ExtArgs>
            result: $Utils.Optional<StopGroupByOutputType>[]
          }
          count: {
            args: Prisma.StopCountArgs<ExtArgs>
            result: $Utils.Optional<StopCountAggregateOutputType> | number
          }
        }
      }
      Fare: {
        payload: Prisma.$FarePayload<ExtArgs>
        fields: Prisma.FareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarePayload>
          }
          findFirst: {
            args: Prisma.FareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarePayload>
          }
          findMany: {
            args: Prisma.FareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarePayload>[]
          }
          create: {
            args: Prisma.FareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarePayload>
          }
          createMany: {
            args: Prisma.FareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarePayload>[]
          }
          delete: {
            args: Prisma.FareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarePayload>
          }
          update: {
            args: Prisma.FareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarePayload>
          }
          deleteMany: {
            args: Prisma.FareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarePayload>[]
          }
          upsert: {
            args: Prisma.FareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarePayload>
          }
          aggregate: {
            args: Prisma.FareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFare>
          }
          groupBy: {
            args: Prisma.FareGroupByArgs<ExtArgs>
            result: $Utils.Optional<FareGroupByOutputType>[]
          }
          count: {
            args: Prisma.FareCountArgs<ExtArgs>
            result: $Utils.Optional<FareCountAggregateOutputType> | number
          }
        }
      }
      Bus: {
        payload: Prisma.$BusPayload<ExtArgs>
        fields: Prisma.BusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findFirst: {
            args: Prisma.BusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findMany: {
            args: Prisma.BusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          create: {
            args: Prisma.BusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          createMany: {
            args: Prisma.BusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          delete: {
            args: Prisma.BusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          update: {
            args: Prisma.BusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          deleteMany: {
            args: Prisma.BusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          upsert: {
            args: Prisma.BusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          aggregate: {
            args: Prisma.BusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBus>
          }
          groupBy: {
            args: Prisma.BusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusCountArgs<ExtArgs>
            result: $Utils.Optional<BusCountAggregateOutputType> | number
          }
        }
      }
      TravelSession: {
        payload: Prisma.$TravelSessionPayload<ExtArgs>
        fields: Prisma.TravelSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelSessionPayload>
          }
          findFirst: {
            args: Prisma.TravelSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelSessionPayload>
          }
          findMany: {
            args: Prisma.TravelSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelSessionPayload>[]
          }
          create: {
            args: Prisma.TravelSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelSessionPayload>
          }
          createMany: {
            args: Prisma.TravelSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelSessionPayload>[]
          }
          delete: {
            args: Prisma.TravelSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelSessionPayload>
          }
          update: {
            args: Prisma.TravelSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelSessionPayload>
          }
          deleteMany: {
            args: Prisma.TravelSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelSessionPayload>[]
          }
          upsert: {
            args: Prisma.TravelSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelSessionPayload>
          }
          aggregate: {
            args: Prisma.TravelSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelSession>
          }
          groupBy: {
            args: Prisma.TravelSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TravelSessionCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      VerificationLog: {
        payload: Prisma.$VerificationLogPayload<ExtArgs>
        fields: Prisma.VerificationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationLogPayload>
          }
          findFirst: {
            args: Prisma.VerificationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationLogPayload>
          }
          findMany: {
            args: Prisma.VerificationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationLogPayload>[]
          }
          create: {
            args: Prisma.VerificationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationLogPayload>
          }
          createMany: {
            args: Prisma.VerificationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationLogPayload>[]
          }
          delete: {
            args: Prisma.VerificationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationLogPayload>
          }
          update: {
            args: Prisma.VerificationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationLogPayload>
          }
          deleteMany: {
            args: Prisma.VerificationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationLogPayload>[]
          }
          upsert: {
            args: Prisma.VerificationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationLogPayload>
          }
          aggregate: {
            args: Prisma.VerificationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationLog>
          }
          groupBy: {
            args: Prisma.VerificationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationLogCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    route?: RouteOmit
    stop?: StopOmit
    fare?: FareOmit
    bus?: BusOmit
    travelSession?: TravelSessionOmit
    ticket?: TicketOmit
    verificationLog?: VerificationLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    travelSessions: number
    travelerTickets: number
    conductedTickets: number
    verifiedTickets: number
    verificationLogs: number
    buses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travelSessions?: boolean | UserCountOutputTypeCountTravelSessionsArgs
    travelerTickets?: boolean | UserCountOutputTypeCountTravelerTicketsArgs
    conductedTickets?: boolean | UserCountOutputTypeCountConductedTicketsArgs
    verifiedTickets?: boolean | UserCountOutputTypeCountVerifiedTicketsArgs
    verificationLogs?: boolean | UserCountOutputTypeCountVerificationLogsArgs
    buses?: boolean | UserCountOutputTypeCountBusesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTravelSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTravelerTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConductedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerifiedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    stops: number
    fares: number
    buses: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stops?: boolean | RouteCountOutputTypeCountStopsArgs
    fares?: boolean | RouteCountOutputTypeCountFaresArgs
    buses?: boolean | RouteCountOutputTypeCountBusesArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountStopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StopWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountFaresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FareWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountBusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }


  /**
   * Count Type StopCountOutputType
   */

  export type StopCountOutputType = {
    boardingSessions: number
    destinationSessions: number
  }

  export type StopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boardingSessions?: boolean | StopCountOutputTypeCountBoardingSessionsArgs
    destinationSessions?: boolean | StopCountOutputTypeCountDestinationSessionsArgs
  }

  // Custom InputTypes
  /**
   * StopCountOutputType without action
   */
  export type StopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StopCountOutputType
     */
    select?: StopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StopCountOutputType without action
   */
  export type StopCountOutputTypeCountBoardingSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelSessionWhereInput
  }

  /**
   * StopCountOutputType without action
   */
  export type StopCountOutputTypeCountDestinationSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelSessionWhereInput
  }


  /**
   * Count Type BusCountOutputType
   */

  export type BusCountOutputType = {
    sessions: number
    tickets: number
  }

  export type BusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | BusCountOutputTypeCountSessionsArgs
    tickets?: boolean | BusCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusCountOutputType
     */
    select?: BusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelSessionWhereInput
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    verificationLogs: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationLogs?: boolean | TicketCountOutputTypeCountVerificationLogsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountVerificationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    travelSessions?: boolean | User$travelSessionsArgs<ExtArgs>
    travelerTickets?: boolean | User$travelerTicketsArgs<ExtArgs>
    conductedTickets?: boolean | User$conductedTicketsArgs<ExtArgs>
    verifiedTickets?: boolean | User$verifiedTicketsArgs<ExtArgs>
    verificationLogs?: boolean | User$verificationLogsArgs<ExtArgs>
    buses?: boolean | User$busesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travelSessions?: boolean | User$travelSessionsArgs<ExtArgs>
    travelerTickets?: boolean | User$travelerTicketsArgs<ExtArgs>
    conductedTickets?: boolean | User$conductedTicketsArgs<ExtArgs>
    verifiedTickets?: boolean | User$verifiedTicketsArgs<ExtArgs>
    verificationLogs?: boolean | User$verificationLogsArgs<ExtArgs>
    buses?: boolean | User$busesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      travelSessions: Prisma.$TravelSessionPayload<ExtArgs>[]
      travelerTickets: Prisma.$TicketPayload<ExtArgs>[]
      conductedTickets: Prisma.$TicketPayload<ExtArgs>[]
      verifiedTickets: Prisma.$TicketPayload<ExtArgs>[]
      verificationLogs: Prisma.$VerificationLogPayload<ExtArgs>[]
      buses: Prisma.$BusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    travelSessions<T extends User$travelSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$travelSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    travelerTickets<T extends User$travelerTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$travelerTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conductedTickets<T extends User$conductedTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$conductedTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verifiedTickets<T extends User$verifiedTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$verifiedTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verificationLogs<T extends User$verificationLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buses<T extends User$busesArgs<ExtArgs> = {}>(args?: Subset<T, User$busesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.travelSessions
   */
  export type User$travelSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    where?: TravelSessionWhereInput
    orderBy?: TravelSessionOrderByWithRelationInput | TravelSessionOrderByWithRelationInput[]
    cursor?: TravelSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelSessionScalarFieldEnum | TravelSessionScalarFieldEnum[]
  }

  /**
   * User.travelerTickets
   */
  export type User$travelerTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.conductedTickets
   */
  export type User$conductedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.verifiedTickets
   */
  export type User$verifiedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.verificationLogs
   */
  export type User$verificationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
    where?: VerificationLogWhereInput
    orderBy?: VerificationLogOrderByWithRelationInput | VerificationLogOrderByWithRelationInput[]
    cursor?: VerificationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationLogScalarFieldEnum | VerificationLogScalarFieldEnum[]
  }

  /**
   * User.buses
   */
  export type User$busesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    totalStops: number | null
  }

  export type RouteSumAggregateOutputType = {
    totalStops: number | null
  }

  export type RouteMinAggregateOutputType = {
    id: string | null
    routeName: string | null
    totalStops: number | null
    createdAt: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    id: string | null
    routeName: string | null
    totalStops: number | null
    createdAt: Date | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    routeName: number
    totalStops: number
    createdAt: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    totalStops?: true
  }

  export type RouteSumAggregateInputType = {
    totalStops?: true
  }

  export type RouteMinAggregateInputType = {
    id?: true
    routeName?: true
    totalStops?: true
    createdAt?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    routeName?: true
    totalStops?: true
    createdAt?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    routeName?: true
    totalStops?: true
    createdAt?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: string
    routeName: string
    totalStops: number
    createdAt: Date
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeName?: boolean
    totalStops?: boolean
    createdAt?: boolean
    stops?: boolean | Route$stopsArgs<ExtArgs>
    fares?: boolean | Route$faresArgs<ExtArgs>
    buses?: boolean | Route$busesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeName?: boolean
    totalStops?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeName?: boolean
    totalStops?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
    routeName?: boolean
    totalStops?: boolean
    createdAt?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeName" | "totalStops" | "createdAt", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stops?: boolean | Route$stopsArgs<ExtArgs>
    fares?: boolean | Route$faresArgs<ExtArgs>
    buses?: boolean | Route$busesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      stops: Prisma.$StopPayload<ExtArgs>[]
      fares: Prisma.$FarePayload<ExtArgs>[]
      buses: Prisma.$BusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routeName: string
      totalStops: number
      createdAt: Date
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stops<T extends Route$stopsArgs<ExtArgs> = {}>(args?: Subset<T, Route$stopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fares<T extends Route$faresArgs<ExtArgs> = {}>(args?: Subset<T, Route$faresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buses<T extends Route$busesArgs<ExtArgs> = {}>(args?: Subset<T, Route$busesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'String'>
    readonly routeName: FieldRef<"Route", 'String'>
    readonly totalStops: FieldRef<"Route", 'Int'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.stops
   */
  export type Route$stopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    where?: StopWhereInput
    orderBy?: StopOrderByWithRelationInput | StopOrderByWithRelationInput[]
    cursor?: StopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StopScalarFieldEnum | StopScalarFieldEnum[]
  }

  /**
   * Route.fares
   */
  export type Route$faresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareInclude<ExtArgs> | null
    where?: FareWhereInput
    orderBy?: FareOrderByWithRelationInput | FareOrderByWithRelationInput[]
    cursor?: FareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FareScalarFieldEnum | FareScalarFieldEnum[]
  }

  /**
   * Route.buses
   */
  export type Route$busesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model Stop
   */

  export type AggregateStop = {
    _count: StopCountAggregateOutputType | null
    _avg: StopAvgAggregateOutputType | null
    _sum: StopSumAggregateOutputType | null
    _min: StopMinAggregateOutputType | null
    _max: StopMaxAggregateOutputType | null
  }

  export type StopAvgAggregateOutputType = {
    stopOrder: number | null
    distanceFromStart: number | null
  }

  export type StopSumAggregateOutputType = {
    stopOrder: number | null
    distanceFromStart: number | null
  }

  export type StopMinAggregateOutputType = {
    id: string | null
    routeId: string | null
    stopName: string | null
    stopOrder: number | null
    distanceFromStart: number | null
  }

  export type StopMaxAggregateOutputType = {
    id: string | null
    routeId: string | null
    stopName: string | null
    stopOrder: number | null
    distanceFromStart: number | null
  }

  export type StopCountAggregateOutputType = {
    id: number
    routeId: number
    stopName: number
    stopOrder: number
    distanceFromStart: number
    _all: number
  }


  export type StopAvgAggregateInputType = {
    stopOrder?: true
    distanceFromStart?: true
  }

  export type StopSumAggregateInputType = {
    stopOrder?: true
    distanceFromStart?: true
  }

  export type StopMinAggregateInputType = {
    id?: true
    routeId?: true
    stopName?: true
    stopOrder?: true
    distanceFromStart?: true
  }

  export type StopMaxAggregateInputType = {
    id?: true
    routeId?: true
    stopName?: true
    stopOrder?: true
    distanceFromStart?: true
  }

  export type StopCountAggregateInputType = {
    id?: true
    routeId?: true
    stopName?: true
    stopOrder?: true
    distanceFromStart?: true
    _all?: true
  }

  export type StopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stop to aggregate.
     */
    where?: StopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stops to fetch.
     */
    orderBy?: StopOrderByWithRelationInput | StopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stops
    **/
    _count?: true | StopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StopMaxAggregateInputType
  }

  export type GetStopAggregateType<T extends StopAggregateArgs> = {
        [P in keyof T & keyof AggregateStop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStop[P]>
      : GetScalarType<T[P], AggregateStop[P]>
  }




  export type StopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StopWhereInput
    orderBy?: StopOrderByWithAggregationInput | StopOrderByWithAggregationInput[]
    by: StopScalarFieldEnum[] | StopScalarFieldEnum
    having?: StopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StopCountAggregateInputType | true
    _avg?: StopAvgAggregateInputType
    _sum?: StopSumAggregateInputType
    _min?: StopMinAggregateInputType
    _max?: StopMaxAggregateInputType
  }

  export type StopGroupByOutputType = {
    id: string
    routeId: string
    stopName: string
    stopOrder: number
    distanceFromStart: number
    _count: StopCountAggregateOutputType | null
    _avg: StopAvgAggregateOutputType | null
    _sum: StopSumAggregateOutputType | null
    _min: StopMinAggregateOutputType | null
    _max: StopMaxAggregateOutputType | null
  }

  type GetStopGroupByPayload<T extends StopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StopGroupByOutputType[P]>
            : GetScalarType<T[P], StopGroupByOutputType[P]>
        }
      >
    >


  export type StopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    stopName?: boolean
    stopOrder?: boolean
    distanceFromStart?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    boardingSessions?: boolean | Stop$boardingSessionsArgs<ExtArgs>
    destinationSessions?: boolean | Stop$destinationSessionsArgs<ExtArgs>
    _count?: boolean | StopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stop"]>

  export type StopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    stopName?: boolean
    stopOrder?: boolean
    distanceFromStart?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stop"]>

  export type StopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    stopName?: boolean
    stopOrder?: boolean
    distanceFromStart?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stop"]>

  export type StopSelectScalar = {
    id?: boolean
    routeId?: boolean
    stopName?: boolean
    stopOrder?: boolean
    distanceFromStart?: boolean
  }

  export type StopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "stopName" | "stopOrder" | "distanceFromStart", ExtArgs["result"]["stop"]>
  export type StopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    boardingSessions?: boolean | Stop$boardingSessionsArgs<ExtArgs>
    destinationSessions?: boolean | Stop$destinationSessionsArgs<ExtArgs>
    _count?: boolean | StopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type StopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $StopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stop"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      boardingSessions: Prisma.$TravelSessionPayload<ExtArgs>[]
      destinationSessions: Prisma.$TravelSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routeId: string
      stopName: string
      stopOrder: number
      distanceFromStart: number
    }, ExtArgs["result"]["stop"]>
    composites: {}
  }

  type StopGetPayload<S extends boolean | null | undefined | StopDefaultArgs> = $Result.GetResult<Prisma.$StopPayload, S>

  type StopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StopCountAggregateInputType | true
    }

  export interface StopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stop'], meta: { name: 'Stop' } }
    /**
     * Find zero or one Stop that matches the filter.
     * @param {StopFindUniqueArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StopFindUniqueArgs>(args: SelectSubset<T, StopFindUniqueArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StopFindUniqueOrThrowArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StopFindUniqueOrThrowArgs>(args: SelectSubset<T, StopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopFindFirstArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StopFindFirstArgs>(args?: SelectSubset<T, StopFindFirstArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopFindFirstOrThrowArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StopFindFirstOrThrowArgs>(args?: SelectSubset<T, StopFindFirstOrThrowArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stops
     * const stops = await prisma.stop.findMany()
     * 
     * // Get first 10 Stops
     * const stops = await prisma.stop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stopWithIdOnly = await prisma.stop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StopFindManyArgs>(args?: SelectSubset<T, StopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stop.
     * @param {StopCreateArgs} args - Arguments to create a Stop.
     * @example
     * // Create one Stop
     * const Stop = await prisma.stop.create({
     *   data: {
     *     // ... data to create a Stop
     *   }
     * })
     * 
     */
    create<T extends StopCreateArgs>(args: SelectSubset<T, StopCreateArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stops.
     * @param {StopCreateManyArgs} args - Arguments to create many Stops.
     * @example
     * // Create many Stops
     * const stop = await prisma.stop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StopCreateManyArgs>(args?: SelectSubset<T, StopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stops and returns the data saved in the database.
     * @param {StopCreateManyAndReturnArgs} args - Arguments to create many Stops.
     * @example
     * // Create many Stops
     * const stop = await prisma.stop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stops and only return the `id`
     * const stopWithIdOnly = await prisma.stop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StopCreateManyAndReturnArgs>(args?: SelectSubset<T, StopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stop.
     * @param {StopDeleteArgs} args - Arguments to delete one Stop.
     * @example
     * // Delete one Stop
     * const Stop = await prisma.stop.delete({
     *   where: {
     *     // ... filter to delete one Stop
     *   }
     * })
     * 
     */
    delete<T extends StopDeleteArgs>(args: SelectSubset<T, StopDeleteArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stop.
     * @param {StopUpdateArgs} args - Arguments to update one Stop.
     * @example
     * // Update one Stop
     * const stop = await prisma.stop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StopUpdateArgs>(args: SelectSubset<T, StopUpdateArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stops.
     * @param {StopDeleteManyArgs} args - Arguments to filter Stops to delete.
     * @example
     * // Delete a few Stops
     * const { count } = await prisma.stop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StopDeleteManyArgs>(args?: SelectSubset<T, StopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stops
     * const stop = await prisma.stop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StopUpdateManyArgs>(args: SelectSubset<T, StopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stops and returns the data updated in the database.
     * @param {StopUpdateManyAndReturnArgs} args - Arguments to update many Stops.
     * @example
     * // Update many Stops
     * const stop = await prisma.stop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stops and only return the `id`
     * const stopWithIdOnly = await prisma.stop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StopUpdateManyAndReturnArgs>(args: SelectSubset<T, StopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stop.
     * @param {StopUpsertArgs} args - Arguments to update or create a Stop.
     * @example
     * // Update or create a Stop
     * const stop = await prisma.stop.upsert({
     *   create: {
     *     // ... data to create a Stop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stop we want to update
     *   }
     * })
     */
    upsert<T extends StopUpsertArgs>(args: SelectSubset<T, StopUpsertArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopCountArgs} args - Arguments to filter Stops to count.
     * @example
     * // Count the number of Stops
     * const count = await prisma.stop.count({
     *   where: {
     *     // ... the filter for the Stops we want to count
     *   }
     * })
    **/
    count<T extends StopCountArgs>(
      args?: Subset<T, StopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StopAggregateArgs>(args: Subset<T, StopAggregateArgs>): Prisma.PrismaPromise<GetStopAggregateType<T>>

    /**
     * Group by Stop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StopGroupByArgs['orderBy'] }
        : { orderBy?: StopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stop model
   */
  readonly fields: StopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    boardingSessions<T extends Stop$boardingSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Stop$boardingSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    destinationSessions<T extends Stop$destinationSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Stop$destinationSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stop model
   */
  interface StopFieldRefs {
    readonly id: FieldRef<"Stop", 'String'>
    readonly routeId: FieldRef<"Stop", 'String'>
    readonly stopName: FieldRef<"Stop", 'String'>
    readonly stopOrder: FieldRef<"Stop", 'Int'>
    readonly distanceFromStart: FieldRef<"Stop", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Stop findUnique
   */
  export type StopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter, which Stop to fetch.
     */
    where: StopWhereUniqueInput
  }

  /**
   * Stop findUniqueOrThrow
   */
  export type StopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter, which Stop to fetch.
     */
    where: StopWhereUniqueInput
  }

  /**
   * Stop findFirst
   */
  export type StopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter, which Stop to fetch.
     */
    where?: StopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stops to fetch.
     */
    orderBy?: StopOrderByWithRelationInput | StopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stops.
     */
    cursor?: StopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stops.
     */
    distinct?: StopScalarFieldEnum | StopScalarFieldEnum[]
  }

  /**
   * Stop findFirstOrThrow
   */
  export type StopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter, which Stop to fetch.
     */
    where?: StopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stops to fetch.
     */
    orderBy?: StopOrderByWithRelationInput | StopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stops.
     */
    cursor?: StopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stops.
     */
    distinct?: StopScalarFieldEnum | StopScalarFieldEnum[]
  }

  /**
   * Stop findMany
   */
  export type StopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter, which Stops to fetch.
     */
    where?: StopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stops to fetch.
     */
    orderBy?: StopOrderByWithRelationInput | StopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stops.
     */
    cursor?: StopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stops.
     */
    skip?: number
    distinct?: StopScalarFieldEnum | StopScalarFieldEnum[]
  }

  /**
   * Stop create
   */
  export type StopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * The data needed to create a Stop.
     */
    data: XOR<StopCreateInput, StopUncheckedCreateInput>
  }

  /**
   * Stop createMany
   */
  export type StopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stops.
     */
    data: StopCreateManyInput | StopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stop createManyAndReturn
   */
  export type StopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * The data used to create many Stops.
     */
    data: StopCreateManyInput | StopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stop update
   */
  export type StopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * The data needed to update a Stop.
     */
    data: XOR<StopUpdateInput, StopUncheckedUpdateInput>
    /**
     * Choose, which Stop to update.
     */
    where: StopWhereUniqueInput
  }

  /**
   * Stop updateMany
   */
  export type StopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stops.
     */
    data: XOR<StopUpdateManyMutationInput, StopUncheckedUpdateManyInput>
    /**
     * Filter which Stops to update
     */
    where?: StopWhereInput
    /**
     * Limit how many Stops to update.
     */
    limit?: number
  }

  /**
   * Stop updateManyAndReturn
   */
  export type StopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * The data used to update Stops.
     */
    data: XOR<StopUpdateManyMutationInput, StopUncheckedUpdateManyInput>
    /**
     * Filter which Stops to update
     */
    where?: StopWhereInput
    /**
     * Limit how many Stops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stop upsert
   */
  export type StopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * The filter to search for the Stop to update in case it exists.
     */
    where: StopWhereUniqueInput
    /**
     * In case the Stop found by the `where` argument doesn't exist, create a new Stop with this data.
     */
    create: XOR<StopCreateInput, StopUncheckedCreateInput>
    /**
     * In case the Stop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StopUpdateInput, StopUncheckedUpdateInput>
  }

  /**
   * Stop delete
   */
  export type StopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter which Stop to delete.
     */
    where: StopWhereUniqueInput
  }

  /**
   * Stop deleteMany
   */
  export type StopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stops to delete
     */
    where?: StopWhereInput
    /**
     * Limit how many Stops to delete.
     */
    limit?: number
  }

  /**
   * Stop.boardingSessions
   */
  export type Stop$boardingSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    where?: TravelSessionWhereInput
    orderBy?: TravelSessionOrderByWithRelationInput | TravelSessionOrderByWithRelationInput[]
    cursor?: TravelSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelSessionScalarFieldEnum | TravelSessionScalarFieldEnum[]
  }

  /**
   * Stop.destinationSessions
   */
  export type Stop$destinationSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    where?: TravelSessionWhereInput
    orderBy?: TravelSessionOrderByWithRelationInput | TravelSessionOrderByWithRelationInput[]
    cursor?: TravelSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelSessionScalarFieldEnum | TravelSessionScalarFieldEnum[]
  }

  /**
   * Stop without action
   */
  export type StopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
  }


  /**
   * Model Fare
   */

  export type AggregateFare = {
    _count: FareCountAggregateOutputType | null
    _avg: FareAvgAggregateOutputType | null
    _sum: FareSumAggregateOutputType | null
    _min: FareMinAggregateOutputType | null
    _max: FareMaxAggregateOutputType | null
  }

  export type FareAvgAggregateOutputType = {
    fromStopOrder: number | null
    toStopOrder: number | null
    amount: number | null
  }

  export type FareSumAggregateOutputType = {
    fromStopOrder: number | null
    toStopOrder: number | null
    amount: number | null
  }

  export type FareMinAggregateOutputType = {
    id: string | null
    routeId: string | null
    fromStopOrder: number | null
    toStopOrder: number | null
    amount: number | null
  }

  export type FareMaxAggregateOutputType = {
    id: string | null
    routeId: string | null
    fromStopOrder: number | null
    toStopOrder: number | null
    amount: number | null
  }

  export type FareCountAggregateOutputType = {
    id: number
    routeId: number
    fromStopOrder: number
    toStopOrder: number
    amount: number
    _all: number
  }


  export type FareAvgAggregateInputType = {
    fromStopOrder?: true
    toStopOrder?: true
    amount?: true
  }

  export type FareSumAggregateInputType = {
    fromStopOrder?: true
    toStopOrder?: true
    amount?: true
  }

  export type FareMinAggregateInputType = {
    id?: true
    routeId?: true
    fromStopOrder?: true
    toStopOrder?: true
    amount?: true
  }

  export type FareMaxAggregateInputType = {
    id?: true
    routeId?: true
    fromStopOrder?: true
    toStopOrder?: true
    amount?: true
  }

  export type FareCountAggregateInputType = {
    id?: true
    routeId?: true
    fromStopOrder?: true
    toStopOrder?: true
    amount?: true
    _all?: true
  }

  export type FareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fare to aggregate.
     */
    where?: FareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fares to fetch.
     */
    orderBy?: FareOrderByWithRelationInput | FareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fares
    **/
    _count?: true | FareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FareMaxAggregateInputType
  }

  export type GetFareAggregateType<T extends FareAggregateArgs> = {
        [P in keyof T & keyof AggregateFare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFare[P]>
      : GetScalarType<T[P], AggregateFare[P]>
  }




  export type FareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FareWhereInput
    orderBy?: FareOrderByWithAggregationInput | FareOrderByWithAggregationInput[]
    by: FareScalarFieldEnum[] | FareScalarFieldEnum
    having?: FareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FareCountAggregateInputType | true
    _avg?: FareAvgAggregateInputType
    _sum?: FareSumAggregateInputType
    _min?: FareMinAggregateInputType
    _max?: FareMaxAggregateInputType
  }

  export type FareGroupByOutputType = {
    id: string
    routeId: string
    fromStopOrder: number
    toStopOrder: number
    amount: number
    _count: FareCountAggregateOutputType | null
    _avg: FareAvgAggregateOutputType | null
    _sum: FareSumAggregateOutputType | null
    _min: FareMinAggregateOutputType | null
    _max: FareMaxAggregateOutputType | null
  }

  type GetFareGroupByPayload<T extends FareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FareGroupByOutputType[P]>
            : GetScalarType<T[P], FareGroupByOutputType[P]>
        }
      >
    >


  export type FareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    fromStopOrder?: boolean
    toStopOrder?: boolean
    amount?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fare"]>

  export type FareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    fromStopOrder?: boolean
    toStopOrder?: boolean
    amount?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fare"]>

  export type FareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    fromStopOrder?: boolean
    toStopOrder?: boolean
    amount?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fare"]>

  export type FareSelectScalar = {
    id?: boolean
    routeId?: boolean
    fromStopOrder?: boolean
    toStopOrder?: boolean
    amount?: boolean
  }

  export type FareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "fromStopOrder" | "toStopOrder" | "amount", ExtArgs["result"]["fare"]>
  export type FareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type FareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type FareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $FarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fare"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routeId: string
      fromStopOrder: number
      toStopOrder: number
      amount: number
    }, ExtArgs["result"]["fare"]>
    composites: {}
  }

  type FareGetPayload<S extends boolean | null | undefined | FareDefaultArgs> = $Result.GetResult<Prisma.$FarePayload, S>

  type FareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FareCountAggregateInputType | true
    }

  export interface FareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fare'], meta: { name: 'Fare' } }
    /**
     * Find zero or one Fare that matches the filter.
     * @param {FareFindUniqueArgs} args - Arguments to find a Fare
     * @example
     * // Get one Fare
     * const fare = await prisma.fare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FareFindUniqueArgs>(args: SelectSubset<T, FareFindUniqueArgs<ExtArgs>>): Prisma__FareClient<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FareFindUniqueOrThrowArgs} args - Arguments to find a Fare
     * @example
     * // Get one Fare
     * const fare = await prisma.fare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FareFindUniqueOrThrowArgs>(args: SelectSubset<T, FareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FareClient<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareFindFirstArgs} args - Arguments to find a Fare
     * @example
     * // Get one Fare
     * const fare = await prisma.fare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FareFindFirstArgs>(args?: SelectSubset<T, FareFindFirstArgs<ExtArgs>>): Prisma__FareClient<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareFindFirstOrThrowArgs} args - Arguments to find a Fare
     * @example
     * // Get one Fare
     * const fare = await prisma.fare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FareFindFirstOrThrowArgs>(args?: SelectSubset<T, FareFindFirstOrThrowArgs<ExtArgs>>): Prisma__FareClient<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fares
     * const fares = await prisma.fare.findMany()
     * 
     * // Get first 10 Fares
     * const fares = await prisma.fare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fareWithIdOnly = await prisma.fare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FareFindManyArgs>(args?: SelectSubset<T, FareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fare.
     * @param {FareCreateArgs} args - Arguments to create a Fare.
     * @example
     * // Create one Fare
     * const Fare = await prisma.fare.create({
     *   data: {
     *     // ... data to create a Fare
     *   }
     * })
     * 
     */
    create<T extends FareCreateArgs>(args: SelectSubset<T, FareCreateArgs<ExtArgs>>): Prisma__FareClient<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fares.
     * @param {FareCreateManyArgs} args - Arguments to create many Fares.
     * @example
     * // Create many Fares
     * const fare = await prisma.fare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FareCreateManyArgs>(args?: SelectSubset<T, FareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fares and returns the data saved in the database.
     * @param {FareCreateManyAndReturnArgs} args - Arguments to create many Fares.
     * @example
     * // Create many Fares
     * const fare = await prisma.fare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fares and only return the `id`
     * const fareWithIdOnly = await prisma.fare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FareCreateManyAndReturnArgs>(args?: SelectSubset<T, FareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fare.
     * @param {FareDeleteArgs} args - Arguments to delete one Fare.
     * @example
     * // Delete one Fare
     * const Fare = await prisma.fare.delete({
     *   where: {
     *     // ... filter to delete one Fare
     *   }
     * })
     * 
     */
    delete<T extends FareDeleteArgs>(args: SelectSubset<T, FareDeleteArgs<ExtArgs>>): Prisma__FareClient<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fare.
     * @param {FareUpdateArgs} args - Arguments to update one Fare.
     * @example
     * // Update one Fare
     * const fare = await prisma.fare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FareUpdateArgs>(args: SelectSubset<T, FareUpdateArgs<ExtArgs>>): Prisma__FareClient<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fares.
     * @param {FareDeleteManyArgs} args - Arguments to filter Fares to delete.
     * @example
     * // Delete a few Fares
     * const { count } = await prisma.fare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FareDeleteManyArgs>(args?: SelectSubset<T, FareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fares
     * const fare = await prisma.fare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FareUpdateManyArgs>(args: SelectSubset<T, FareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fares and returns the data updated in the database.
     * @param {FareUpdateManyAndReturnArgs} args - Arguments to update many Fares.
     * @example
     * // Update many Fares
     * const fare = await prisma.fare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fares and only return the `id`
     * const fareWithIdOnly = await prisma.fare.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FareUpdateManyAndReturnArgs>(args: SelectSubset<T, FareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fare.
     * @param {FareUpsertArgs} args - Arguments to update or create a Fare.
     * @example
     * // Update or create a Fare
     * const fare = await prisma.fare.upsert({
     *   create: {
     *     // ... data to create a Fare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fare we want to update
     *   }
     * })
     */
    upsert<T extends FareUpsertArgs>(args: SelectSubset<T, FareUpsertArgs<ExtArgs>>): Prisma__FareClient<$Result.GetResult<Prisma.$FarePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareCountArgs} args - Arguments to filter Fares to count.
     * @example
     * // Count the number of Fares
     * const count = await prisma.fare.count({
     *   where: {
     *     // ... the filter for the Fares we want to count
     *   }
     * })
    **/
    count<T extends FareCountArgs>(
      args?: Subset<T, FareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FareAggregateArgs>(args: Subset<T, FareAggregateArgs>): Prisma.PrismaPromise<GetFareAggregateType<T>>

    /**
     * Group by Fare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FareGroupByArgs['orderBy'] }
        : { orderBy?: FareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fare model
   */
  readonly fields: FareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fare model
   */
  interface FareFieldRefs {
    readonly id: FieldRef<"Fare", 'String'>
    readonly routeId: FieldRef<"Fare", 'String'>
    readonly fromStopOrder: FieldRef<"Fare", 'Int'>
    readonly toStopOrder: FieldRef<"Fare", 'Int'>
    readonly amount: FieldRef<"Fare", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Fare findUnique
   */
  export type FareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareInclude<ExtArgs> | null
    /**
     * Filter, which Fare to fetch.
     */
    where: FareWhereUniqueInput
  }

  /**
   * Fare findUniqueOrThrow
   */
  export type FareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareInclude<ExtArgs> | null
    /**
     * Filter, which Fare to fetch.
     */
    where: FareWhereUniqueInput
  }

  /**
   * Fare findFirst
   */
  export type FareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareInclude<ExtArgs> | null
    /**
     * Filter, which Fare to fetch.
     */
    where?: FareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fares to fetch.
     */
    orderBy?: FareOrderByWithRelationInput | FareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fares.
     */
    cursor?: FareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fares.
     */
    distinct?: FareScalarFieldEnum | FareScalarFieldEnum[]
  }

  /**
   * Fare findFirstOrThrow
   */
  export type FareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareInclude<ExtArgs> | null
    /**
     * Filter, which Fare to fetch.
     */
    where?: FareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fares to fetch.
     */
    orderBy?: FareOrderByWithRelationInput | FareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fares.
     */
    cursor?: FareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fares.
     */
    distinct?: FareScalarFieldEnum | FareScalarFieldEnum[]
  }

  /**
   * Fare findMany
   */
  export type FareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareInclude<ExtArgs> | null
    /**
     * Filter, which Fares to fetch.
     */
    where?: FareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fares to fetch.
     */
    orderBy?: FareOrderByWithRelationInput | FareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fares.
     */
    cursor?: FareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fares.
     */
    skip?: number
    distinct?: FareScalarFieldEnum | FareScalarFieldEnum[]
  }

  /**
   * Fare create
   */
  export type FareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareInclude<ExtArgs> | null
    /**
     * The data needed to create a Fare.
     */
    data: XOR<FareCreateInput, FareUncheckedCreateInput>
  }

  /**
   * Fare createMany
   */
  export type FareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fares.
     */
    data: FareCreateManyInput | FareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fare createManyAndReturn
   */
  export type FareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * The data used to create many Fares.
     */
    data: FareCreateManyInput | FareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fare update
   */
  export type FareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareInclude<ExtArgs> | null
    /**
     * The data needed to update a Fare.
     */
    data: XOR<FareUpdateInput, FareUncheckedUpdateInput>
    /**
     * Choose, which Fare to update.
     */
    where: FareWhereUniqueInput
  }

  /**
   * Fare updateMany
   */
  export type FareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fares.
     */
    data: XOR<FareUpdateManyMutationInput, FareUncheckedUpdateManyInput>
    /**
     * Filter which Fares to update
     */
    where?: FareWhereInput
    /**
     * Limit how many Fares to update.
     */
    limit?: number
  }

  /**
   * Fare updateManyAndReturn
   */
  export type FareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * The data used to update Fares.
     */
    data: XOR<FareUpdateManyMutationInput, FareUncheckedUpdateManyInput>
    /**
     * Filter which Fares to update
     */
    where?: FareWhereInput
    /**
     * Limit how many Fares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fare upsert
   */
  export type FareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareInclude<ExtArgs> | null
    /**
     * The filter to search for the Fare to update in case it exists.
     */
    where: FareWhereUniqueInput
    /**
     * In case the Fare found by the `where` argument doesn't exist, create a new Fare with this data.
     */
    create: XOR<FareCreateInput, FareUncheckedCreateInput>
    /**
     * In case the Fare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FareUpdateInput, FareUncheckedUpdateInput>
  }

  /**
   * Fare delete
   */
  export type FareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareInclude<ExtArgs> | null
    /**
     * Filter which Fare to delete.
     */
    where: FareWhereUniqueInput
  }

  /**
   * Fare deleteMany
   */
  export type FareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fares to delete
     */
    where?: FareWhereInput
    /**
     * Limit how many Fares to delete.
     */
    limit?: number
  }

  /**
   * Fare without action
   */
  export type FareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fare
     */
    select?: FareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fare
     */
    omit?: FareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FareInclude<ExtArgs> | null
  }


  /**
   * Model Bus
   */

  export type AggregateBus = {
    _count: BusCountAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  export type BusMinAggregateOutputType = {
    id: string | null
    busNumber: string | null
    routeId: string | null
    conductorId: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BusMaxAggregateOutputType = {
    id: string | null
    busNumber: string | null
    routeId: string | null
    conductorId: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BusCountAggregateOutputType = {
    id: number
    busNumber: number
    routeId: number
    conductorId: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type BusMinAggregateInputType = {
    id?: true
    busNumber?: true
    routeId?: true
    conductorId?: true
    isActive?: true
    createdAt?: true
  }

  export type BusMaxAggregateInputType = {
    id?: true
    busNumber?: true
    routeId?: true
    conductorId?: true
    isActive?: true
    createdAt?: true
  }

  export type BusCountAggregateInputType = {
    id?: true
    busNumber?: true
    routeId?: true
    conductorId?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type BusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bus to aggregate.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buses
    **/
    _count?: true | BusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusMaxAggregateInputType
  }

  export type GetBusAggregateType<T extends BusAggregateArgs> = {
        [P in keyof T & keyof AggregateBus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBus[P]>
      : GetScalarType<T[P], AggregateBus[P]>
  }




  export type BusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
    orderBy?: BusOrderByWithAggregationInput | BusOrderByWithAggregationInput[]
    by: BusScalarFieldEnum[] | BusScalarFieldEnum
    having?: BusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusCountAggregateInputType | true
    _min?: BusMinAggregateInputType
    _max?: BusMaxAggregateInputType
  }

  export type BusGroupByOutputType = {
    id: string
    busNumber: string
    routeId: string
    conductorId: string | null
    isActive: boolean
    createdAt: Date
    _count: BusCountAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  type GetBusGroupByPayload<T extends BusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusGroupByOutputType[P]>
            : GetScalarType<T[P], BusGroupByOutputType[P]>
        }
      >
    >


  export type BusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busNumber?: boolean
    routeId?: boolean
    conductorId?: boolean
    isActive?: boolean
    createdAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    conductor?: boolean | Bus$conductorArgs<ExtArgs>
    sessions?: boolean | Bus$sessionsArgs<ExtArgs>
    tickets?: boolean | Bus$ticketsArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busNumber?: boolean
    routeId?: boolean
    conductorId?: boolean
    isActive?: boolean
    createdAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    conductor?: boolean | Bus$conductorArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busNumber?: boolean
    routeId?: boolean
    conductorId?: boolean
    isActive?: boolean
    createdAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    conductor?: boolean | Bus$conductorArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectScalar = {
    id?: boolean
    busNumber?: boolean
    routeId?: boolean
    conductorId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type BusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "busNumber" | "routeId" | "conductorId" | "isActive" | "createdAt", ExtArgs["result"]["bus"]>
  export type BusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    conductor?: boolean | Bus$conductorArgs<ExtArgs>
    sessions?: boolean | Bus$sessionsArgs<ExtArgs>
    tickets?: boolean | Bus$ticketsArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    conductor?: boolean | Bus$conductorArgs<ExtArgs>
  }
  export type BusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    conductor?: boolean | Bus$conductorArgs<ExtArgs>
  }

  export type $BusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bus"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      conductor: Prisma.$UserPayload<ExtArgs> | null
      sessions: Prisma.$TravelSessionPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      busNumber: string
      routeId: string
      conductorId: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["bus"]>
    composites: {}
  }

  type BusGetPayload<S extends boolean | null | undefined | BusDefaultArgs> = $Result.GetResult<Prisma.$BusPayload, S>

  type BusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusCountAggregateInputType | true
    }

  export interface BusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bus'], meta: { name: 'Bus' } }
    /**
     * Find zero or one Bus that matches the filter.
     * @param {BusFindUniqueArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusFindUniqueArgs>(args: SelectSubset<T, BusFindUniqueArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusFindUniqueOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusFindUniqueOrThrowArgs>(args: SelectSubset<T, BusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusFindFirstArgs>(args?: SelectSubset<T, BusFindFirstArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusFindFirstOrThrowArgs>(args?: SelectSubset<T, BusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buses
     * const buses = await prisma.bus.findMany()
     * 
     * // Get first 10 Buses
     * const buses = await prisma.bus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busWithIdOnly = await prisma.bus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusFindManyArgs>(args?: SelectSubset<T, BusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bus.
     * @param {BusCreateArgs} args - Arguments to create a Bus.
     * @example
     * // Create one Bus
     * const Bus = await prisma.bus.create({
     *   data: {
     *     // ... data to create a Bus
     *   }
     * })
     * 
     */
    create<T extends BusCreateArgs>(args: SelectSubset<T, BusCreateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buses.
     * @param {BusCreateManyArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusCreateManyArgs>(args?: SelectSubset<T, BusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buses and returns the data saved in the database.
     * @param {BusCreateManyAndReturnArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buses and only return the `id`
     * const busWithIdOnly = await prisma.bus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusCreateManyAndReturnArgs>(args?: SelectSubset<T, BusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bus.
     * @param {BusDeleteArgs} args - Arguments to delete one Bus.
     * @example
     * // Delete one Bus
     * const Bus = await prisma.bus.delete({
     *   where: {
     *     // ... filter to delete one Bus
     *   }
     * })
     * 
     */
    delete<T extends BusDeleteArgs>(args: SelectSubset<T, BusDeleteArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bus.
     * @param {BusUpdateArgs} args - Arguments to update one Bus.
     * @example
     * // Update one Bus
     * const bus = await prisma.bus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusUpdateArgs>(args: SelectSubset<T, BusUpdateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buses.
     * @param {BusDeleteManyArgs} args - Arguments to filter Buses to delete.
     * @example
     * // Delete a few Buses
     * const { count } = await prisma.bus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusDeleteManyArgs>(args?: SelectSubset<T, BusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusUpdateManyArgs>(args: SelectSubset<T, BusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses and returns the data updated in the database.
     * @param {BusUpdateManyAndReturnArgs} args - Arguments to update many Buses.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buses and only return the `id`
     * const busWithIdOnly = await prisma.bus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusUpdateManyAndReturnArgs>(args: SelectSubset<T, BusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bus.
     * @param {BusUpsertArgs} args - Arguments to update or create a Bus.
     * @example
     * // Update or create a Bus
     * const bus = await prisma.bus.upsert({
     *   create: {
     *     // ... data to create a Bus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bus we want to update
     *   }
     * })
     */
    upsert<T extends BusUpsertArgs>(args: SelectSubset<T, BusUpsertArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusCountArgs} args - Arguments to filter Buses to count.
     * @example
     * // Count the number of Buses
     * const count = await prisma.bus.count({
     *   where: {
     *     // ... the filter for the Buses we want to count
     *   }
     * })
    **/
    count<T extends BusCountArgs>(
      args?: Subset<T, BusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusAggregateArgs>(args: Subset<T, BusAggregateArgs>): Prisma.PrismaPromise<GetBusAggregateType<T>>

    /**
     * Group by Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusGroupByArgs['orderBy'] }
        : { orderBy?: BusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bus model
   */
  readonly fields: BusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conductor<T extends Bus$conductorArgs<ExtArgs> = {}>(args?: Subset<T, Bus$conductorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends Bus$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Bus$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Bus$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Bus$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bus model
   */
  interface BusFieldRefs {
    readonly id: FieldRef<"Bus", 'String'>
    readonly busNumber: FieldRef<"Bus", 'String'>
    readonly routeId: FieldRef<"Bus", 'String'>
    readonly conductorId: FieldRef<"Bus", 'String'>
    readonly isActive: FieldRef<"Bus", 'Boolean'>
    readonly createdAt: FieldRef<"Bus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bus findUnique
   */
  export type BusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findUniqueOrThrow
   */
  export type BusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findFirst
   */
  export type BusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findFirstOrThrow
   */
  export type BusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findMany
   */
  export type BusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Buses to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus create
   */
  export type BusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to create a Bus.
     */
    data: XOR<BusCreateInput, BusUncheckedCreateInput>
  }

  /**
   * Bus createMany
   */
  export type BusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bus createManyAndReturn
   */
  export type BusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bus update
   */
  export type BusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to update a Bus.
     */
    data: XOR<BusUpdateInput, BusUncheckedUpdateInput>
    /**
     * Choose, which Bus to update.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus updateMany
   */
  export type BusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
  }

  /**
   * Bus updateManyAndReturn
   */
  export type BusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bus upsert
   */
  export type BusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The filter to search for the Bus to update in case it exists.
     */
    where: BusWhereUniqueInput
    /**
     * In case the Bus found by the `where` argument doesn't exist, create a new Bus with this data.
     */
    create: XOR<BusCreateInput, BusUncheckedCreateInput>
    /**
     * In case the Bus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusUpdateInput, BusUncheckedUpdateInput>
  }

  /**
   * Bus delete
   */
  export type BusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter which Bus to delete.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus deleteMany
   */
  export type BusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buses to delete
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to delete.
     */
    limit?: number
  }

  /**
   * Bus.conductor
   */
  export type Bus$conductorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Bus.sessions
   */
  export type Bus$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    where?: TravelSessionWhereInput
    orderBy?: TravelSessionOrderByWithRelationInput | TravelSessionOrderByWithRelationInput[]
    cursor?: TravelSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelSessionScalarFieldEnum | TravelSessionScalarFieldEnum[]
  }

  /**
   * Bus.tickets
   */
  export type Bus$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Bus without action
   */
  export type BusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
  }


  /**
   * Model TravelSession
   */

  export type AggregateTravelSession = {
    _count: TravelSessionCountAggregateOutputType | null
    _min: TravelSessionMinAggregateOutputType | null
    _max: TravelSessionMaxAggregateOutputType | null
  }

  export type TravelSessionMinAggregateOutputType = {
    id: string | null
    travelerId: string | null
    busId: string | null
    boardingStopId: string | null
    destinationStopId: string | null
    status: $Enums.SessionStatus | null
    tempQRCode: string | null
    qrExpiresAt: Date | null
    createdAt: Date | null
  }

  export type TravelSessionMaxAggregateOutputType = {
    id: string | null
    travelerId: string | null
    busId: string | null
    boardingStopId: string | null
    destinationStopId: string | null
    status: $Enums.SessionStatus | null
    tempQRCode: string | null
    qrExpiresAt: Date | null
    createdAt: Date | null
  }

  export type TravelSessionCountAggregateOutputType = {
    id: number
    travelerId: number
    busId: number
    boardingStopId: number
    destinationStopId: number
    status: number
    tempQRCode: number
    qrExpiresAt: number
    createdAt: number
    _all: number
  }


  export type TravelSessionMinAggregateInputType = {
    id?: true
    travelerId?: true
    busId?: true
    boardingStopId?: true
    destinationStopId?: true
    status?: true
    tempQRCode?: true
    qrExpiresAt?: true
    createdAt?: true
  }

  export type TravelSessionMaxAggregateInputType = {
    id?: true
    travelerId?: true
    busId?: true
    boardingStopId?: true
    destinationStopId?: true
    status?: true
    tempQRCode?: true
    qrExpiresAt?: true
    createdAt?: true
  }

  export type TravelSessionCountAggregateInputType = {
    id?: true
    travelerId?: true
    busId?: true
    boardingStopId?: true
    destinationStopId?: true
    status?: true
    tempQRCode?: true
    qrExpiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type TravelSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelSession to aggregate.
     */
    where?: TravelSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelSessions to fetch.
     */
    orderBy?: TravelSessionOrderByWithRelationInput | TravelSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelSessions
    **/
    _count?: true | TravelSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelSessionMaxAggregateInputType
  }

  export type GetTravelSessionAggregateType<T extends TravelSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelSession[P]>
      : GetScalarType<T[P], AggregateTravelSession[P]>
  }




  export type TravelSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelSessionWhereInput
    orderBy?: TravelSessionOrderByWithAggregationInput | TravelSessionOrderByWithAggregationInput[]
    by: TravelSessionScalarFieldEnum[] | TravelSessionScalarFieldEnum
    having?: TravelSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelSessionCountAggregateInputType | true
    _min?: TravelSessionMinAggregateInputType
    _max?: TravelSessionMaxAggregateInputType
  }

  export type TravelSessionGroupByOutputType = {
    id: string
    travelerId: string
    busId: string
    boardingStopId: string
    destinationStopId: string
    status: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date
    createdAt: Date
    _count: TravelSessionCountAggregateOutputType | null
    _min: TravelSessionMinAggregateOutputType | null
    _max: TravelSessionMaxAggregateOutputType | null
  }

  type GetTravelSessionGroupByPayload<T extends TravelSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TravelSessionGroupByOutputType[P]>
        }
      >
    >


  export type TravelSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    travelerId?: boolean
    busId?: boolean
    boardingStopId?: boolean
    destinationStopId?: boolean
    status?: boolean
    tempQRCode?: boolean
    qrExpiresAt?: boolean
    createdAt?: boolean
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    boardingStop?: boolean | StopDefaultArgs<ExtArgs>
    destinationStop?: boolean | StopDefaultArgs<ExtArgs>
    ticket?: boolean | TravelSession$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["travelSession"]>

  export type TravelSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    travelerId?: boolean
    busId?: boolean
    boardingStopId?: boolean
    destinationStopId?: boolean
    status?: boolean
    tempQRCode?: boolean
    qrExpiresAt?: boolean
    createdAt?: boolean
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    boardingStop?: boolean | StopDefaultArgs<ExtArgs>
    destinationStop?: boolean | StopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelSession"]>

  export type TravelSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    travelerId?: boolean
    busId?: boolean
    boardingStopId?: boolean
    destinationStopId?: boolean
    status?: boolean
    tempQRCode?: boolean
    qrExpiresAt?: boolean
    createdAt?: boolean
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    boardingStop?: boolean | StopDefaultArgs<ExtArgs>
    destinationStop?: boolean | StopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelSession"]>

  export type TravelSessionSelectScalar = {
    id?: boolean
    travelerId?: boolean
    busId?: boolean
    boardingStopId?: boolean
    destinationStopId?: boolean
    status?: boolean
    tempQRCode?: boolean
    qrExpiresAt?: boolean
    createdAt?: boolean
  }

  export type TravelSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "travelerId" | "busId" | "boardingStopId" | "destinationStopId" | "status" | "tempQRCode" | "qrExpiresAt" | "createdAt", ExtArgs["result"]["travelSession"]>
  export type TravelSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    boardingStop?: boolean | StopDefaultArgs<ExtArgs>
    destinationStop?: boolean | StopDefaultArgs<ExtArgs>
    ticket?: boolean | TravelSession$ticketArgs<ExtArgs>
  }
  export type TravelSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    boardingStop?: boolean | StopDefaultArgs<ExtArgs>
    destinationStop?: boolean | StopDefaultArgs<ExtArgs>
  }
  export type TravelSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    boardingStop?: boolean | StopDefaultArgs<ExtArgs>
    destinationStop?: boolean | StopDefaultArgs<ExtArgs>
  }

  export type $TravelSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelSession"
    objects: {
      traveler: Prisma.$UserPayload<ExtArgs>
      bus: Prisma.$BusPayload<ExtArgs>
      boardingStop: Prisma.$StopPayload<ExtArgs>
      destinationStop: Prisma.$StopPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      travelerId: string
      busId: string
      boardingStopId: string
      destinationStopId: string
      status: $Enums.SessionStatus
      tempQRCode: string
      qrExpiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["travelSession"]>
    composites: {}
  }

  type TravelSessionGetPayload<S extends boolean | null | undefined | TravelSessionDefaultArgs> = $Result.GetResult<Prisma.$TravelSessionPayload, S>

  type TravelSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelSessionCountAggregateInputType | true
    }

  export interface TravelSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelSession'], meta: { name: 'TravelSession' } }
    /**
     * Find zero or one TravelSession that matches the filter.
     * @param {TravelSessionFindUniqueArgs} args - Arguments to find a TravelSession
     * @example
     * // Get one TravelSession
     * const travelSession = await prisma.travelSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelSessionFindUniqueArgs>(args: SelectSubset<T, TravelSessionFindUniqueArgs<ExtArgs>>): Prisma__TravelSessionClient<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelSessionFindUniqueOrThrowArgs} args - Arguments to find a TravelSession
     * @example
     * // Get one TravelSession
     * const travelSession = await prisma.travelSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelSessionClient<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelSessionFindFirstArgs} args - Arguments to find a TravelSession
     * @example
     * // Get one TravelSession
     * const travelSession = await prisma.travelSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelSessionFindFirstArgs>(args?: SelectSubset<T, TravelSessionFindFirstArgs<ExtArgs>>): Prisma__TravelSessionClient<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelSessionFindFirstOrThrowArgs} args - Arguments to find a TravelSession
     * @example
     * // Get one TravelSession
     * const travelSession = await prisma.travelSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelSessionClient<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelSessions
     * const travelSessions = await prisma.travelSession.findMany()
     * 
     * // Get first 10 TravelSessions
     * const travelSessions = await prisma.travelSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelSessionWithIdOnly = await prisma.travelSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelSessionFindManyArgs>(args?: SelectSubset<T, TravelSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelSession.
     * @param {TravelSessionCreateArgs} args - Arguments to create a TravelSession.
     * @example
     * // Create one TravelSession
     * const TravelSession = await prisma.travelSession.create({
     *   data: {
     *     // ... data to create a TravelSession
     *   }
     * })
     * 
     */
    create<T extends TravelSessionCreateArgs>(args: SelectSubset<T, TravelSessionCreateArgs<ExtArgs>>): Prisma__TravelSessionClient<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelSessions.
     * @param {TravelSessionCreateManyArgs} args - Arguments to create many TravelSessions.
     * @example
     * // Create many TravelSessions
     * const travelSession = await prisma.travelSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelSessionCreateManyArgs>(args?: SelectSubset<T, TravelSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelSessions and returns the data saved in the database.
     * @param {TravelSessionCreateManyAndReturnArgs} args - Arguments to create many TravelSessions.
     * @example
     * // Create many TravelSessions
     * const travelSession = await prisma.travelSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelSessions and only return the `id`
     * const travelSessionWithIdOnly = await prisma.travelSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelSession.
     * @param {TravelSessionDeleteArgs} args - Arguments to delete one TravelSession.
     * @example
     * // Delete one TravelSession
     * const TravelSession = await prisma.travelSession.delete({
     *   where: {
     *     // ... filter to delete one TravelSession
     *   }
     * })
     * 
     */
    delete<T extends TravelSessionDeleteArgs>(args: SelectSubset<T, TravelSessionDeleteArgs<ExtArgs>>): Prisma__TravelSessionClient<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelSession.
     * @param {TravelSessionUpdateArgs} args - Arguments to update one TravelSession.
     * @example
     * // Update one TravelSession
     * const travelSession = await prisma.travelSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelSessionUpdateArgs>(args: SelectSubset<T, TravelSessionUpdateArgs<ExtArgs>>): Prisma__TravelSessionClient<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelSessions.
     * @param {TravelSessionDeleteManyArgs} args - Arguments to filter TravelSessions to delete.
     * @example
     * // Delete a few TravelSessions
     * const { count } = await prisma.travelSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelSessionDeleteManyArgs>(args?: SelectSubset<T, TravelSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelSessions
     * const travelSession = await prisma.travelSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelSessionUpdateManyArgs>(args: SelectSubset<T, TravelSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelSessions and returns the data updated in the database.
     * @param {TravelSessionUpdateManyAndReturnArgs} args - Arguments to update many TravelSessions.
     * @example
     * // Update many TravelSessions
     * const travelSession = await prisma.travelSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelSessions and only return the `id`
     * const travelSessionWithIdOnly = await prisma.travelSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelSession.
     * @param {TravelSessionUpsertArgs} args - Arguments to update or create a TravelSession.
     * @example
     * // Update or create a TravelSession
     * const travelSession = await prisma.travelSession.upsert({
     *   create: {
     *     // ... data to create a TravelSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelSession we want to update
     *   }
     * })
     */
    upsert<T extends TravelSessionUpsertArgs>(args: SelectSubset<T, TravelSessionUpsertArgs<ExtArgs>>): Prisma__TravelSessionClient<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelSessionCountArgs} args - Arguments to filter TravelSessions to count.
     * @example
     * // Count the number of TravelSessions
     * const count = await prisma.travelSession.count({
     *   where: {
     *     // ... the filter for the TravelSessions we want to count
     *   }
     * })
    **/
    count<T extends TravelSessionCountArgs>(
      args?: Subset<T, TravelSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelSessionAggregateArgs>(args: Subset<T, TravelSessionAggregateArgs>): Prisma.PrismaPromise<GetTravelSessionAggregateType<T>>

    /**
     * Group by TravelSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelSessionGroupByArgs['orderBy'] }
        : { orderBy?: TravelSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelSession model
   */
  readonly fields: TravelSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    traveler<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    boardingStop<T extends StopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StopDefaultArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destinationStop<T extends StopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StopDefaultArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends TravelSession$ticketArgs<ExtArgs> = {}>(args?: Subset<T, TravelSession$ticketArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TravelSession model
   */
  interface TravelSessionFieldRefs {
    readonly id: FieldRef<"TravelSession", 'String'>
    readonly travelerId: FieldRef<"TravelSession", 'String'>
    readonly busId: FieldRef<"TravelSession", 'String'>
    readonly boardingStopId: FieldRef<"TravelSession", 'String'>
    readonly destinationStopId: FieldRef<"TravelSession", 'String'>
    readonly status: FieldRef<"TravelSession", 'SessionStatus'>
    readonly tempQRCode: FieldRef<"TravelSession", 'String'>
    readonly qrExpiresAt: FieldRef<"TravelSession", 'DateTime'>
    readonly createdAt: FieldRef<"TravelSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TravelSession findUnique
   */
  export type TravelSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    /**
     * Filter, which TravelSession to fetch.
     */
    where: TravelSessionWhereUniqueInput
  }

  /**
   * TravelSession findUniqueOrThrow
   */
  export type TravelSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    /**
     * Filter, which TravelSession to fetch.
     */
    where: TravelSessionWhereUniqueInput
  }

  /**
   * TravelSession findFirst
   */
  export type TravelSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    /**
     * Filter, which TravelSession to fetch.
     */
    where?: TravelSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelSessions to fetch.
     */
    orderBy?: TravelSessionOrderByWithRelationInput | TravelSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelSessions.
     */
    cursor?: TravelSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelSessions.
     */
    distinct?: TravelSessionScalarFieldEnum | TravelSessionScalarFieldEnum[]
  }

  /**
   * TravelSession findFirstOrThrow
   */
  export type TravelSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    /**
     * Filter, which TravelSession to fetch.
     */
    where?: TravelSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelSessions to fetch.
     */
    orderBy?: TravelSessionOrderByWithRelationInput | TravelSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelSessions.
     */
    cursor?: TravelSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelSessions.
     */
    distinct?: TravelSessionScalarFieldEnum | TravelSessionScalarFieldEnum[]
  }

  /**
   * TravelSession findMany
   */
  export type TravelSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    /**
     * Filter, which TravelSessions to fetch.
     */
    where?: TravelSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelSessions to fetch.
     */
    orderBy?: TravelSessionOrderByWithRelationInput | TravelSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelSessions.
     */
    cursor?: TravelSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelSessions.
     */
    skip?: number
    distinct?: TravelSessionScalarFieldEnum | TravelSessionScalarFieldEnum[]
  }

  /**
   * TravelSession create
   */
  export type TravelSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelSession.
     */
    data: XOR<TravelSessionCreateInput, TravelSessionUncheckedCreateInput>
  }

  /**
   * TravelSession createMany
   */
  export type TravelSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelSessions.
     */
    data: TravelSessionCreateManyInput | TravelSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelSession createManyAndReturn
   */
  export type TravelSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TravelSessions.
     */
    data: TravelSessionCreateManyInput | TravelSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelSession update
   */
  export type TravelSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelSession.
     */
    data: XOR<TravelSessionUpdateInput, TravelSessionUncheckedUpdateInput>
    /**
     * Choose, which TravelSession to update.
     */
    where: TravelSessionWhereUniqueInput
  }

  /**
   * TravelSession updateMany
   */
  export type TravelSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelSessions.
     */
    data: XOR<TravelSessionUpdateManyMutationInput, TravelSessionUncheckedUpdateManyInput>
    /**
     * Filter which TravelSessions to update
     */
    where?: TravelSessionWhereInput
    /**
     * Limit how many TravelSessions to update.
     */
    limit?: number
  }

  /**
   * TravelSession updateManyAndReturn
   */
  export type TravelSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * The data used to update TravelSessions.
     */
    data: XOR<TravelSessionUpdateManyMutationInput, TravelSessionUncheckedUpdateManyInput>
    /**
     * Filter which TravelSessions to update
     */
    where?: TravelSessionWhereInput
    /**
     * Limit how many TravelSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelSession upsert
   */
  export type TravelSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelSession to update in case it exists.
     */
    where: TravelSessionWhereUniqueInput
    /**
     * In case the TravelSession found by the `where` argument doesn't exist, create a new TravelSession with this data.
     */
    create: XOR<TravelSessionCreateInput, TravelSessionUncheckedCreateInput>
    /**
     * In case the TravelSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelSessionUpdateInput, TravelSessionUncheckedUpdateInput>
  }

  /**
   * TravelSession delete
   */
  export type TravelSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
    /**
     * Filter which TravelSession to delete.
     */
    where: TravelSessionWhereUniqueInput
  }

  /**
   * TravelSession deleteMany
   */
  export type TravelSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelSessions to delete
     */
    where?: TravelSessionWhereInput
    /**
     * Limit how many TravelSessions to delete.
     */
    limit?: number
  }

  /**
   * TravelSession.ticket
   */
  export type TravelSession$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }

  /**
   * TravelSession without action
   */
  export type TravelSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelSession
     */
    select?: TravelSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelSession
     */
    omit?: TravelSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelSessionInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    fare: number | null
  }

  export type TicketSumAggregateOutputType = {
    fare: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    travelerId: string | null
    conductorId: string | null
    busId: string | null
    boardingStop: string | null
    destinationStop: string | null
    fare: number | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    signedQRCode: string | null
    isVerified: boolean | null
    verifiedAt: Date | null
    verifiedBy: string | null
    issuedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    travelerId: string | null
    conductorId: string | null
    busId: string | null
    boardingStop: string | null
    destinationStop: string | null
    fare: number | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    signedQRCode: string | null
    isVerified: boolean | null
    verifiedAt: Date | null
    verifiedBy: string | null
    issuedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    sessionId: number
    travelerId: number
    conductorId: number
    busId: number
    boardingStop: number
    destinationStop: number
    fare: number
    paymentMethod: number
    paymentStatus: number
    razorpayOrderId: number
    razorpayPaymentId: number
    signedQRCode: number
    isVerified: number
    verifiedAt: number
    verifiedBy: number
    issuedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    fare?: true
  }

  export type TicketSumAggregateInputType = {
    fare?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    sessionId?: true
    travelerId?: true
    conductorId?: true
    busId?: true
    boardingStop?: true
    destinationStop?: true
    fare?: true
    paymentMethod?: true
    paymentStatus?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    signedQRCode?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
    issuedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    sessionId?: true
    travelerId?: true
    conductorId?: true
    busId?: true
    boardingStop?: true
    destinationStop?: true
    fare?: true
    paymentMethod?: true
    paymentStatus?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    signedQRCode?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
    issuedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    sessionId?: true
    travelerId?: true
    conductorId?: true
    busId?: true
    boardingStop?: true
    destinationStop?: true
    fare?: true
    paymentMethod?: true
    paymentStatus?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    signedQRCode?: true
    isVerified?: true
    verifiedAt?: true
    verifiedBy?: true
    issuedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    sessionId: string
    travelerId: string
    conductorId: string
    busId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus: $Enums.PaymentStatus
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    signedQRCode: string
    isVerified: boolean
    verifiedAt: Date | null
    verifiedBy: string | null
    issuedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    travelerId?: boolean
    conductorId?: boolean
    busId?: boolean
    boardingStop?: boolean
    destinationStop?: boolean
    fare?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    signedQRCode?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    issuedAt?: boolean
    session?: boolean | TravelSessionDefaultArgs<ExtArgs>
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    conductor?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    supervisor?: boolean | Ticket$supervisorArgs<ExtArgs>
    verificationLogs?: boolean | Ticket$verificationLogsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    travelerId?: boolean
    conductorId?: boolean
    busId?: boolean
    boardingStop?: boolean
    destinationStop?: boolean
    fare?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    signedQRCode?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    issuedAt?: boolean
    session?: boolean | TravelSessionDefaultArgs<ExtArgs>
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    conductor?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    supervisor?: boolean | Ticket$supervisorArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    travelerId?: boolean
    conductorId?: boolean
    busId?: boolean
    boardingStop?: boolean
    destinationStop?: boolean
    fare?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    signedQRCode?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    issuedAt?: boolean
    session?: boolean | TravelSessionDefaultArgs<ExtArgs>
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    conductor?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    supervisor?: boolean | Ticket$supervisorArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    sessionId?: boolean
    travelerId?: boolean
    conductorId?: boolean
    busId?: boolean
    boardingStop?: boolean
    destinationStop?: boolean
    fare?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    signedQRCode?: boolean
    isVerified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    issuedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "travelerId" | "conductorId" | "busId" | "boardingStop" | "destinationStop" | "fare" | "paymentMethod" | "paymentStatus" | "razorpayOrderId" | "razorpayPaymentId" | "signedQRCode" | "isVerified" | "verifiedAt" | "verifiedBy" | "issuedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | TravelSessionDefaultArgs<ExtArgs>
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    conductor?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    supervisor?: boolean | Ticket$supervisorArgs<ExtArgs>
    verificationLogs?: boolean | Ticket$verificationLogsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | TravelSessionDefaultArgs<ExtArgs>
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    conductor?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    supervisor?: boolean | Ticket$supervisorArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | TravelSessionDefaultArgs<ExtArgs>
    traveler?: boolean | UserDefaultArgs<ExtArgs>
    conductor?: boolean | UserDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    supervisor?: boolean | Ticket$supervisorArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      session: Prisma.$TravelSessionPayload<ExtArgs>
      traveler: Prisma.$UserPayload<ExtArgs>
      conductor: Prisma.$UserPayload<ExtArgs>
      bus: Prisma.$BusPayload<ExtArgs>
      supervisor: Prisma.$UserPayload<ExtArgs> | null
      verificationLogs: Prisma.$VerificationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      travelerId: string
      conductorId: string
      busId: string
      boardingStop: string
      destinationStop: string
      fare: number
      paymentMethod: $Enums.PaymentMethod
      paymentStatus: $Enums.PaymentStatus
      razorpayOrderId: string | null
      razorpayPaymentId: string | null
      signedQRCode: string
      isVerified: boolean
      verifiedAt: Date | null
      verifiedBy: string | null
      issuedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends TravelSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelSessionDefaultArgs<ExtArgs>>): Prisma__TravelSessionClient<$Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    traveler<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conductor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends Ticket$supervisorArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$supervisorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    verificationLogs<T extends Ticket$verificationLogsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$verificationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly sessionId: FieldRef<"Ticket", 'String'>
    readonly travelerId: FieldRef<"Ticket", 'String'>
    readonly conductorId: FieldRef<"Ticket", 'String'>
    readonly busId: FieldRef<"Ticket", 'String'>
    readonly boardingStop: FieldRef<"Ticket", 'String'>
    readonly destinationStop: FieldRef<"Ticket", 'String'>
    readonly fare: FieldRef<"Ticket", 'Float'>
    readonly paymentMethod: FieldRef<"Ticket", 'PaymentMethod'>
    readonly paymentStatus: FieldRef<"Ticket", 'PaymentStatus'>
    readonly razorpayOrderId: FieldRef<"Ticket", 'String'>
    readonly razorpayPaymentId: FieldRef<"Ticket", 'String'>
    readonly signedQRCode: FieldRef<"Ticket", 'String'>
    readonly isVerified: FieldRef<"Ticket", 'Boolean'>
    readonly verifiedAt: FieldRef<"Ticket", 'DateTime'>
    readonly verifiedBy: FieldRef<"Ticket", 'String'>
    readonly issuedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.supervisor
   */
  export type Ticket$supervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Ticket.verificationLogs
   */
  export type Ticket$verificationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
    where?: VerificationLogWhereInput
    orderBy?: VerificationLogOrderByWithRelationInput | VerificationLogOrderByWithRelationInput[]
    cursor?: VerificationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationLogScalarFieldEnum | VerificationLogScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model VerificationLog
   */

  export type AggregateVerificationLog = {
    _count: VerificationLogCountAggregateOutputType | null
    _min: VerificationLogMinAggregateOutputType | null
    _max: VerificationLogMaxAggregateOutputType | null
  }

  export type VerificationLogMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    supervisorId: string | null
    scannedAt: Date | null
    result: $Enums.VerificationResult | null
  }

  export type VerificationLogMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    supervisorId: string | null
    scannedAt: Date | null
    result: $Enums.VerificationResult | null
  }

  export type VerificationLogCountAggregateOutputType = {
    id: number
    ticketId: number
    supervisorId: number
    scannedAt: number
    result: number
    _all: number
  }


  export type VerificationLogMinAggregateInputType = {
    id?: true
    ticketId?: true
    supervisorId?: true
    scannedAt?: true
    result?: true
  }

  export type VerificationLogMaxAggregateInputType = {
    id?: true
    ticketId?: true
    supervisorId?: true
    scannedAt?: true
    result?: true
  }

  export type VerificationLogCountAggregateInputType = {
    id?: true
    ticketId?: true
    supervisorId?: true
    scannedAt?: true
    result?: true
    _all?: true
  }

  export type VerificationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationLog to aggregate.
     */
    where?: VerificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationLogs to fetch.
     */
    orderBy?: VerificationLogOrderByWithRelationInput | VerificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationLogs
    **/
    _count?: true | VerificationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationLogMaxAggregateInputType
  }

  export type GetVerificationLogAggregateType<T extends VerificationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationLog[P]>
      : GetScalarType<T[P], AggregateVerificationLog[P]>
  }




  export type VerificationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationLogWhereInput
    orderBy?: VerificationLogOrderByWithAggregationInput | VerificationLogOrderByWithAggregationInput[]
    by: VerificationLogScalarFieldEnum[] | VerificationLogScalarFieldEnum
    having?: VerificationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationLogCountAggregateInputType | true
    _min?: VerificationLogMinAggregateInputType
    _max?: VerificationLogMaxAggregateInputType
  }

  export type VerificationLogGroupByOutputType = {
    id: string
    ticketId: string
    supervisorId: string
    scannedAt: Date
    result: $Enums.VerificationResult
    _count: VerificationLogCountAggregateOutputType | null
    _min: VerificationLogMinAggregateOutputType | null
    _max: VerificationLogMaxAggregateOutputType | null
  }

  type GetVerificationLogGroupByPayload<T extends VerificationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationLogGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationLogGroupByOutputType[P]>
        }
      >
    >


  export type VerificationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    supervisorId?: boolean
    scannedAt?: boolean
    result?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationLog"]>

  export type VerificationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    supervisorId?: boolean
    scannedAt?: boolean
    result?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationLog"]>

  export type VerificationLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    supervisorId?: boolean
    scannedAt?: boolean
    result?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationLog"]>

  export type VerificationLogSelectScalar = {
    id?: boolean
    ticketId?: boolean
    supervisorId?: boolean
    scannedAt?: boolean
    result?: boolean
  }

  export type VerificationLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "supervisorId" | "scannedAt" | "result", ExtArgs["result"]["verificationLog"]>
  export type VerificationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    supervisor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationLog"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      supervisor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      supervisorId: string
      scannedAt: Date
      result: $Enums.VerificationResult
    }, ExtArgs["result"]["verificationLog"]>
    composites: {}
  }

  type VerificationLogGetPayload<S extends boolean | null | undefined | VerificationLogDefaultArgs> = $Result.GetResult<Prisma.$VerificationLogPayload, S>

  type VerificationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationLogCountAggregateInputType | true
    }

  export interface VerificationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationLog'], meta: { name: 'VerificationLog' } }
    /**
     * Find zero or one VerificationLog that matches the filter.
     * @param {VerificationLogFindUniqueArgs} args - Arguments to find a VerificationLog
     * @example
     * // Get one VerificationLog
     * const verificationLog = await prisma.verificationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationLogFindUniqueArgs>(args: SelectSubset<T, VerificationLogFindUniqueArgs<ExtArgs>>): Prisma__VerificationLogClient<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationLogFindUniqueOrThrowArgs} args - Arguments to find a VerificationLog
     * @example
     * // Get one VerificationLog
     * const verificationLog = await prisma.verificationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationLogClient<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationLogFindFirstArgs} args - Arguments to find a VerificationLog
     * @example
     * // Get one VerificationLog
     * const verificationLog = await prisma.verificationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationLogFindFirstArgs>(args?: SelectSubset<T, VerificationLogFindFirstArgs<ExtArgs>>): Prisma__VerificationLogClient<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationLogFindFirstOrThrowArgs} args - Arguments to find a VerificationLog
     * @example
     * // Get one VerificationLog
     * const verificationLog = await prisma.verificationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationLogClient<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationLogs
     * const verificationLogs = await prisma.verificationLog.findMany()
     * 
     * // Get first 10 VerificationLogs
     * const verificationLogs = await prisma.verificationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationLogWithIdOnly = await prisma.verificationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationLogFindManyArgs>(args?: SelectSubset<T, VerificationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationLog.
     * @param {VerificationLogCreateArgs} args - Arguments to create a VerificationLog.
     * @example
     * // Create one VerificationLog
     * const VerificationLog = await prisma.verificationLog.create({
     *   data: {
     *     // ... data to create a VerificationLog
     *   }
     * })
     * 
     */
    create<T extends VerificationLogCreateArgs>(args: SelectSubset<T, VerificationLogCreateArgs<ExtArgs>>): Prisma__VerificationLogClient<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationLogs.
     * @param {VerificationLogCreateManyArgs} args - Arguments to create many VerificationLogs.
     * @example
     * // Create many VerificationLogs
     * const verificationLog = await prisma.verificationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationLogCreateManyArgs>(args?: SelectSubset<T, VerificationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationLogs and returns the data saved in the database.
     * @param {VerificationLogCreateManyAndReturnArgs} args - Arguments to create many VerificationLogs.
     * @example
     * // Create many VerificationLogs
     * const verificationLog = await prisma.verificationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationLogs and only return the `id`
     * const verificationLogWithIdOnly = await prisma.verificationLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationLog.
     * @param {VerificationLogDeleteArgs} args - Arguments to delete one VerificationLog.
     * @example
     * // Delete one VerificationLog
     * const VerificationLog = await prisma.verificationLog.delete({
     *   where: {
     *     // ... filter to delete one VerificationLog
     *   }
     * })
     * 
     */
    delete<T extends VerificationLogDeleteArgs>(args: SelectSubset<T, VerificationLogDeleteArgs<ExtArgs>>): Prisma__VerificationLogClient<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationLog.
     * @param {VerificationLogUpdateArgs} args - Arguments to update one VerificationLog.
     * @example
     * // Update one VerificationLog
     * const verificationLog = await prisma.verificationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationLogUpdateArgs>(args: SelectSubset<T, VerificationLogUpdateArgs<ExtArgs>>): Prisma__VerificationLogClient<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationLogs.
     * @param {VerificationLogDeleteManyArgs} args - Arguments to filter VerificationLogs to delete.
     * @example
     * // Delete a few VerificationLogs
     * const { count } = await prisma.verificationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationLogDeleteManyArgs>(args?: SelectSubset<T, VerificationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationLogs
     * const verificationLog = await prisma.verificationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationLogUpdateManyArgs>(args: SelectSubset<T, VerificationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationLogs and returns the data updated in the database.
     * @param {VerificationLogUpdateManyAndReturnArgs} args - Arguments to update many VerificationLogs.
     * @example
     * // Update many VerificationLogs
     * const verificationLog = await prisma.verificationLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationLogs and only return the `id`
     * const verificationLogWithIdOnly = await prisma.verificationLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationLogUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationLog.
     * @param {VerificationLogUpsertArgs} args - Arguments to update or create a VerificationLog.
     * @example
     * // Update or create a VerificationLog
     * const verificationLog = await prisma.verificationLog.upsert({
     *   create: {
     *     // ... data to create a VerificationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationLog we want to update
     *   }
     * })
     */
    upsert<T extends VerificationLogUpsertArgs>(args: SelectSubset<T, VerificationLogUpsertArgs<ExtArgs>>): Prisma__VerificationLogClient<$Result.GetResult<Prisma.$VerificationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationLogCountArgs} args - Arguments to filter VerificationLogs to count.
     * @example
     * // Count the number of VerificationLogs
     * const count = await prisma.verificationLog.count({
     *   where: {
     *     // ... the filter for the VerificationLogs we want to count
     *   }
     * })
    **/
    count<T extends VerificationLogCountArgs>(
      args?: Subset<T, VerificationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationLogAggregateArgs>(args: Subset<T, VerificationLogAggregateArgs>): Prisma.PrismaPromise<GetVerificationLogAggregateType<T>>

    /**
     * Group by VerificationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationLogGroupByArgs['orderBy'] }
        : { orderBy?: VerificationLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationLog model
   */
  readonly fields: VerificationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationLog model
   */
  interface VerificationLogFieldRefs {
    readonly id: FieldRef<"VerificationLog", 'String'>
    readonly ticketId: FieldRef<"VerificationLog", 'String'>
    readonly supervisorId: FieldRef<"VerificationLog", 'String'>
    readonly scannedAt: FieldRef<"VerificationLog", 'DateTime'>
    readonly result: FieldRef<"VerificationLog", 'VerificationResult'>
  }
    

  // Custom InputTypes
  /**
   * VerificationLog findUnique
   */
  export type VerificationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
    /**
     * Filter, which VerificationLog to fetch.
     */
    where: VerificationLogWhereUniqueInput
  }

  /**
   * VerificationLog findUniqueOrThrow
   */
  export type VerificationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
    /**
     * Filter, which VerificationLog to fetch.
     */
    where: VerificationLogWhereUniqueInput
  }

  /**
   * VerificationLog findFirst
   */
  export type VerificationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
    /**
     * Filter, which VerificationLog to fetch.
     */
    where?: VerificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationLogs to fetch.
     */
    orderBy?: VerificationLogOrderByWithRelationInput | VerificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationLogs.
     */
    cursor?: VerificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationLogs.
     */
    distinct?: VerificationLogScalarFieldEnum | VerificationLogScalarFieldEnum[]
  }

  /**
   * VerificationLog findFirstOrThrow
   */
  export type VerificationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
    /**
     * Filter, which VerificationLog to fetch.
     */
    where?: VerificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationLogs to fetch.
     */
    orderBy?: VerificationLogOrderByWithRelationInput | VerificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationLogs.
     */
    cursor?: VerificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationLogs.
     */
    distinct?: VerificationLogScalarFieldEnum | VerificationLogScalarFieldEnum[]
  }

  /**
   * VerificationLog findMany
   */
  export type VerificationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
    /**
     * Filter, which VerificationLogs to fetch.
     */
    where?: VerificationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationLogs to fetch.
     */
    orderBy?: VerificationLogOrderByWithRelationInput | VerificationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationLogs.
     */
    cursor?: VerificationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationLogs.
     */
    skip?: number
    distinct?: VerificationLogScalarFieldEnum | VerificationLogScalarFieldEnum[]
  }

  /**
   * VerificationLog create
   */
  export type VerificationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationLog.
     */
    data: XOR<VerificationLogCreateInput, VerificationLogUncheckedCreateInput>
  }

  /**
   * VerificationLog createMany
   */
  export type VerificationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationLogs.
     */
    data: VerificationLogCreateManyInput | VerificationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationLog createManyAndReturn
   */
  export type VerificationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationLogs.
     */
    data: VerificationLogCreateManyInput | VerificationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationLog update
   */
  export type VerificationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationLog.
     */
    data: XOR<VerificationLogUpdateInput, VerificationLogUncheckedUpdateInput>
    /**
     * Choose, which VerificationLog to update.
     */
    where: VerificationLogWhereUniqueInput
  }

  /**
   * VerificationLog updateMany
   */
  export type VerificationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationLogs.
     */
    data: XOR<VerificationLogUpdateManyMutationInput, VerificationLogUncheckedUpdateManyInput>
    /**
     * Filter which VerificationLogs to update
     */
    where?: VerificationLogWhereInput
    /**
     * Limit how many VerificationLogs to update.
     */
    limit?: number
  }

  /**
   * VerificationLog updateManyAndReturn
   */
  export type VerificationLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * The data used to update VerificationLogs.
     */
    data: XOR<VerificationLogUpdateManyMutationInput, VerificationLogUncheckedUpdateManyInput>
    /**
     * Filter which VerificationLogs to update
     */
    where?: VerificationLogWhereInput
    /**
     * Limit how many VerificationLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationLog upsert
   */
  export type VerificationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationLog to update in case it exists.
     */
    where: VerificationLogWhereUniqueInput
    /**
     * In case the VerificationLog found by the `where` argument doesn't exist, create a new VerificationLog with this data.
     */
    create: XOR<VerificationLogCreateInput, VerificationLogUncheckedCreateInput>
    /**
     * In case the VerificationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationLogUpdateInput, VerificationLogUncheckedUpdateInput>
  }

  /**
   * VerificationLog delete
   */
  export type VerificationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
    /**
     * Filter which VerificationLog to delete.
     */
    where: VerificationLogWhereUniqueInput
  }

  /**
   * VerificationLog deleteMany
   */
  export type VerificationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationLogs to delete
     */
    where?: VerificationLogWhereInput
    /**
     * Limit how many VerificationLogs to delete.
     */
    limit?: number
  }

  /**
   * VerificationLog without action
   */
  export type VerificationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationLog
     */
    select?: VerificationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationLog
     */
    omit?: VerificationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    routeName: 'routeName',
    totalStops: 'totalStops',
    createdAt: 'createdAt'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const StopScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    stopName: 'stopName',
    stopOrder: 'stopOrder',
    distanceFromStart: 'distanceFromStart'
  };

  export type StopScalarFieldEnum = (typeof StopScalarFieldEnum)[keyof typeof StopScalarFieldEnum]


  export const FareScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    fromStopOrder: 'fromStopOrder',
    toStopOrder: 'toStopOrder',
    amount: 'amount'
  };

  export type FareScalarFieldEnum = (typeof FareScalarFieldEnum)[keyof typeof FareScalarFieldEnum]


  export const BusScalarFieldEnum: {
    id: 'id',
    busNumber: 'busNumber',
    routeId: 'routeId',
    conductorId: 'conductorId',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type BusScalarFieldEnum = (typeof BusScalarFieldEnum)[keyof typeof BusScalarFieldEnum]


  export const TravelSessionScalarFieldEnum: {
    id: 'id',
    travelerId: 'travelerId',
    busId: 'busId',
    boardingStopId: 'boardingStopId',
    destinationStopId: 'destinationStopId',
    status: 'status',
    tempQRCode: 'tempQRCode',
    qrExpiresAt: 'qrExpiresAt',
    createdAt: 'createdAt'
  };

  export type TravelSessionScalarFieldEnum = (typeof TravelSessionScalarFieldEnum)[keyof typeof TravelSessionScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    travelerId: 'travelerId',
    conductorId: 'conductorId',
    busId: 'busId',
    boardingStop: 'boardingStop',
    destinationStop: 'destinationStop',
    fare: 'fare',
    paymentMethod: 'paymentMethod',
    paymentStatus: 'paymentStatus',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    signedQRCode: 'signedQRCode',
    isVerified: 'isVerified',
    verifiedAt: 'verifiedAt',
    verifiedBy: 'verifiedBy',
    issuedAt: 'issuedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const VerificationLogScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    supervisorId: 'supervisorId',
    scannedAt: 'scannedAt',
    result: 'result'
  };

  export type VerificationLogScalarFieldEnum = (typeof VerificationLogScalarFieldEnum)[keyof typeof VerificationLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'VerificationResult'
   */
  export type EnumVerificationResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationResult'>
    


  /**
   * Reference to a field of type 'VerificationResult[]'
   */
  export type ListEnumVerificationResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationResult[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    travelSessions?: TravelSessionListRelationFilter
    travelerTickets?: TicketListRelationFilter
    conductedTickets?: TicketListRelationFilter
    verifiedTickets?: TicketListRelationFilter
    verificationLogs?: VerificationLogListRelationFilter
    buses?: BusListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    travelSessions?: TravelSessionOrderByRelationAggregateInput
    travelerTickets?: TicketOrderByRelationAggregateInput
    conductedTickets?: TicketOrderByRelationAggregateInput
    verifiedTickets?: TicketOrderByRelationAggregateInput
    verificationLogs?: VerificationLogOrderByRelationAggregateInput
    buses?: BusOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    travelSessions?: TravelSessionListRelationFilter
    travelerTickets?: TicketListRelationFilter
    conductedTickets?: TicketListRelationFilter
    verifiedTickets?: TicketListRelationFilter
    verificationLogs?: VerificationLogListRelationFilter
    buses?: BusListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: StringFilter<"Route"> | string
    routeName?: StringFilter<"Route"> | string
    totalStops?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    stops?: StopListRelationFilter
    fares?: FareListRelationFilter
    buses?: BusListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    routeName?: SortOrder
    totalStops?: SortOrder
    createdAt?: SortOrder
    stops?: StopOrderByRelationAggregateInput
    fares?: FareOrderByRelationAggregateInput
    buses?: BusOrderByRelationAggregateInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    routeName?: StringFilter<"Route"> | string
    totalStops?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    stops?: StopListRelationFilter
    fares?: FareListRelationFilter
    buses?: BusListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    routeName?: SortOrder
    totalStops?: SortOrder
    createdAt?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Route"> | string
    routeName?: StringWithAggregatesFilter<"Route"> | string
    totalStops?: IntWithAggregatesFilter<"Route"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
  }

  export type StopWhereInput = {
    AND?: StopWhereInput | StopWhereInput[]
    OR?: StopWhereInput[]
    NOT?: StopWhereInput | StopWhereInput[]
    id?: StringFilter<"Stop"> | string
    routeId?: StringFilter<"Stop"> | string
    stopName?: StringFilter<"Stop"> | string
    stopOrder?: IntFilter<"Stop"> | number
    distanceFromStart?: FloatFilter<"Stop"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    boardingSessions?: TravelSessionListRelationFilter
    destinationSessions?: TravelSessionListRelationFilter
  }

  export type StopOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopName?: SortOrder
    stopOrder?: SortOrder
    distanceFromStart?: SortOrder
    route?: RouteOrderByWithRelationInput
    boardingSessions?: TravelSessionOrderByRelationAggregateInput
    destinationSessions?: TravelSessionOrderByRelationAggregateInput
  }

  export type StopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StopWhereInput | StopWhereInput[]
    OR?: StopWhereInput[]
    NOT?: StopWhereInput | StopWhereInput[]
    routeId?: StringFilter<"Stop"> | string
    stopName?: StringFilter<"Stop"> | string
    stopOrder?: IntFilter<"Stop"> | number
    distanceFromStart?: FloatFilter<"Stop"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    boardingSessions?: TravelSessionListRelationFilter
    destinationSessions?: TravelSessionListRelationFilter
  }, "id">

  export type StopOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopName?: SortOrder
    stopOrder?: SortOrder
    distanceFromStart?: SortOrder
    _count?: StopCountOrderByAggregateInput
    _avg?: StopAvgOrderByAggregateInput
    _max?: StopMaxOrderByAggregateInput
    _min?: StopMinOrderByAggregateInput
    _sum?: StopSumOrderByAggregateInput
  }

  export type StopScalarWhereWithAggregatesInput = {
    AND?: StopScalarWhereWithAggregatesInput | StopScalarWhereWithAggregatesInput[]
    OR?: StopScalarWhereWithAggregatesInput[]
    NOT?: StopScalarWhereWithAggregatesInput | StopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stop"> | string
    routeId?: StringWithAggregatesFilter<"Stop"> | string
    stopName?: StringWithAggregatesFilter<"Stop"> | string
    stopOrder?: IntWithAggregatesFilter<"Stop"> | number
    distanceFromStart?: FloatWithAggregatesFilter<"Stop"> | number
  }

  export type FareWhereInput = {
    AND?: FareWhereInput | FareWhereInput[]
    OR?: FareWhereInput[]
    NOT?: FareWhereInput | FareWhereInput[]
    id?: StringFilter<"Fare"> | string
    routeId?: StringFilter<"Fare"> | string
    fromStopOrder?: IntFilter<"Fare"> | number
    toStopOrder?: IntFilter<"Fare"> | number
    amount?: FloatFilter<"Fare"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }

  export type FareOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    fromStopOrder?: SortOrder
    toStopOrder?: SortOrder
    amount?: SortOrder
    route?: RouteOrderByWithRelationInput
  }

  export type FareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FareWhereInput | FareWhereInput[]
    OR?: FareWhereInput[]
    NOT?: FareWhereInput | FareWhereInput[]
    routeId?: StringFilter<"Fare"> | string
    fromStopOrder?: IntFilter<"Fare"> | number
    toStopOrder?: IntFilter<"Fare"> | number
    amount?: FloatFilter<"Fare"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }, "id">

  export type FareOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    fromStopOrder?: SortOrder
    toStopOrder?: SortOrder
    amount?: SortOrder
    _count?: FareCountOrderByAggregateInput
    _avg?: FareAvgOrderByAggregateInput
    _max?: FareMaxOrderByAggregateInput
    _min?: FareMinOrderByAggregateInput
    _sum?: FareSumOrderByAggregateInput
  }

  export type FareScalarWhereWithAggregatesInput = {
    AND?: FareScalarWhereWithAggregatesInput | FareScalarWhereWithAggregatesInput[]
    OR?: FareScalarWhereWithAggregatesInput[]
    NOT?: FareScalarWhereWithAggregatesInput | FareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fare"> | string
    routeId?: StringWithAggregatesFilter<"Fare"> | string
    fromStopOrder?: IntWithAggregatesFilter<"Fare"> | number
    toStopOrder?: IntWithAggregatesFilter<"Fare"> | number
    amount?: FloatWithAggregatesFilter<"Fare"> | number
  }

  export type BusWhereInput = {
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    id?: StringFilter<"Bus"> | string
    busNumber?: StringFilter<"Bus"> | string
    routeId?: StringFilter<"Bus"> | string
    conductorId?: StringNullableFilter<"Bus"> | string | null
    isActive?: BoolFilter<"Bus"> | boolean
    createdAt?: DateTimeFilter<"Bus"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    conductor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sessions?: TravelSessionListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type BusOrderByWithRelationInput = {
    id?: SortOrder
    busNumber?: SortOrder
    routeId?: SortOrder
    conductorId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    route?: RouteOrderByWithRelationInput
    conductor?: UserOrderByWithRelationInput
    sessions?: TravelSessionOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type BusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    busNumber?: string
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    routeId?: StringFilter<"Bus"> | string
    conductorId?: StringNullableFilter<"Bus"> | string | null
    isActive?: BoolFilter<"Bus"> | boolean
    createdAt?: DateTimeFilter<"Bus"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    conductor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sessions?: TravelSessionListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "busNumber">

  export type BusOrderByWithAggregationInput = {
    id?: SortOrder
    busNumber?: SortOrder
    routeId?: SortOrder
    conductorId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: BusCountOrderByAggregateInput
    _max?: BusMaxOrderByAggregateInput
    _min?: BusMinOrderByAggregateInput
  }

  export type BusScalarWhereWithAggregatesInput = {
    AND?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    OR?: BusScalarWhereWithAggregatesInput[]
    NOT?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bus"> | string
    busNumber?: StringWithAggregatesFilter<"Bus"> | string
    routeId?: StringWithAggregatesFilter<"Bus"> | string
    conductorId?: StringNullableWithAggregatesFilter<"Bus"> | string | null
    isActive?: BoolWithAggregatesFilter<"Bus"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Bus"> | Date | string
  }

  export type TravelSessionWhereInput = {
    AND?: TravelSessionWhereInput | TravelSessionWhereInput[]
    OR?: TravelSessionWhereInput[]
    NOT?: TravelSessionWhereInput | TravelSessionWhereInput[]
    id?: StringFilter<"TravelSession"> | string
    travelerId?: StringFilter<"TravelSession"> | string
    busId?: StringFilter<"TravelSession"> | string
    boardingStopId?: StringFilter<"TravelSession"> | string
    destinationStopId?: StringFilter<"TravelSession"> | string
    status?: EnumSessionStatusFilter<"TravelSession"> | $Enums.SessionStatus
    tempQRCode?: StringFilter<"TravelSession"> | string
    qrExpiresAt?: DateTimeFilter<"TravelSession"> | Date | string
    createdAt?: DateTimeFilter<"TravelSession"> | Date | string
    traveler?: XOR<UserScalarRelationFilter, UserWhereInput>
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    boardingStop?: XOR<StopScalarRelationFilter, StopWhereInput>
    destinationStop?: XOR<StopScalarRelationFilter, StopWhereInput>
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }

  export type TravelSessionOrderByWithRelationInput = {
    id?: SortOrder
    travelerId?: SortOrder
    busId?: SortOrder
    boardingStopId?: SortOrder
    destinationStopId?: SortOrder
    status?: SortOrder
    tempQRCode?: SortOrder
    qrExpiresAt?: SortOrder
    createdAt?: SortOrder
    traveler?: UserOrderByWithRelationInput
    bus?: BusOrderByWithRelationInput
    boardingStop?: StopOrderByWithRelationInput
    destinationStop?: StopOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type TravelSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tempQRCode?: string
    AND?: TravelSessionWhereInput | TravelSessionWhereInput[]
    OR?: TravelSessionWhereInput[]
    NOT?: TravelSessionWhereInput | TravelSessionWhereInput[]
    travelerId?: StringFilter<"TravelSession"> | string
    busId?: StringFilter<"TravelSession"> | string
    boardingStopId?: StringFilter<"TravelSession"> | string
    destinationStopId?: StringFilter<"TravelSession"> | string
    status?: EnumSessionStatusFilter<"TravelSession"> | $Enums.SessionStatus
    qrExpiresAt?: DateTimeFilter<"TravelSession"> | Date | string
    createdAt?: DateTimeFilter<"TravelSession"> | Date | string
    traveler?: XOR<UserScalarRelationFilter, UserWhereInput>
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    boardingStop?: XOR<StopScalarRelationFilter, StopWhereInput>
    destinationStop?: XOR<StopScalarRelationFilter, StopWhereInput>
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }, "id" | "tempQRCode">

  export type TravelSessionOrderByWithAggregationInput = {
    id?: SortOrder
    travelerId?: SortOrder
    busId?: SortOrder
    boardingStopId?: SortOrder
    destinationStopId?: SortOrder
    status?: SortOrder
    tempQRCode?: SortOrder
    qrExpiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: TravelSessionCountOrderByAggregateInput
    _max?: TravelSessionMaxOrderByAggregateInput
    _min?: TravelSessionMinOrderByAggregateInput
  }

  export type TravelSessionScalarWhereWithAggregatesInput = {
    AND?: TravelSessionScalarWhereWithAggregatesInput | TravelSessionScalarWhereWithAggregatesInput[]
    OR?: TravelSessionScalarWhereWithAggregatesInput[]
    NOT?: TravelSessionScalarWhereWithAggregatesInput | TravelSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelSession"> | string
    travelerId?: StringWithAggregatesFilter<"TravelSession"> | string
    busId?: StringWithAggregatesFilter<"TravelSession"> | string
    boardingStopId?: StringWithAggregatesFilter<"TravelSession"> | string
    destinationStopId?: StringWithAggregatesFilter<"TravelSession"> | string
    status?: EnumSessionStatusWithAggregatesFilter<"TravelSession"> | $Enums.SessionStatus
    tempQRCode?: StringWithAggregatesFilter<"TravelSession"> | string
    qrExpiresAt?: DateTimeWithAggregatesFilter<"TravelSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TravelSession"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    sessionId?: StringFilter<"Ticket"> | string
    travelerId?: StringFilter<"Ticket"> | string
    conductorId?: StringFilter<"Ticket"> | string
    busId?: StringFilter<"Ticket"> | string
    boardingStop?: StringFilter<"Ticket"> | string
    destinationStop?: StringFilter<"Ticket"> | string
    fare?: FloatFilter<"Ticket"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Ticket"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"Ticket"> | $Enums.PaymentStatus
    razorpayOrderId?: StringNullableFilter<"Ticket"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Ticket"> | string | null
    signedQRCode?: StringFilter<"Ticket"> | string
    isVerified?: BoolFilter<"Ticket"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    verifiedBy?: StringNullableFilter<"Ticket"> | string | null
    issuedAt?: DateTimeFilter<"Ticket"> | Date | string
    session?: XOR<TravelSessionScalarRelationFilter, TravelSessionWhereInput>
    traveler?: XOR<UserScalarRelationFilter, UserWhereInput>
    conductor?: XOR<UserScalarRelationFilter, UserWhereInput>
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    supervisor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    verificationLogs?: VerificationLogListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    travelerId?: SortOrder
    conductorId?: SortOrder
    busId?: SortOrder
    boardingStop?: SortOrder
    destinationStop?: SortOrder
    fare?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    signedQRCode?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    issuedAt?: SortOrder
    session?: TravelSessionOrderByWithRelationInput
    traveler?: UserOrderByWithRelationInput
    conductor?: UserOrderByWithRelationInput
    bus?: BusOrderByWithRelationInput
    supervisor?: UserOrderByWithRelationInput
    verificationLogs?: VerificationLogOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    signedQRCode?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    travelerId?: StringFilter<"Ticket"> | string
    conductorId?: StringFilter<"Ticket"> | string
    busId?: StringFilter<"Ticket"> | string
    boardingStop?: StringFilter<"Ticket"> | string
    destinationStop?: StringFilter<"Ticket"> | string
    fare?: FloatFilter<"Ticket"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Ticket"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"Ticket"> | $Enums.PaymentStatus
    razorpayOrderId?: StringNullableFilter<"Ticket"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Ticket"> | string | null
    isVerified?: BoolFilter<"Ticket"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    verifiedBy?: StringNullableFilter<"Ticket"> | string | null
    issuedAt?: DateTimeFilter<"Ticket"> | Date | string
    session?: XOR<TravelSessionScalarRelationFilter, TravelSessionWhereInput>
    traveler?: XOR<UserScalarRelationFilter, UserWhereInput>
    conductor?: XOR<UserScalarRelationFilter, UserWhereInput>
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    supervisor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    verificationLogs?: VerificationLogListRelationFilter
  }, "id" | "sessionId" | "signedQRCode">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    travelerId?: SortOrder
    conductorId?: SortOrder
    busId?: SortOrder
    boardingStop?: SortOrder
    destinationStop?: SortOrder
    fare?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    signedQRCode?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    issuedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    sessionId?: StringWithAggregatesFilter<"Ticket"> | string
    travelerId?: StringWithAggregatesFilter<"Ticket"> | string
    conductorId?: StringWithAggregatesFilter<"Ticket"> | string
    busId?: StringWithAggregatesFilter<"Ticket"> | string
    boardingStop?: StringWithAggregatesFilter<"Ticket"> | string
    destinationStop?: StringWithAggregatesFilter<"Ticket"> | string
    fare?: FloatWithAggregatesFilter<"Ticket"> | number
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Ticket"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Ticket"> | $Enums.PaymentStatus
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    signedQRCode?: StringWithAggregatesFilter<"Ticket"> | string
    isVerified?: BoolWithAggregatesFilter<"Ticket"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    verifiedBy?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    issuedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type VerificationLogWhereInput = {
    AND?: VerificationLogWhereInput | VerificationLogWhereInput[]
    OR?: VerificationLogWhereInput[]
    NOT?: VerificationLogWhereInput | VerificationLogWhereInput[]
    id?: StringFilter<"VerificationLog"> | string
    ticketId?: StringFilter<"VerificationLog"> | string
    supervisorId?: StringFilter<"VerificationLog"> | string
    scannedAt?: DateTimeFilter<"VerificationLog"> | Date | string
    result?: EnumVerificationResultFilter<"VerificationLog"> | $Enums.VerificationResult
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationLogOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    supervisorId?: SortOrder
    scannedAt?: SortOrder
    result?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    supervisor?: UserOrderByWithRelationInput
  }

  export type VerificationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationLogWhereInput | VerificationLogWhereInput[]
    OR?: VerificationLogWhereInput[]
    NOT?: VerificationLogWhereInput | VerificationLogWhereInput[]
    ticketId?: StringFilter<"VerificationLog"> | string
    supervisorId?: StringFilter<"VerificationLog"> | string
    scannedAt?: DateTimeFilter<"VerificationLog"> | Date | string
    result?: EnumVerificationResultFilter<"VerificationLog"> | $Enums.VerificationResult
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    supervisor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VerificationLogOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    supervisorId?: SortOrder
    scannedAt?: SortOrder
    result?: SortOrder
    _count?: VerificationLogCountOrderByAggregateInput
    _max?: VerificationLogMaxOrderByAggregateInput
    _min?: VerificationLogMinOrderByAggregateInput
  }

  export type VerificationLogScalarWhereWithAggregatesInput = {
    AND?: VerificationLogScalarWhereWithAggregatesInput | VerificationLogScalarWhereWithAggregatesInput[]
    OR?: VerificationLogScalarWhereWithAggregatesInput[]
    NOT?: VerificationLogScalarWhereWithAggregatesInput | VerificationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationLog"> | string
    ticketId?: StringWithAggregatesFilter<"VerificationLog"> | string
    supervisorId?: StringWithAggregatesFilter<"VerificationLog"> | string
    scannedAt?: DateTimeWithAggregatesFilter<"VerificationLog"> | Date | string
    result?: EnumVerificationResultWithAggregatesFilter<"VerificationLog"> | $Enums.VerificationResult
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionCreateNestedManyWithoutTravelerInput
    travelerTickets?: TicketCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketCreateNestedManyWithoutConductorInput
    verifiedTickets?: TicketCreateNestedManyWithoutSupervisorInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutSupervisorInput
    buses?: BusCreateNestedManyWithoutConductorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionUncheckedCreateNestedManyWithoutTravelerInput
    travelerTickets?: TicketUncheckedCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketUncheckedCreateNestedManyWithoutConductorInput
    verifiedTickets?: TicketUncheckedCreateNestedManyWithoutSupervisorInput
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutSupervisorInput
    buses?: BusUncheckedCreateNestedManyWithoutConductorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUpdateManyWithoutTravelerNestedInput
    travelerTickets?: TicketUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUpdateManyWithoutConductorNestedInput
    verifiedTickets?: TicketUpdateManyWithoutSupervisorNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutSupervisorNestedInput
    buses?: BusUpdateManyWithoutConductorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUncheckedUpdateManyWithoutTravelerNestedInput
    travelerTickets?: TicketUncheckedUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUncheckedUpdateManyWithoutConductorNestedInput
    verifiedTickets?: TicketUncheckedUpdateManyWithoutSupervisorNestedInput
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutSupervisorNestedInput
    buses?: BusUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    id?: string
    routeName: string
    totalStops: number
    createdAt?: Date | string
    stops?: StopCreateNestedManyWithoutRouteInput
    fares?: FareCreateNestedManyWithoutRouteInput
    buses?: BusCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: string
    routeName: string
    totalStops: number
    createdAt?: Date | string
    stops?: StopUncheckedCreateNestedManyWithoutRouteInput
    fares?: FareUncheckedCreateNestedManyWithoutRouteInput
    buses?: BusUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    totalStops?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stops?: StopUpdateManyWithoutRouteNestedInput
    fares?: FareUpdateManyWithoutRouteNestedInput
    buses?: BusUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    totalStops?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stops?: StopUncheckedUpdateManyWithoutRouteNestedInput
    fares?: FareUncheckedUpdateManyWithoutRouteNestedInput
    buses?: BusUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: string
    routeName: string
    totalStops: number
    createdAt?: Date | string
  }

  export type RouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    totalStops?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    totalStops?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StopCreateInput = {
    id?: string
    stopName: string
    stopOrder: number
    distanceFromStart: number
    route: RouteCreateNestedOneWithoutStopsInput
    boardingSessions?: TravelSessionCreateNestedManyWithoutBoardingStopInput
    destinationSessions?: TravelSessionCreateNestedManyWithoutDestinationStopInput
  }

  export type StopUncheckedCreateInput = {
    id?: string
    routeId: string
    stopName: string
    stopOrder: number
    distanceFromStart: number
    boardingSessions?: TravelSessionUncheckedCreateNestedManyWithoutBoardingStopInput
    destinationSessions?: TravelSessionUncheckedCreateNestedManyWithoutDestinationStopInput
  }

  export type StopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    distanceFromStart?: FloatFieldUpdateOperationsInput | number
    route?: RouteUpdateOneRequiredWithoutStopsNestedInput
    boardingSessions?: TravelSessionUpdateManyWithoutBoardingStopNestedInput
    destinationSessions?: TravelSessionUpdateManyWithoutDestinationStopNestedInput
  }

  export type StopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    distanceFromStart?: FloatFieldUpdateOperationsInput | number
    boardingSessions?: TravelSessionUncheckedUpdateManyWithoutBoardingStopNestedInput
    destinationSessions?: TravelSessionUncheckedUpdateManyWithoutDestinationStopNestedInput
  }

  export type StopCreateManyInput = {
    id?: string
    routeId: string
    stopName: string
    stopOrder: number
    distanceFromStart: number
  }

  export type StopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    distanceFromStart?: FloatFieldUpdateOperationsInput | number
  }

  export type StopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    distanceFromStart?: FloatFieldUpdateOperationsInput | number
  }

  export type FareCreateInput = {
    id?: string
    fromStopOrder: number
    toStopOrder: number
    amount: number
    route: RouteCreateNestedOneWithoutFaresInput
  }

  export type FareUncheckedCreateInput = {
    id?: string
    routeId: string
    fromStopOrder: number
    toStopOrder: number
    amount: number
  }

  export type FareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStopOrder?: IntFieldUpdateOperationsInput | number
    toStopOrder?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    route?: RouteUpdateOneRequiredWithoutFaresNestedInput
  }

  export type FareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    fromStopOrder?: IntFieldUpdateOperationsInput | number
    toStopOrder?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type FareCreateManyInput = {
    id?: string
    routeId: string
    fromStopOrder: number
    toStopOrder: number
    amount: number
  }

  export type FareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStopOrder?: IntFieldUpdateOperationsInput | number
    toStopOrder?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type FareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    fromStopOrder?: IntFieldUpdateOperationsInput | number
    toStopOrder?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type BusCreateInput = {
    id?: string
    busNumber: string
    isActive?: boolean
    createdAt?: Date | string
    route: RouteCreateNestedOneWithoutBusesInput
    conductor?: UserCreateNestedOneWithoutBusesInput
    sessions?: TravelSessionCreateNestedManyWithoutBusInput
    tickets?: TicketCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateInput = {
    id?: string
    busNumber: string
    routeId: string
    conductorId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    sessions?: TravelSessionUncheckedCreateNestedManyWithoutBusInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutBusesNestedInput
    conductor?: UserUpdateOneWithoutBusesNestedInput
    sessions?: TravelSessionUpdateManyWithoutBusNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    conductorId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: TravelSessionUncheckedUpdateManyWithoutBusNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateManyInput = {
    id?: string
    busNumber: string
    routeId: string
    conductorId?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    conductorId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelSessionCreateInput = {
    id?: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
    traveler: UserCreateNestedOneWithoutTravelSessionsInput
    bus: BusCreateNestedOneWithoutSessionsInput
    boardingStop: StopCreateNestedOneWithoutBoardingSessionsInput
    destinationStop: StopCreateNestedOneWithoutDestinationSessionsInput
    ticket?: TicketCreateNestedOneWithoutSessionInput
  }

  export type TravelSessionUncheckedCreateInput = {
    id?: string
    travelerId: string
    busId: string
    boardingStopId: string
    destinationStopId: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
    ticket?: TicketUncheckedCreateNestedOneWithoutSessionInput
  }

  export type TravelSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traveler?: UserUpdateOneRequiredWithoutTravelSessionsNestedInput
    bus?: BusUpdateOneRequiredWithoutSessionsNestedInput
    boardingStop?: StopUpdateOneRequiredWithoutBoardingSessionsNestedInput
    destinationStop?: StopUpdateOneRequiredWithoutDestinationSessionsNestedInput
    ticket?: TicketUpdateOneWithoutSessionNestedInput
  }

  export type TravelSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStopId?: StringFieldUpdateOperationsInput | string
    destinationStopId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type TravelSessionCreateManyInput = {
    id?: string
    travelerId: string
    busId: string
    boardingStopId: string
    destinationStopId: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
  }

  export type TravelSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStopId?: StringFieldUpdateOperationsInput | string
    destinationStopId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    issuedAt?: Date | string
    session: TravelSessionCreateNestedOneWithoutTicketInput
    traveler: UserCreateNestedOneWithoutTravelerTicketsInput
    conductor: UserCreateNestedOneWithoutConductedTicketsInput
    bus: BusCreateNestedOneWithoutTicketsInput
    supervisor?: UserCreateNestedOneWithoutVerifiedTicketsInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    sessionId: string
    travelerId: string
    conductorId: string
    busId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    issuedAt?: Date | string
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: TravelSessionUpdateOneRequiredWithoutTicketNestedInput
    traveler?: UserUpdateOneRequiredWithoutTravelerTicketsNestedInput
    conductor?: UserUpdateOneRequiredWithoutConductedTicketsNestedInput
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    supervisor?: UserUpdateOneWithoutVerifiedTicketsNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    sessionId: string
    travelerId: string
    conductorId: string
    busId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    issuedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationLogCreateInput = {
    id?: string
    scannedAt?: Date | string
    result: $Enums.VerificationResult
    ticket: TicketCreateNestedOneWithoutVerificationLogsInput
    supervisor: UserCreateNestedOneWithoutVerificationLogsInput
  }

  export type VerificationLogUncheckedCreateInput = {
    id?: string
    ticketId: string
    supervisorId: string
    scannedAt?: Date | string
    result: $Enums.VerificationResult
  }

  export type VerificationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumVerificationResultFieldUpdateOperationsInput | $Enums.VerificationResult
    ticket?: TicketUpdateOneRequiredWithoutVerificationLogsNestedInput
    supervisor?: UserUpdateOneRequiredWithoutVerificationLogsNestedInput
  }

  export type VerificationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumVerificationResultFieldUpdateOperationsInput | $Enums.VerificationResult
  }

  export type VerificationLogCreateManyInput = {
    id?: string
    ticketId: string
    supervisorId: string
    scannedAt?: Date | string
    result: $Enums.VerificationResult
  }

  export type VerificationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumVerificationResultFieldUpdateOperationsInput | $Enums.VerificationResult
  }

  export type VerificationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumVerificationResultFieldUpdateOperationsInput | $Enums.VerificationResult
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TravelSessionListRelationFilter = {
    every?: TravelSessionWhereInput
    some?: TravelSessionWhereInput
    none?: TravelSessionWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type VerificationLogListRelationFilter = {
    every?: VerificationLogWhereInput
    some?: VerificationLogWhereInput
    none?: VerificationLogWhereInput
  }

  export type BusListRelationFilter = {
    every?: BusWhereInput
    some?: BusWhereInput
    none?: BusWhereInput
  }

  export type TravelSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StopListRelationFilter = {
    every?: StopWhereInput
    some?: StopWhereInput
    none?: StopWhereInput
  }

  export type FareListRelationFilter = {
    every?: FareWhereInput
    some?: FareWhereInput
    none?: FareWhereInput
  }

  export type StopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    routeName?: SortOrder
    totalStops?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    totalStops?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    routeName?: SortOrder
    totalStops?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    routeName?: SortOrder
    totalStops?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    totalStops?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type StopCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopName?: SortOrder
    stopOrder?: SortOrder
    distanceFromStart?: SortOrder
  }

  export type StopAvgOrderByAggregateInput = {
    stopOrder?: SortOrder
    distanceFromStart?: SortOrder
  }

  export type StopMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopName?: SortOrder
    stopOrder?: SortOrder
    distanceFromStart?: SortOrder
  }

  export type StopMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopName?: SortOrder
    stopOrder?: SortOrder
    distanceFromStart?: SortOrder
  }

  export type StopSumOrderByAggregateInput = {
    stopOrder?: SortOrder
    distanceFromStart?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FareCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    fromStopOrder?: SortOrder
    toStopOrder?: SortOrder
    amount?: SortOrder
  }

  export type FareAvgOrderByAggregateInput = {
    fromStopOrder?: SortOrder
    toStopOrder?: SortOrder
    amount?: SortOrder
  }

  export type FareMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    fromStopOrder?: SortOrder
    toStopOrder?: SortOrder
    amount?: SortOrder
  }

  export type FareMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    fromStopOrder?: SortOrder
    toStopOrder?: SortOrder
    amount?: SortOrder
  }

  export type FareSumOrderByAggregateInput = {
    fromStopOrder?: SortOrder
    toStopOrder?: SortOrder
    amount?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BusCountOrderByAggregateInput = {
    id?: SortOrder
    busNumber?: SortOrder
    routeId?: SortOrder
    conductorId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BusMaxOrderByAggregateInput = {
    id?: SortOrder
    busNumber?: SortOrder
    routeId?: SortOrder
    conductorId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BusMinOrderByAggregateInput = {
    id?: SortOrder
    busNumber?: SortOrder
    routeId?: SortOrder
    conductorId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BusScalarRelationFilter = {
    is?: BusWhereInput
    isNot?: BusWhereInput
  }

  export type StopScalarRelationFilter = {
    is?: StopWhereInput
    isNot?: StopWhereInput
  }

  export type TicketNullableScalarRelationFilter = {
    is?: TicketWhereInput | null
    isNot?: TicketWhereInput | null
  }

  export type TravelSessionCountOrderByAggregateInput = {
    id?: SortOrder
    travelerId?: SortOrder
    busId?: SortOrder
    boardingStopId?: SortOrder
    destinationStopId?: SortOrder
    status?: SortOrder
    tempQRCode?: SortOrder
    qrExpiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TravelSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    travelerId?: SortOrder
    busId?: SortOrder
    boardingStopId?: SortOrder
    destinationStopId?: SortOrder
    status?: SortOrder
    tempQRCode?: SortOrder
    qrExpiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TravelSessionMinOrderByAggregateInput = {
    id?: SortOrder
    travelerId?: SortOrder
    busId?: SortOrder
    boardingStopId?: SortOrder
    destinationStopId?: SortOrder
    status?: SortOrder
    tempQRCode?: SortOrder
    qrExpiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TravelSessionScalarRelationFilter = {
    is?: TravelSessionWhereInput
    isNot?: TravelSessionWhereInput
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    travelerId?: SortOrder
    conductorId?: SortOrder
    busId?: SortOrder
    boardingStop?: SortOrder
    destinationStop?: SortOrder
    fare?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    signedQRCode?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    issuedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    fare?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    travelerId?: SortOrder
    conductorId?: SortOrder
    busId?: SortOrder
    boardingStop?: SortOrder
    destinationStop?: SortOrder
    fare?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    signedQRCode?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    issuedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    travelerId?: SortOrder
    conductorId?: SortOrder
    busId?: SortOrder
    boardingStop?: SortOrder
    destinationStop?: SortOrder
    fare?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    signedQRCode?: SortOrder
    isVerified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    issuedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    fare?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumVerificationResultFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationResult | EnumVerificationResultFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationResult[] | ListEnumVerificationResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationResult[] | ListEnumVerificationResultFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationResultFilter<$PrismaModel> | $Enums.VerificationResult
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type VerificationLogCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    supervisorId?: SortOrder
    scannedAt?: SortOrder
    result?: SortOrder
  }

  export type VerificationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    supervisorId?: SortOrder
    scannedAt?: SortOrder
    result?: SortOrder
  }

  export type VerificationLogMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    supervisorId?: SortOrder
    scannedAt?: SortOrder
    result?: SortOrder
  }

  export type EnumVerificationResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationResult | EnumVerificationResultFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationResult[] | ListEnumVerificationResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationResult[] | ListEnumVerificationResultFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationResultWithAggregatesFilter<$PrismaModel> | $Enums.VerificationResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationResultFilter<$PrismaModel>
    _max?: NestedEnumVerificationResultFilter<$PrismaModel>
  }

  export type TravelSessionCreateNestedManyWithoutTravelerInput = {
    create?: XOR<TravelSessionCreateWithoutTravelerInput, TravelSessionUncheckedCreateWithoutTravelerInput> | TravelSessionCreateWithoutTravelerInput[] | TravelSessionUncheckedCreateWithoutTravelerInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutTravelerInput | TravelSessionCreateOrConnectWithoutTravelerInput[]
    createMany?: TravelSessionCreateManyTravelerInputEnvelope
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutTravelerInput = {
    create?: XOR<TicketCreateWithoutTravelerInput, TicketUncheckedCreateWithoutTravelerInput> | TicketCreateWithoutTravelerInput[] | TicketUncheckedCreateWithoutTravelerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTravelerInput | TicketCreateOrConnectWithoutTravelerInput[]
    createMany?: TicketCreateManyTravelerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutConductorInput = {
    create?: XOR<TicketCreateWithoutConductorInput, TicketUncheckedCreateWithoutConductorInput> | TicketCreateWithoutConductorInput[] | TicketUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutConductorInput | TicketCreateOrConnectWithoutConductorInput[]
    createMany?: TicketCreateManyConductorInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<TicketCreateWithoutSupervisorInput, TicketUncheckedCreateWithoutSupervisorInput> | TicketCreateWithoutSupervisorInput[] | TicketUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSupervisorInput | TicketCreateOrConnectWithoutSupervisorInput[]
    createMany?: TicketCreateManySupervisorInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type VerificationLogCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<VerificationLogCreateWithoutSupervisorInput, VerificationLogUncheckedCreateWithoutSupervisorInput> | VerificationLogCreateWithoutSupervisorInput[] | VerificationLogUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: VerificationLogCreateOrConnectWithoutSupervisorInput | VerificationLogCreateOrConnectWithoutSupervisorInput[]
    createMany?: VerificationLogCreateManySupervisorInputEnvelope
    connect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
  }

  export type BusCreateNestedManyWithoutConductorInput = {
    create?: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput> | BusCreateWithoutConductorInput[] | BusUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: BusCreateOrConnectWithoutConductorInput | BusCreateOrConnectWithoutConductorInput[]
    createMany?: BusCreateManyConductorInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type TravelSessionUncheckedCreateNestedManyWithoutTravelerInput = {
    create?: XOR<TravelSessionCreateWithoutTravelerInput, TravelSessionUncheckedCreateWithoutTravelerInput> | TravelSessionCreateWithoutTravelerInput[] | TravelSessionUncheckedCreateWithoutTravelerInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutTravelerInput | TravelSessionCreateOrConnectWithoutTravelerInput[]
    createMany?: TravelSessionCreateManyTravelerInputEnvelope
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutTravelerInput = {
    create?: XOR<TicketCreateWithoutTravelerInput, TicketUncheckedCreateWithoutTravelerInput> | TicketCreateWithoutTravelerInput[] | TicketUncheckedCreateWithoutTravelerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTravelerInput | TicketCreateOrConnectWithoutTravelerInput[]
    createMany?: TicketCreateManyTravelerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutConductorInput = {
    create?: XOR<TicketCreateWithoutConductorInput, TicketUncheckedCreateWithoutConductorInput> | TicketCreateWithoutConductorInput[] | TicketUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutConductorInput | TicketCreateOrConnectWithoutConductorInput[]
    createMany?: TicketCreateManyConductorInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<TicketCreateWithoutSupervisorInput, TicketUncheckedCreateWithoutSupervisorInput> | TicketCreateWithoutSupervisorInput[] | TicketUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSupervisorInput | TicketCreateOrConnectWithoutSupervisorInput[]
    createMany?: TicketCreateManySupervisorInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type VerificationLogUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<VerificationLogCreateWithoutSupervisorInput, VerificationLogUncheckedCreateWithoutSupervisorInput> | VerificationLogCreateWithoutSupervisorInput[] | VerificationLogUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: VerificationLogCreateOrConnectWithoutSupervisorInput | VerificationLogCreateOrConnectWithoutSupervisorInput[]
    createMany?: VerificationLogCreateManySupervisorInputEnvelope
    connect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutConductorInput = {
    create?: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput> | BusCreateWithoutConductorInput[] | BusUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: BusCreateOrConnectWithoutConductorInput | BusCreateOrConnectWithoutConductorInput[]
    createMany?: BusCreateManyConductorInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TravelSessionUpdateManyWithoutTravelerNestedInput = {
    create?: XOR<TravelSessionCreateWithoutTravelerInput, TravelSessionUncheckedCreateWithoutTravelerInput> | TravelSessionCreateWithoutTravelerInput[] | TravelSessionUncheckedCreateWithoutTravelerInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutTravelerInput | TravelSessionCreateOrConnectWithoutTravelerInput[]
    upsert?: TravelSessionUpsertWithWhereUniqueWithoutTravelerInput | TravelSessionUpsertWithWhereUniqueWithoutTravelerInput[]
    createMany?: TravelSessionCreateManyTravelerInputEnvelope
    set?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    disconnect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    delete?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    update?: TravelSessionUpdateWithWhereUniqueWithoutTravelerInput | TravelSessionUpdateWithWhereUniqueWithoutTravelerInput[]
    updateMany?: TravelSessionUpdateManyWithWhereWithoutTravelerInput | TravelSessionUpdateManyWithWhereWithoutTravelerInput[]
    deleteMany?: TravelSessionScalarWhereInput | TravelSessionScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutTravelerNestedInput = {
    create?: XOR<TicketCreateWithoutTravelerInput, TicketUncheckedCreateWithoutTravelerInput> | TicketCreateWithoutTravelerInput[] | TicketUncheckedCreateWithoutTravelerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTravelerInput | TicketCreateOrConnectWithoutTravelerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTravelerInput | TicketUpsertWithWhereUniqueWithoutTravelerInput[]
    createMany?: TicketCreateManyTravelerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTravelerInput | TicketUpdateWithWhereUniqueWithoutTravelerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTravelerInput | TicketUpdateManyWithWhereWithoutTravelerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutConductorNestedInput = {
    create?: XOR<TicketCreateWithoutConductorInput, TicketUncheckedCreateWithoutConductorInput> | TicketCreateWithoutConductorInput[] | TicketUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutConductorInput | TicketCreateOrConnectWithoutConductorInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutConductorInput | TicketUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: TicketCreateManyConductorInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutConductorInput | TicketUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutConductorInput | TicketUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<TicketCreateWithoutSupervisorInput, TicketUncheckedCreateWithoutSupervisorInput> | TicketCreateWithoutSupervisorInput[] | TicketUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSupervisorInput | TicketCreateOrConnectWithoutSupervisorInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSupervisorInput | TicketUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: TicketCreateManySupervisorInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSupervisorInput | TicketUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSupervisorInput | TicketUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type VerificationLogUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<VerificationLogCreateWithoutSupervisorInput, VerificationLogUncheckedCreateWithoutSupervisorInput> | VerificationLogCreateWithoutSupervisorInput[] | VerificationLogUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: VerificationLogCreateOrConnectWithoutSupervisorInput | VerificationLogCreateOrConnectWithoutSupervisorInput[]
    upsert?: VerificationLogUpsertWithWhereUniqueWithoutSupervisorInput | VerificationLogUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: VerificationLogCreateManySupervisorInputEnvelope
    set?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    disconnect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    delete?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    connect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    update?: VerificationLogUpdateWithWhereUniqueWithoutSupervisorInput | VerificationLogUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: VerificationLogUpdateManyWithWhereWithoutSupervisorInput | VerificationLogUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: VerificationLogScalarWhereInput | VerificationLogScalarWhereInput[]
  }

  export type BusUpdateManyWithoutConductorNestedInput = {
    create?: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput> | BusCreateWithoutConductorInput[] | BusUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: BusCreateOrConnectWithoutConductorInput | BusCreateOrConnectWithoutConductorInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutConductorInput | BusUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: BusCreateManyConductorInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutConductorInput | BusUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: BusUpdateManyWithWhereWithoutConductorInput | BusUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type TravelSessionUncheckedUpdateManyWithoutTravelerNestedInput = {
    create?: XOR<TravelSessionCreateWithoutTravelerInput, TravelSessionUncheckedCreateWithoutTravelerInput> | TravelSessionCreateWithoutTravelerInput[] | TravelSessionUncheckedCreateWithoutTravelerInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutTravelerInput | TravelSessionCreateOrConnectWithoutTravelerInput[]
    upsert?: TravelSessionUpsertWithWhereUniqueWithoutTravelerInput | TravelSessionUpsertWithWhereUniqueWithoutTravelerInput[]
    createMany?: TravelSessionCreateManyTravelerInputEnvelope
    set?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    disconnect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    delete?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    update?: TravelSessionUpdateWithWhereUniqueWithoutTravelerInput | TravelSessionUpdateWithWhereUniqueWithoutTravelerInput[]
    updateMany?: TravelSessionUpdateManyWithWhereWithoutTravelerInput | TravelSessionUpdateManyWithWhereWithoutTravelerInput[]
    deleteMany?: TravelSessionScalarWhereInput | TravelSessionScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutTravelerNestedInput = {
    create?: XOR<TicketCreateWithoutTravelerInput, TicketUncheckedCreateWithoutTravelerInput> | TicketCreateWithoutTravelerInput[] | TicketUncheckedCreateWithoutTravelerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTravelerInput | TicketCreateOrConnectWithoutTravelerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTravelerInput | TicketUpsertWithWhereUniqueWithoutTravelerInput[]
    createMany?: TicketCreateManyTravelerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTravelerInput | TicketUpdateWithWhereUniqueWithoutTravelerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTravelerInput | TicketUpdateManyWithWhereWithoutTravelerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutConductorNestedInput = {
    create?: XOR<TicketCreateWithoutConductorInput, TicketUncheckedCreateWithoutConductorInput> | TicketCreateWithoutConductorInput[] | TicketUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutConductorInput | TicketCreateOrConnectWithoutConductorInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutConductorInput | TicketUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: TicketCreateManyConductorInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutConductorInput | TicketUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutConductorInput | TicketUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<TicketCreateWithoutSupervisorInput, TicketUncheckedCreateWithoutSupervisorInput> | TicketCreateWithoutSupervisorInput[] | TicketUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSupervisorInput | TicketCreateOrConnectWithoutSupervisorInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSupervisorInput | TicketUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: TicketCreateManySupervisorInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSupervisorInput | TicketUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSupervisorInput | TicketUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type VerificationLogUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<VerificationLogCreateWithoutSupervisorInput, VerificationLogUncheckedCreateWithoutSupervisorInput> | VerificationLogCreateWithoutSupervisorInput[] | VerificationLogUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: VerificationLogCreateOrConnectWithoutSupervisorInput | VerificationLogCreateOrConnectWithoutSupervisorInput[]
    upsert?: VerificationLogUpsertWithWhereUniqueWithoutSupervisorInput | VerificationLogUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: VerificationLogCreateManySupervisorInputEnvelope
    set?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    disconnect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    delete?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    connect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    update?: VerificationLogUpdateWithWhereUniqueWithoutSupervisorInput | VerificationLogUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: VerificationLogUpdateManyWithWhereWithoutSupervisorInput | VerificationLogUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: VerificationLogScalarWhereInput | VerificationLogScalarWhereInput[]
  }

  export type BusUncheckedUpdateManyWithoutConductorNestedInput = {
    create?: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput> | BusCreateWithoutConductorInput[] | BusUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: BusCreateOrConnectWithoutConductorInput | BusCreateOrConnectWithoutConductorInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutConductorInput | BusUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: BusCreateManyConductorInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutConductorInput | BusUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: BusUpdateManyWithWhereWithoutConductorInput | BusUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type StopCreateNestedManyWithoutRouteInput = {
    create?: XOR<StopCreateWithoutRouteInput, StopUncheckedCreateWithoutRouteInput> | StopCreateWithoutRouteInput[] | StopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: StopCreateOrConnectWithoutRouteInput | StopCreateOrConnectWithoutRouteInput[]
    createMany?: StopCreateManyRouteInputEnvelope
    connect?: StopWhereUniqueInput | StopWhereUniqueInput[]
  }

  export type FareCreateNestedManyWithoutRouteInput = {
    create?: XOR<FareCreateWithoutRouteInput, FareUncheckedCreateWithoutRouteInput> | FareCreateWithoutRouteInput[] | FareUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: FareCreateOrConnectWithoutRouteInput | FareCreateOrConnectWithoutRouteInput[]
    createMany?: FareCreateManyRouteInputEnvelope
    connect?: FareWhereUniqueInput | FareWhereUniqueInput[]
  }

  export type BusCreateNestedManyWithoutRouteInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type StopUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<StopCreateWithoutRouteInput, StopUncheckedCreateWithoutRouteInput> | StopCreateWithoutRouteInput[] | StopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: StopCreateOrConnectWithoutRouteInput | StopCreateOrConnectWithoutRouteInput[]
    createMany?: StopCreateManyRouteInputEnvelope
    connect?: StopWhereUniqueInput | StopWhereUniqueInput[]
  }

  export type FareUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<FareCreateWithoutRouteInput, FareUncheckedCreateWithoutRouteInput> | FareCreateWithoutRouteInput[] | FareUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: FareCreateOrConnectWithoutRouteInput | FareCreateOrConnectWithoutRouteInput[]
    createMany?: FareCreateManyRouteInputEnvelope
    connect?: FareWhereUniqueInput | FareWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StopUpdateManyWithoutRouteNestedInput = {
    create?: XOR<StopCreateWithoutRouteInput, StopUncheckedCreateWithoutRouteInput> | StopCreateWithoutRouteInput[] | StopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: StopCreateOrConnectWithoutRouteInput | StopCreateOrConnectWithoutRouteInput[]
    upsert?: StopUpsertWithWhereUniqueWithoutRouteInput | StopUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: StopCreateManyRouteInputEnvelope
    set?: StopWhereUniqueInput | StopWhereUniqueInput[]
    disconnect?: StopWhereUniqueInput | StopWhereUniqueInput[]
    delete?: StopWhereUniqueInput | StopWhereUniqueInput[]
    connect?: StopWhereUniqueInput | StopWhereUniqueInput[]
    update?: StopUpdateWithWhereUniqueWithoutRouteInput | StopUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: StopUpdateManyWithWhereWithoutRouteInput | StopUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: StopScalarWhereInput | StopScalarWhereInput[]
  }

  export type FareUpdateManyWithoutRouteNestedInput = {
    create?: XOR<FareCreateWithoutRouteInput, FareUncheckedCreateWithoutRouteInput> | FareCreateWithoutRouteInput[] | FareUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: FareCreateOrConnectWithoutRouteInput | FareCreateOrConnectWithoutRouteInput[]
    upsert?: FareUpsertWithWhereUniqueWithoutRouteInput | FareUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: FareCreateManyRouteInputEnvelope
    set?: FareWhereUniqueInput | FareWhereUniqueInput[]
    disconnect?: FareWhereUniqueInput | FareWhereUniqueInput[]
    delete?: FareWhereUniqueInput | FareWhereUniqueInput[]
    connect?: FareWhereUniqueInput | FareWhereUniqueInput[]
    update?: FareUpdateWithWhereUniqueWithoutRouteInput | FareUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: FareUpdateManyWithWhereWithoutRouteInput | FareUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: FareScalarWhereInput | FareScalarWhereInput[]
  }

  export type BusUpdateManyWithoutRouteNestedInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutRouteInput | BusUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutRouteInput | BusUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: BusUpdateManyWithWhereWithoutRouteInput | BusUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type StopUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<StopCreateWithoutRouteInput, StopUncheckedCreateWithoutRouteInput> | StopCreateWithoutRouteInput[] | StopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: StopCreateOrConnectWithoutRouteInput | StopCreateOrConnectWithoutRouteInput[]
    upsert?: StopUpsertWithWhereUniqueWithoutRouteInput | StopUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: StopCreateManyRouteInputEnvelope
    set?: StopWhereUniqueInput | StopWhereUniqueInput[]
    disconnect?: StopWhereUniqueInput | StopWhereUniqueInput[]
    delete?: StopWhereUniqueInput | StopWhereUniqueInput[]
    connect?: StopWhereUniqueInput | StopWhereUniqueInput[]
    update?: StopUpdateWithWhereUniqueWithoutRouteInput | StopUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: StopUpdateManyWithWhereWithoutRouteInput | StopUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: StopScalarWhereInput | StopScalarWhereInput[]
  }

  export type FareUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<FareCreateWithoutRouteInput, FareUncheckedCreateWithoutRouteInput> | FareCreateWithoutRouteInput[] | FareUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: FareCreateOrConnectWithoutRouteInput | FareCreateOrConnectWithoutRouteInput[]
    upsert?: FareUpsertWithWhereUniqueWithoutRouteInput | FareUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: FareCreateManyRouteInputEnvelope
    set?: FareWhereUniqueInput | FareWhereUniqueInput[]
    disconnect?: FareWhereUniqueInput | FareWhereUniqueInput[]
    delete?: FareWhereUniqueInput | FareWhereUniqueInput[]
    connect?: FareWhereUniqueInput | FareWhereUniqueInput[]
    update?: FareUpdateWithWhereUniqueWithoutRouteInput | FareUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: FareUpdateManyWithWhereWithoutRouteInput | FareUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: FareScalarWhereInput | FareScalarWhereInput[]
  }

  export type BusUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutRouteInput | BusUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutRouteInput | BusUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: BusUpdateManyWithWhereWithoutRouteInput | BusUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutStopsInput = {
    create?: XOR<RouteCreateWithoutStopsInput, RouteUncheckedCreateWithoutStopsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutStopsInput
    connect?: RouteWhereUniqueInput
  }

  export type TravelSessionCreateNestedManyWithoutBoardingStopInput = {
    create?: XOR<TravelSessionCreateWithoutBoardingStopInput, TravelSessionUncheckedCreateWithoutBoardingStopInput> | TravelSessionCreateWithoutBoardingStopInput[] | TravelSessionUncheckedCreateWithoutBoardingStopInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutBoardingStopInput | TravelSessionCreateOrConnectWithoutBoardingStopInput[]
    createMany?: TravelSessionCreateManyBoardingStopInputEnvelope
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
  }

  export type TravelSessionCreateNestedManyWithoutDestinationStopInput = {
    create?: XOR<TravelSessionCreateWithoutDestinationStopInput, TravelSessionUncheckedCreateWithoutDestinationStopInput> | TravelSessionCreateWithoutDestinationStopInput[] | TravelSessionUncheckedCreateWithoutDestinationStopInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutDestinationStopInput | TravelSessionCreateOrConnectWithoutDestinationStopInput[]
    createMany?: TravelSessionCreateManyDestinationStopInputEnvelope
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
  }

  export type TravelSessionUncheckedCreateNestedManyWithoutBoardingStopInput = {
    create?: XOR<TravelSessionCreateWithoutBoardingStopInput, TravelSessionUncheckedCreateWithoutBoardingStopInput> | TravelSessionCreateWithoutBoardingStopInput[] | TravelSessionUncheckedCreateWithoutBoardingStopInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutBoardingStopInput | TravelSessionCreateOrConnectWithoutBoardingStopInput[]
    createMany?: TravelSessionCreateManyBoardingStopInputEnvelope
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
  }

  export type TravelSessionUncheckedCreateNestedManyWithoutDestinationStopInput = {
    create?: XOR<TravelSessionCreateWithoutDestinationStopInput, TravelSessionUncheckedCreateWithoutDestinationStopInput> | TravelSessionCreateWithoutDestinationStopInput[] | TravelSessionUncheckedCreateWithoutDestinationStopInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutDestinationStopInput | TravelSessionCreateOrConnectWithoutDestinationStopInput[]
    createMany?: TravelSessionCreateManyDestinationStopInputEnvelope
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RouteUpdateOneRequiredWithoutStopsNestedInput = {
    create?: XOR<RouteCreateWithoutStopsInput, RouteUncheckedCreateWithoutStopsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutStopsInput
    upsert?: RouteUpsertWithoutStopsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutStopsInput, RouteUpdateWithoutStopsInput>, RouteUncheckedUpdateWithoutStopsInput>
  }

  export type TravelSessionUpdateManyWithoutBoardingStopNestedInput = {
    create?: XOR<TravelSessionCreateWithoutBoardingStopInput, TravelSessionUncheckedCreateWithoutBoardingStopInput> | TravelSessionCreateWithoutBoardingStopInput[] | TravelSessionUncheckedCreateWithoutBoardingStopInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutBoardingStopInput | TravelSessionCreateOrConnectWithoutBoardingStopInput[]
    upsert?: TravelSessionUpsertWithWhereUniqueWithoutBoardingStopInput | TravelSessionUpsertWithWhereUniqueWithoutBoardingStopInput[]
    createMany?: TravelSessionCreateManyBoardingStopInputEnvelope
    set?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    disconnect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    delete?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    update?: TravelSessionUpdateWithWhereUniqueWithoutBoardingStopInput | TravelSessionUpdateWithWhereUniqueWithoutBoardingStopInput[]
    updateMany?: TravelSessionUpdateManyWithWhereWithoutBoardingStopInput | TravelSessionUpdateManyWithWhereWithoutBoardingStopInput[]
    deleteMany?: TravelSessionScalarWhereInput | TravelSessionScalarWhereInput[]
  }

  export type TravelSessionUpdateManyWithoutDestinationStopNestedInput = {
    create?: XOR<TravelSessionCreateWithoutDestinationStopInput, TravelSessionUncheckedCreateWithoutDestinationStopInput> | TravelSessionCreateWithoutDestinationStopInput[] | TravelSessionUncheckedCreateWithoutDestinationStopInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutDestinationStopInput | TravelSessionCreateOrConnectWithoutDestinationStopInput[]
    upsert?: TravelSessionUpsertWithWhereUniqueWithoutDestinationStopInput | TravelSessionUpsertWithWhereUniqueWithoutDestinationStopInput[]
    createMany?: TravelSessionCreateManyDestinationStopInputEnvelope
    set?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    disconnect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    delete?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    update?: TravelSessionUpdateWithWhereUniqueWithoutDestinationStopInput | TravelSessionUpdateWithWhereUniqueWithoutDestinationStopInput[]
    updateMany?: TravelSessionUpdateManyWithWhereWithoutDestinationStopInput | TravelSessionUpdateManyWithWhereWithoutDestinationStopInput[]
    deleteMany?: TravelSessionScalarWhereInput | TravelSessionScalarWhereInput[]
  }

  export type TravelSessionUncheckedUpdateManyWithoutBoardingStopNestedInput = {
    create?: XOR<TravelSessionCreateWithoutBoardingStopInput, TravelSessionUncheckedCreateWithoutBoardingStopInput> | TravelSessionCreateWithoutBoardingStopInput[] | TravelSessionUncheckedCreateWithoutBoardingStopInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutBoardingStopInput | TravelSessionCreateOrConnectWithoutBoardingStopInput[]
    upsert?: TravelSessionUpsertWithWhereUniqueWithoutBoardingStopInput | TravelSessionUpsertWithWhereUniqueWithoutBoardingStopInput[]
    createMany?: TravelSessionCreateManyBoardingStopInputEnvelope
    set?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    disconnect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    delete?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    update?: TravelSessionUpdateWithWhereUniqueWithoutBoardingStopInput | TravelSessionUpdateWithWhereUniqueWithoutBoardingStopInput[]
    updateMany?: TravelSessionUpdateManyWithWhereWithoutBoardingStopInput | TravelSessionUpdateManyWithWhereWithoutBoardingStopInput[]
    deleteMany?: TravelSessionScalarWhereInput | TravelSessionScalarWhereInput[]
  }

  export type TravelSessionUncheckedUpdateManyWithoutDestinationStopNestedInput = {
    create?: XOR<TravelSessionCreateWithoutDestinationStopInput, TravelSessionUncheckedCreateWithoutDestinationStopInput> | TravelSessionCreateWithoutDestinationStopInput[] | TravelSessionUncheckedCreateWithoutDestinationStopInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutDestinationStopInput | TravelSessionCreateOrConnectWithoutDestinationStopInput[]
    upsert?: TravelSessionUpsertWithWhereUniqueWithoutDestinationStopInput | TravelSessionUpsertWithWhereUniqueWithoutDestinationStopInput[]
    createMany?: TravelSessionCreateManyDestinationStopInputEnvelope
    set?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    disconnect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    delete?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    update?: TravelSessionUpdateWithWhereUniqueWithoutDestinationStopInput | TravelSessionUpdateWithWhereUniqueWithoutDestinationStopInput[]
    updateMany?: TravelSessionUpdateManyWithWhereWithoutDestinationStopInput | TravelSessionUpdateManyWithWhereWithoutDestinationStopInput[]
    deleteMany?: TravelSessionScalarWhereInput | TravelSessionScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutFaresInput = {
    create?: XOR<RouteCreateWithoutFaresInput, RouteUncheckedCreateWithoutFaresInput>
    connectOrCreate?: RouteCreateOrConnectWithoutFaresInput
    connect?: RouteWhereUniqueInput
  }

  export type RouteUpdateOneRequiredWithoutFaresNestedInput = {
    create?: XOR<RouteCreateWithoutFaresInput, RouteUncheckedCreateWithoutFaresInput>
    connectOrCreate?: RouteCreateOrConnectWithoutFaresInput
    upsert?: RouteUpsertWithoutFaresInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutFaresInput, RouteUpdateWithoutFaresInput>, RouteUncheckedUpdateWithoutFaresInput>
  }

  export type RouteCreateNestedOneWithoutBusesInput = {
    create?: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutBusesInput
    connect?: RouteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBusesInput = {
    create?: XOR<UserCreateWithoutBusesInput, UserUncheckedCreateWithoutBusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusesInput
    connect?: UserWhereUniqueInput
  }

  export type TravelSessionCreateNestedManyWithoutBusInput = {
    create?: XOR<TravelSessionCreateWithoutBusInput, TravelSessionUncheckedCreateWithoutBusInput> | TravelSessionCreateWithoutBusInput[] | TravelSessionUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutBusInput | TravelSessionCreateOrConnectWithoutBusInput[]
    createMany?: TravelSessionCreateManyBusInputEnvelope
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutBusInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TravelSessionUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<TravelSessionCreateWithoutBusInput, TravelSessionUncheckedCreateWithoutBusInput> | TravelSessionCreateWithoutBusInput[] | TravelSessionUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutBusInput | TravelSessionCreateOrConnectWithoutBusInput[]
    createMany?: TravelSessionCreateManyBusInputEnvelope
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RouteUpdateOneRequiredWithoutBusesNestedInput = {
    create?: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutBusesInput
    upsert?: RouteUpsertWithoutBusesInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutBusesInput, RouteUpdateWithoutBusesInput>, RouteUncheckedUpdateWithoutBusesInput>
  }

  export type UserUpdateOneWithoutBusesNestedInput = {
    create?: XOR<UserCreateWithoutBusesInput, UserUncheckedCreateWithoutBusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusesInput
    upsert?: UserUpsertWithoutBusesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusesInput, UserUpdateWithoutBusesInput>, UserUncheckedUpdateWithoutBusesInput>
  }

  export type TravelSessionUpdateManyWithoutBusNestedInput = {
    create?: XOR<TravelSessionCreateWithoutBusInput, TravelSessionUncheckedCreateWithoutBusInput> | TravelSessionCreateWithoutBusInput[] | TravelSessionUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutBusInput | TravelSessionCreateOrConnectWithoutBusInput[]
    upsert?: TravelSessionUpsertWithWhereUniqueWithoutBusInput | TravelSessionUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TravelSessionCreateManyBusInputEnvelope
    set?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    disconnect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    delete?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    update?: TravelSessionUpdateWithWhereUniqueWithoutBusInput | TravelSessionUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TravelSessionUpdateManyWithWhereWithoutBusInput | TravelSessionUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TravelSessionScalarWhereInput | TravelSessionScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutBusNestedInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBusInput | TicketUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBusInput | TicketUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBusInput | TicketUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TravelSessionUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<TravelSessionCreateWithoutBusInput, TravelSessionUncheckedCreateWithoutBusInput> | TravelSessionCreateWithoutBusInput[] | TravelSessionUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TravelSessionCreateOrConnectWithoutBusInput | TravelSessionCreateOrConnectWithoutBusInput[]
    upsert?: TravelSessionUpsertWithWhereUniqueWithoutBusInput | TravelSessionUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TravelSessionCreateManyBusInputEnvelope
    set?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    disconnect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    delete?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    connect?: TravelSessionWhereUniqueInput | TravelSessionWhereUniqueInput[]
    update?: TravelSessionUpdateWithWhereUniqueWithoutBusInput | TravelSessionUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TravelSessionUpdateManyWithWhereWithoutBusInput | TravelSessionUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TravelSessionScalarWhereInput | TravelSessionScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBusInput | TicketUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBusInput | TicketUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBusInput | TicketUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTravelSessionsInput = {
    create?: XOR<UserCreateWithoutTravelSessionsInput, UserUncheckedCreateWithoutTravelSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type BusCreateNestedOneWithoutSessionsInput = {
    create?: XOR<BusCreateWithoutSessionsInput, BusUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: BusCreateOrConnectWithoutSessionsInput
    connect?: BusWhereUniqueInput
  }

  export type StopCreateNestedOneWithoutBoardingSessionsInput = {
    create?: XOR<StopCreateWithoutBoardingSessionsInput, StopUncheckedCreateWithoutBoardingSessionsInput>
    connectOrCreate?: StopCreateOrConnectWithoutBoardingSessionsInput
    connect?: StopWhereUniqueInput
  }

  export type StopCreateNestedOneWithoutDestinationSessionsInput = {
    create?: XOR<StopCreateWithoutDestinationSessionsInput, StopUncheckedCreateWithoutDestinationSessionsInput>
    connectOrCreate?: StopCreateOrConnectWithoutDestinationSessionsInput
    connect?: StopWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutSessionInput = {
    create?: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutSessionInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutSessionInput
    connect?: TicketWhereUniqueInput
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type UserUpdateOneRequiredWithoutTravelSessionsNestedInput = {
    create?: XOR<UserCreateWithoutTravelSessionsInput, UserUncheckedCreateWithoutTravelSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelSessionsInput
    upsert?: UserUpsertWithoutTravelSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTravelSessionsInput, UserUpdateWithoutTravelSessionsInput>, UserUncheckedUpdateWithoutTravelSessionsInput>
  }

  export type BusUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<BusCreateWithoutSessionsInput, BusUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: BusCreateOrConnectWithoutSessionsInput
    upsert?: BusUpsertWithoutSessionsInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutSessionsInput, BusUpdateWithoutSessionsInput>, BusUncheckedUpdateWithoutSessionsInput>
  }

  export type StopUpdateOneRequiredWithoutBoardingSessionsNestedInput = {
    create?: XOR<StopCreateWithoutBoardingSessionsInput, StopUncheckedCreateWithoutBoardingSessionsInput>
    connectOrCreate?: StopCreateOrConnectWithoutBoardingSessionsInput
    upsert?: StopUpsertWithoutBoardingSessionsInput
    connect?: StopWhereUniqueInput
    update?: XOR<XOR<StopUpdateToOneWithWhereWithoutBoardingSessionsInput, StopUpdateWithoutBoardingSessionsInput>, StopUncheckedUpdateWithoutBoardingSessionsInput>
  }

  export type StopUpdateOneRequiredWithoutDestinationSessionsNestedInput = {
    create?: XOR<StopCreateWithoutDestinationSessionsInput, StopUncheckedCreateWithoutDestinationSessionsInput>
    connectOrCreate?: StopCreateOrConnectWithoutDestinationSessionsInput
    upsert?: StopUpsertWithoutDestinationSessionsInput
    connect?: StopWhereUniqueInput
    update?: XOR<XOR<StopUpdateToOneWithWhereWithoutDestinationSessionsInput, StopUpdateWithoutDestinationSessionsInput>, StopUncheckedUpdateWithoutDestinationSessionsInput>
  }

  export type TicketUpdateOneWithoutSessionNestedInput = {
    create?: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutSessionInput
    upsert?: TicketUpsertWithoutSessionInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutSessionInput, TicketUpdateWithoutSessionInput>, TicketUncheckedUpdateWithoutSessionInput>
  }

  export type TicketUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutSessionInput
    upsert?: TicketUpsertWithoutSessionInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutSessionInput, TicketUpdateWithoutSessionInput>, TicketUncheckedUpdateWithoutSessionInput>
  }

  export type TravelSessionCreateNestedOneWithoutTicketInput = {
    create?: XOR<TravelSessionCreateWithoutTicketInput, TravelSessionUncheckedCreateWithoutTicketInput>
    connectOrCreate?: TravelSessionCreateOrConnectWithoutTicketInput
    connect?: TravelSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTravelerTicketsInput = {
    create?: XOR<UserCreateWithoutTravelerTicketsInput, UserUncheckedCreateWithoutTravelerTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelerTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConductedTicketsInput = {
    create?: XOR<UserCreateWithoutConductedTicketsInput, UserUncheckedCreateWithoutConductedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConductedTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type BusCreateNestedOneWithoutTicketsInput = {
    create?: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTicketsInput
    connect?: BusWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVerifiedTicketsInput = {
    create?: XOR<UserCreateWithoutVerifiedTicketsInput, UserUncheckedCreateWithoutVerifiedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type VerificationLogCreateNestedManyWithoutTicketInput = {
    create?: XOR<VerificationLogCreateWithoutTicketInput, VerificationLogUncheckedCreateWithoutTicketInput> | VerificationLogCreateWithoutTicketInput[] | VerificationLogUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: VerificationLogCreateOrConnectWithoutTicketInput | VerificationLogCreateOrConnectWithoutTicketInput[]
    createMany?: VerificationLogCreateManyTicketInputEnvelope
    connect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
  }

  export type VerificationLogUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<VerificationLogCreateWithoutTicketInput, VerificationLogUncheckedCreateWithoutTicketInput> | VerificationLogCreateWithoutTicketInput[] | VerificationLogUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: VerificationLogCreateOrConnectWithoutTicketInput | VerificationLogCreateOrConnectWithoutTicketInput[]
    createMany?: VerificationLogCreateManyTicketInputEnvelope
    connect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TravelSessionUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<TravelSessionCreateWithoutTicketInput, TravelSessionUncheckedCreateWithoutTicketInput>
    connectOrCreate?: TravelSessionCreateOrConnectWithoutTicketInput
    upsert?: TravelSessionUpsertWithoutTicketInput
    connect?: TravelSessionWhereUniqueInput
    update?: XOR<XOR<TravelSessionUpdateToOneWithWhereWithoutTicketInput, TravelSessionUpdateWithoutTicketInput>, TravelSessionUncheckedUpdateWithoutTicketInput>
  }

  export type UserUpdateOneRequiredWithoutTravelerTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTravelerTicketsInput, UserUncheckedCreateWithoutTravelerTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelerTicketsInput
    upsert?: UserUpsertWithoutTravelerTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTravelerTicketsInput, UserUpdateWithoutTravelerTicketsInput>, UserUncheckedUpdateWithoutTravelerTicketsInput>
  }

  export type UserUpdateOneRequiredWithoutConductedTicketsNestedInput = {
    create?: XOR<UserCreateWithoutConductedTicketsInput, UserUncheckedCreateWithoutConductedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConductedTicketsInput
    upsert?: UserUpsertWithoutConductedTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConductedTicketsInput, UserUpdateWithoutConductedTicketsInput>, UserUncheckedUpdateWithoutConductedTicketsInput>
  }

  export type BusUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTicketsInput
    upsert?: BusUpsertWithoutTicketsInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutTicketsInput, BusUpdateWithoutTicketsInput>, BusUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneWithoutVerifiedTicketsNestedInput = {
    create?: XOR<UserCreateWithoutVerifiedTicketsInput, UserUncheckedCreateWithoutVerifiedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedTicketsInput
    upsert?: UserUpsertWithoutVerifiedTicketsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerifiedTicketsInput, UserUpdateWithoutVerifiedTicketsInput>, UserUncheckedUpdateWithoutVerifiedTicketsInput>
  }

  export type VerificationLogUpdateManyWithoutTicketNestedInput = {
    create?: XOR<VerificationLogCreateWithoutTicketInput, VerificationLogUncheckedCreateWithoutTicketInput> | VerificationLogCreateWithoutTicketInput[] | VerificationLogUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: VerificationLogCreateOrConnectWithoutTicketInput | VerificationLogCreateOrConnectWithoutTicketInput[]
    upsert?: VerificationLogUpsertWithWhereUniqueWithoutTicketInput | VerificationLogUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: VerificationLogCreateManyTicketInputEnvelope
    set?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    disconnect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    delete?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    connect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    update?: VerificationLogUpdateWithWhereUniqueWithoutTicketInput | VerificationLogUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: VerificationLogUpdateManyWithWhereWithoutTicketInput | VerificationLogUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: VerificationLogScalarWhereInput | VerificationLogScalarWhereInput[]
  }

  export type VerificationLogUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<VerificationLogCreateWithoutTicketInput, VerificationLogUncheckedCreateWithoutTicketInput> | VerificationLogCreateWithoutTicketInput[] | VerificationLogUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: VerificationLogCreateOrConnectWithoutTicketInput | VerificationLogCreateOrConnectWithoutTicketInput[]
    upsert?: VerificationLogUpsertWithWhereUniqueWithoutTicketInput | VerificationLogUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: VerificationLogCreateManyTicketInputEnvelope
    set?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    disconnect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    delete?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    connect?: VerificationLogWhereUniqueInput | VerificationLogWhereUniqueInput[]
    update?: VerificationLogUpdateWithWhereUniqueWithoutTicketInput | VerificationLogUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: VerificationLogUpdateManyWithWhereWithoutTicketInput | VerificationLogUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: VerificationLogScalarWhereInput | VerificationLogScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutVerificationLogsInput = {
    create?: XOR<TicketCreateWithoutVerificationLogsInput, TicketUncheckedCreateWithoutVerificationLogsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutVerificationLogsInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVerificationLogsInput = {
    create?: XOR<UserCreateWithoutVerificationLogsInput, UserUncheckedCreateWithoutVerificationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumVerificationResultFieldUpdateOperationsInput = {
    set?: $Enums.VerificationResult
  }

  export type TicketUpdateOneRequiredWithoutVerificationLogsNestedInput = {
    create?: XOR<TicketCreateWithoutVerificationLogsInput, TicketUncheckedCreateWithoutVerificationLogsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutVerificationLogsInput
    upsert?: TicketUpsertWithoutVerificationLogsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutVerificationLogsInput, TicketUpdateWithoutVerificationLogsInput>, TicketUncheckedUpdateWithoutVerificationLogsInput>
  }

  export type UserUpdateOneRequiredWithoutVerificationLogsNestedInput = {
    create?: XOR<UserCreateWithoutVerificationLogsInput, UserUncheckedCreateWithoutVerificationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationLogsInput
    upsert?: UserUpsertWithoutVerificationLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationLogsInput, UserUpdateWithoutVerificationLogsInput>, UserUncheckedUpdateWithoutVerificationLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumVerificationResultFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationResult | EnumVerificationResultFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationResult[] | ListEnumVerificationResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationResult[] | ListEnumVerificationResultFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationResultFilter<$PrismaModel> | $Enums.VerificationResult
  }

  export type NestedEnumVerificationResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationResult | EnumVerificationResultFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationResult[] | ListEnumVerificationResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationResult[] | ListEnumVerificationResultFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationResultWithAggregatesFilter<$PrismaModel> | $Enums.VerificationResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationResultFilter<$PrismaModel>
    _max?: NestedEnumVerificationResultFilter<$PrismaModel>
  }

  export type TravelSessionCreateWithoutTravelerInput = {
    id?: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
    bus: BusCreateNestedOneWithoutSessionsInput
    boardingStop: StopCreateNestedOneWithoutBoardingSessionsInput
    destinationStop: StopCreateNestedOneWithoutDestinationSessionsInput
    ticket?: TicketCreateNestedOneWithoutSessionInput
  }

  export type TravelSessionUncheckedCreateWithoutTravelerInput = {
    id?: string
    busId: string
    boardingStopId: string
    destinationStopId: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
    ticket?: TicketUncheckedCreateNestedOneWithoutSessionInput
  }

  export type TravelSessionCreateOrConnectWithoutTravelerInput = {
    where: TravelSessionWhereUniqueInput
    create: XOR<TravelSessionCreateWithoutTravelerInput, TravelSessionUncheckedCreateWithoutTravelerInput>
  }

  export type TravelSessionCreateManyTravelerInputEnvelope = {
    data: TravelSessionCreateManyTravelerInput | TravelSessionCreateManyTravelerInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutTravelerInput = {
    id?: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    issuedAt?: Date | string
    session: TravelSessionCreateNestedOneWithoutTicketInput
    conductor: UserCreateNestedOneWithoutConductedTicketsInput
    bus: BusCreateNestedOneWithoutTicketsInput
    supervisor?: UserCreateNestedOneWithoutVerifiedTicketsInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTravelerInput = {
    id?: string
    sessionId: string
    conductorId: string
    busId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    issuedAt?: Date | string
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTravelerInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTravelerInput, TicketUncheckedCreateWithoutTravelerInput>
  }

  export type TicketCreateManyTravelerInputEnvelope = {
    data: TicketCreateManyTravelerInput | TicketCreateManyTravelerInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutConductorInput = {
    id?: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    issuedAt?: Date | string
    session: TravelSessionCreateNestedOneWithoutTicketInput
    traveler: UserCreateNestedOneWithoutTravelerTicketsInput
    bus: BusCreateNestedOneWithoutTicketsInput
    supervisor?: UserCreateNestedOneWithoutVerifiedTicketsInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutConductorInput = {
    id?: string
    sessionId: string
    travelerId: string
    busId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    issuedAt?: Date | string
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutConductorInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutConductorInput, TicketUncheckedCreateWithoutConductorInput>
  }

  export type TicketCreateManyConductorInputEnvelope = {
    data: TicketCreateManyConductorInput | TicketCreateManyConductorInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutSupervisorInput = {
    id?: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    issuedAt?: Date | string
    session: TravelSessionCreateNestedOneWithoutTicketInput
    traveler: UserCreateNestedOneWithoutTravelerTicketsInput
    conductor: UserCreateNestedOneWithoutConductedTicketsInput
    bus: BusCreateNestedOneWithoutTicketsInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutSupervisorInput = {
    id?: string
    sessionId: string
    travelerId: string
    conductorId: string
    busId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    issuedAt?: Date | string
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutSupervisorInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutSupervisorInput, TicketUncheckedCreateWithoutSupervisorInput>
  }

  export type TicketCreateManySupervisorInputEnvelope = {
    data: TicketCreateManySupervisorInput | TicketCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type VerificationLogCreateWithoutSupervisorInput = {
    id?: string
    scannedAt?: Date | string
    result: $Enums.VerificationResult
    ticket: TicketCreateNestedOneWithoutVerificationLogsInput
  }

  export type VerificationLogUncheckedCreateWithoutSupervisorInput = {
    id?: string
    ticketId: string
    scannedAt?: Date | string
    result: $Enums.VerificationResult
  }

  export type VerificationLogCreateOrConnectWithoutSupervisorInput = {
    where: VerificationLogWhereUniqueInput
    create: XOR<VerificationLogCreateWithoutSupervisorInput, VerificationLogUncheckedCreateWithoutSupervisorInput>
  }

  export type VerificationLogCreateManySupervisorInputEnvelope = {
    data: VerificationLogCreateManySupervisorInput | VerificationLogCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type BusCreateWithoutConductorInput = {
    id?: string
    busNumber: string
    isActive?: boolean
    createdAt?: Date | string
    route: RouteCreateNestedOneWithoutBusesInput
    sessions?: TravelSessionCreateNestedManyWithoutBusInput
    tickets?: TicketCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutConductorInput = {
    id?: string
    busNumber: string
    routeId: string
    isActive?: boolean
    createdAt?: Date | string
    sessions?: TravelSessionUncheckedCreateNestedManyWithoutBusInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutConductorInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput>
  }

  export type BusCreateManyConductorInputEnvelope = {
    data: BusCreateManyConductorInput | BusCreateManyConductorInput[]
    skipDuplicates?: boolean
  }

  export type TravelSessionUpsertWithWhereUniqueWithoutTravelerInput = {
    where: TravelSessionWhereUniqueInput
    update: XOR<TravelSessionUpdateWithoutTravelerInput, TravelSessionUncheckedUpdateWithoutTravelerInput>
    create: XOR<TravelSessionCreateWithoutTravelerInput, TravelSessionUncheckedCreateWithoutTravelerInput>
  }

  export type TravelSessionUpdateWithWhereUniqueWithoutTravelerInput = {
    where: TravelSessionWhereUniqueInput
    data: XOR<TravelSessionUpdateWithoutTravelerInput, TravelSessionUncheckedUpdateWithoutTravelerInput>
  }

  export type TravelSessionUpdateManyWithWhereWithoutTravelerInput = {
    where: TravelSessionScalarWhereInput
    data: XOR<TravelSessionUpdateManyMutationInput, TravelSessionUncheckedUpdateManyWithoutTravelerInput>
  }

  export type TravelSessionScalarWhereInput = {
    AND?: TravelSessionScalarWhereInput | TravelSessionScalarWhereInput[]
    OR?: TravelSessionScalarWhereInput[]
    NOT?: TravelSessionScalarWhereInput | TravelSessionScalarWhereInput[]
    id?: StringFilter<"TravelSession"> | string
    travelerId?: StringFilter<"TravelSession"> | string
    busId?: StringFilter<"TravelSession"> | string
    boardingStopId?: StringFilter<"TravelSession"> | string
    destinationStopId?: StringFilter<"TravelSession"> | string
    status?: EnumSessionStatusFilter<"TravelSession"> | $Enums.SessionStatus
    tempQRCode?: StringFilter<"TravelSession"> | string
    qrExpiresAt?: DateTimeFilter<"TravelSession"> | Date | string
    createdAt?: DateTimeFilter<"TravelSession"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutTravelerInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutTravelerInput, TicketUncheckedUpdateWithoutTravelerInput>
    create: XOR<TicketCreateWithoutTravelerInput, TicketUncheckedCreateWithoutTravelerInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutTravelerInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutTravelerInput, TicketUncheckedUpdateWithoutTravelerInput>
  }

  export type TicketUpdateManyWithWhereWithoutTravelerInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTravelerInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    sessionId?: StringFilter<"Ticket"> | string
    travelerId?: StringFilter<"Ticket"> | string
    conductorId?: StringFilter<"Ticket"> | string
    busId?: StringFilter<"Ticket"> | string
    boardingStop?: StringFilter<"Ticket"> | string
    destinationStop?: StringFilter<"Ticket"> | string
    fare?: FloatFilter<"Ticket"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Ticket"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"Ticket"> | $Enums.PaymentStatus
    razorpayOrderId?: StringNullableFilter<"Ticket"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Ticket"> | string | null
    signedQRCode?: StringFilter<"Ticket"> | string
    isVerified?: BoolFilter<"Ticket"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    verifiedBy?: StringNullableFilter<"Ticket"> | string | null
    issuedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutConductorInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutConductorInput, TicketUncheckedUpdateWithoutConductorInput>
    create: XOR<TicketCreateWithoutConductorInput, TicketUncheckedCreateWithoutConductorInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutConductorInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutConductorInput, TicketUncheckedUpdateWithoutConductorInput>
  }

  export type TicketUpdateManyWithWhereWithoutConductorInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutConductorInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutSupervisorInput, TicketUncheckedUpdateWithoutSupervisorInput>
    create: XOR<TicketCreateWithoutSupervisorInput, TicketUncheckedCreateWithoutSupervisorInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutSupervisorInput, TicketUncheckedUpdateWithoutSupervisorInput>
  }

  export type TicketUpdateManyWithWhereWithoutSupervisorInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type VerificationLogUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: VerificationLogWhereUniqueInput
    update: XOR<VerificationLogUpdateWithoutSupervisorInput, VerificationLogUncheckedUpdateWithoutSupervisorInput>
    create: XOR<VerificationLogCreateWithoutSupervisorInput, VerificationLogUncheckedCreateWithoutSupervisorInput>
  }

  export type VerificationLogUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: VerificationLogWhereUniqueInput
    data: XOR<VerificationLogUpdateWithoutSupervisorInput, VerificationLogUncheckedUpdateWithoutSupervisorInput>
  }

  export type VerificationLogUpdateManyWithWhereWithoutSupervisorInput = {
    where: VerificationLogScalarWhereInput
    data: XOR<VerificationLogUpdateManyMutationInput, VerificationLogUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type VerificationLogScalarWhereInput = {
    AND?: VerificationLogScalarWhereInput | VerificationLogScalarWhereInput[]
    OR?: VerificationLogScalarWhereInput[]
    NOT?: VerificationLogScalarWhereInput | VerificationLogScalarWhereInput[]
    id?: StringFilter<"VerificationLog"> | string
    ticketId?: StringFilter<"VerificationLog"> | string
    supervisorId?: StringFilter<"VerificationLog"> | string
    scannedAt?: DateTimeFilter<"VerificationLog"> | Date | string
    result?: EnumVerificationResultFilter<"VerificationLog"> | $Enums.VerificationResult
  }

  export type BusUpsertWithWhereUniqueWithoutConductorInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutConductorInput, BusUncheckedUpdateWithoutConductorInput>
    create: XOR<BusCreateWithoutConductorInput, BusUncheckedCreateWithoutConductorInput>
  }

  export type BusUpdateWithWhereUniqueWithoutConductorInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutConductorInput, BusUncheckedUpdateWithoutConductorInput>
  }

  export type BusUpdateManyWithWhereWithoutConductorInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutConductorInput>
  }

  export type BusScalarWhereInput = {
    AND?: BusScalarWhereInput | BusScalarWhereInput[]
    OR?: BusScalarWhereInput[]
    NOT?: BusScalarWhereInput | BusScalarWhereInput[]
    id?: StringFilter<"Bus"> | string
    busNumber?: StringFilter<"Bus"> | string
    routeId?: StringFilter<"Bus"> | string
    conductorId?: StringNullableFilter<"Bus"> | string | null
    isActive?: BoolFilter<"Bus"> | boolean
    createdAt?: DateTimeFilter<"Bus"> | Date | string
  }

  export type StopCreateWithoutRouteInput = {
    id?: string
    stopName: string
    stopOrder: number
    distanceFromStart: number
    boardingSessions?: TravelSessionCreateNestedManyWithoutBoardingStopInput
    destinationSessions?: TravelSessionCreateNestedManyWithoutDestinationStopInput
  }

  export type StopUncheckedCreateWithoutRouteInput = {
    id?: string
    stopName: string
    stopOrder: number
    distanceFromStart: number
    boardingSessions?: TravelSessionUncheckedCreateNestedManyWithoutBoardingStopInput
    destinationSessions?: TravelSessionUncheckedCreateNestedManyWithoutDestinationStopInput
  }

  export type StopCreateOrConnectWithoutRouteInput = {
    where: StopWhereUniqueInput
    create: XOR<StopCreateWithoutRouteInput, StopUncheckedCreateWithoutRouteInput>
  }

  export type StopCreateManyRouteInputEnvelope = {
    data: StopCreateManyRouteInput | StopCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type FareCreateWithoutRouteInput = {
    id?: string
    fromStopOrder: number
    toStopOrder: number
    amount: number
  }

  export type FareUncheckedCreateWithoutRouteInput = {
    id?: string
    fromStopOrder: number
    toStopOrder: number
    amount: number
  }

  export type FareCreateOrConnectWithoutRouteInput = {
    where: FareWhereUniqueInput
    create: XOR<FareCreateWithoutRouteInput, FareUncheckedCreateWithoutRouteInput>
  }

  export type FareCreateManyRouteInputEnvelope = {
    data: FareCreateManyRouteInput | FareCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type BusCreateWithoutRouteInput = {
    id?: string
    busNumber: string
    isActive?: boolean
    createdAt?: Date | string
    conductor?: UserCreateNestedOneWithoutBusesInput
    sessions?: TravelSessionCreateNestedManyWithoutBusInput
    tickets?: TicketCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutRouteInput = {
    id?: string
    busNumber: string
    conductorId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    sessions?: TravelSessionUncheckedCreateNestedManyWithoutBusInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutRouteInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput>
  }

  export type BusCreateManyRouteInputEnvelope = {
    data: BusCreateManyRouteInput | BusCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type StopUpsertWithWhereUniqueWithoutRouteInput = {
    where: StopWhereUniqueInput
    update: XOR<StopUpdateWithoutRouteInput, StopUncheckedUpdateWithoutRouteInput>
    create: XOR<StopCreateWithoutRouteInput, StopUncheckedCreateWithoutRouteInput>
  }

  export type StopUpdateWithWhereUniqueWithoutRouteInput = {
    where: StopWhereUniqueInput
    data: XOR<StopUpdateWithoutRouteInput, StopUncheckedUpdateWithoutRouteInput>
  }

  export type StopUpdateManyWithWhereWithoutRouteInput = {
    where: StopScalarWhereInput
    data: XOR<StopUpdateManyMutationInput, StopUncheckedUpdateManyWithoutRouteInput>
  }

  export type StopScalarWhereInput = {
    AND?: StopScalarWhereInput | StopScalarWhereInput[]
    OR?: StopScalarWhereInput[]
    NOT?: StopScalarWhereInput | StopScalarWhereInput[]
    id?: StringFilter<"Stop"> | string
    routeId?: StringFilter<"Stop"> | string
    stopName?: StringFilter<"Stop"> | string
    stopOrder?: IntFilter<"Stop"> | number
    distanceFromStart?: FloatFilter<"Stop"> | number
  }

  export type FareUpsertWithWhereUniqueWithoutRouteInput = {
    where: FareWhereUniqueInput
    update: XOR<FareUpdateWithoutRouteInput, FareUncheckedUpdateWithoutRouteInput>
    create: XOR<FareCreateWithoutRouteInput, FareUncheckedCreateWithoutRouteInput>
  }

  export type FareUpdateWithWhereUniqueWithoutRouteInput = {
    where: FareWhereUniqueInput
    data: XOR<FareUpdateWithoutRouteInput, FareUncheckedUpdateWithoutRouteInput>
  }

  export type FareUpdateManyWithWhereWithoutRouteInput = {
    where: FareScalarWhereInput
    data: XOR<FareUpdateManyMutationInput, FareUncheckedUpdateManyWithoutRouteInput>
  }

  export type FareScalarWhereInput = {
    AND?: FareScalarWhereInput | FareScalarWhereInput[]
    OR?: FareScalarWhereInput[]
    NOT?: FareScalarWhereInput | FareScalarWhereInput[]
    id?: StringFilter<"Fare"> | string
    routeId?: StringFilter<"Fare"> | string
    fromStopOrder?: IntFilter<"Fare"> | number
    toStopOrder?: IntFilter<"Fare"> | number
    amount?: FloatFilter<"Fare"> | number
  }

  export type BusUpsertWithWhereUniqueWithoutRouteInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutRouteInput, BusUncheckedUpdateWithoutRouteInput>
    create: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput>
  }

  export type BusUpdateWithWhereUniqueWithoutRouteInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutRouteInput, BusUncheckedUpdateWithoutRouteInput>
  }

  export type BusUpdateManyWithWhereWithoutRouteInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteCreateWithoutStopsInput = {
    id?: string
    routeName: string
    totalStops: number
    createdAt?: Date | string
    fares?: FareCreateNestedManyWithoutRouteInput
    buses?: BusCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutStopsInput = {
    id?: string
    routeName: string
    totalStops: number
    createdAt?: Date | string
    fares?: FareUncheckedCreateNestedManyWithoutRouteInput
    buses?: BusUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutStopsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutStopsInput, RouteUncheckedCreateWithoutStopsInput>
  }

  export type TravelSessionCreateWithoutBoardingStopInput = {
    id?: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
    traveler: UserCreateNestedOneWithoutTravelSessionsInput
    bus: BusCreateNestedOneWithoutSessionsInput
    destinationStop: StopCreateNestedOneWithoutDestinationSessionsInput
    ticket?: TicketCreateNestedOneWithoutSessionInput
  }

  export type TravelSessionUncheckedCreateWithoutBoardingStopInput = {
    id?: string
    travelerId: string
    busId: string
    destinationStopId: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
    ticket?: TicketUncheckedCreateNestedOneWithoutSessionInput
  }

  export type TravelSessionCreateOrConnectWithoutBoardingStopInput = {
    where: TravelSessionWhereUniqueInput
    create: XOR<TravelSessionCreateWithoutBoardingStopInput, TravelSessionUncheckedCreateWithoutBoardingStopInput>
  }

  export type TravelSessionCreateManyBoardingStopInputEnvelope = {
    data: TravelSessionCreateManyBoardingStopInput | TravelSessionCreateManyBoardingStopInput[]
    skipDuplicates?: boolean
  }

  export type TravelSessionCreateWithoutDestinationStopInput = {
    id?: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
    traveler: UserCreateNestedOneWithoutTravelSessionsInput
    bus: BusCreateNestedOneWithoutSessionsInput
    boardingStop: StopCreateNestedOneWithoutBoardingSessionsInput
    ticket?: TicketCreateNestedOneWithoutSessionInput
  }

  export type TravelSessionUncheckedCreateWithoutDestinationStopInput = {
    id?: string
    travelerId: string
    busId: string
    boardingStopId: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
    ticket?: TicketUncheckedCreateNestedOneWithoutSessionInput
  }

  export type TravelSessionCreateOrConnectWithoutDestinationStopInput = {
    where: TravelSessionWhereUniqueInput
    create: XOR<TravelSessionCreateWithoutDestinationStopInput, TravelSessionUncheckedCreateWithoutDestinationStopInput>
  }

  export type TravelSessionCreateManyDestinationStopInputEnvelope = {
    data: TravelSessionCreateManyDestinationStopInput | TravelSessionCreateManyDestinationStopInput[]
    skipDuplicates?: boolean
  }

  export type RouteUpsertWithoutStopsInput = {
    update: XOR<RouteUpdateWithoutStopsInput, RouteUncheckedUpdateWithoutStopsInput>
    create: XOR<RouteCreateWithoutStopsInput, RouteUncheckedCreateWithoutStopsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutStopsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutStopsInput, RouteUncheckedUpdateWithoutStopsInput>
  }

  export type RouteUpdateWithoutStopsInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    totalStops?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fares?: FareUpdateManyWithoutRouteNestedInput
    buses?: BusUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutStopsInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    totalStops?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fares?: FareUncheckedUpdateManyWithoutRouteNestedInput
    buses?: BusUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type TravelSessionUpsertWithWhereUniqueWithoutBoardingStopInput = {
    where: TravelSessionWhereUniqueInput
    update: XOR<TravelSessionUpdateWithoutBoardingStopInput, TravelSessionUncheckedUpdateWithoutBoardingStopInput>
    create: XOR<TravelSessionCreateWithoutBoardingStopInput, TravelSessionUncheckedCreateWithoutBoardingStopInput>
  }

  export type TravelSessionUpdateWithWhereUniqueWithoutBoardingStopInput = {
    where: TravelSessionWhereUniqueInput
    data: XOR<TravelSessionUpdateWithoutBoardingStopInput, TravelSessionUncheckedUpdateWithoutBoardingStopInput>
  }

  export type TravelSessionUpdateManyWithWhereWithoutBoardingStopInput = {
    where: TravelSessionScalarWhereInput
    data: XOR<TravelSessionUpdateManyMutationInput, TravelSessionUncheckedUpdateManyWithoutBoardingStopInput>
  }

  export type TravelSessionUpsertWithWhereUniqueWithoutDestinationStopInput = {
    where: TravelSessionWhereUniqueInput
    update: XOR<TravelSessionUpdateWithoutDestinationStopInput, TravelSessionUncheckedUpdateWithoutDestinationStopInput>
    create: XOR<TravelSessionCreateWithoutDestinationStopInput, TravelSessionUncheckedCreateWithoutDestinationStopInput>
  }

  export type TravelSessionUpdateWithWhereUniqueWithoutDestinationStopInput = {
    where: TravelSessionWhereUniqueInput
    data: XOR<TravelSessionUpdateWithoutDestinationStopInput, TravelSessionUncheckedUpdateWithoutDestinationStopInput>
  }

  export type TravelSessionUpdateManyWithWhereWithoutDestinationStopInput = {
    where: TravelSessionScalarWhereInput
    data: XOR<TravelSessionUpdateManyMutationInput, TravelSessionUncheckedUpdateManyWithoutDestinationStopInput>
  }

  export type RouteCreateWithoutFaresInput = {
    id?: string
    routeName: string
    totalStops: number
    createdAt?: Date | string
    stops?: StopCreateNestedManyWithoutRouteInput
    buses?: BusCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutFaresInput = {
    id?: string
    routeName: string
    totalStops: number
    createdAt?: Date | string
    stops?: StopUncheckedCreateNestedManyWithoutRouteInput
    buses?: BusUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutFaresInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutFaresInput, RouteUncheckedCreateWithoutFaresInput>
  }

  export type RouteUpsertWithoutFaresInput = {
    update: XOR<RouteUpdateWithoutFaresInput, RouteUncheckedUpdateWithoutFaresInput>
    create: XOR<RouteCreateWithoutFaresInput, RouteUncheckedCreateWithoutFaresInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutFaresInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutFaresInput, RouteUncheckedUpdateWithoutFaresInput>
  }

  export type RouteUpdateWithoutFaresInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    totalStops?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stops?: StopUpdateManyWithoutRouteNestedInput
    buses?: BusUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutFaresInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    totalStops?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stops?: StopUncheckedUpdateManyWithoutRouteNestedInput
    buses?: BusUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateWithoutBusesInput = {
    id?: string
    routeName: string
    totalStops: number
    createdAt?: Date | string
    stops?: StopCreateNestedManyWithoutRouteInput
    fares?: FareCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutBusesInput = {
    id?: string
    routeName: string
    totalStops: number
    createdAt?: Date | string
    stops?: StopUncheckedCreateNestedManyWithoutRouteInput
    fares?: FareUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutBusesInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
  }

  export type UserCreateWithoutBusesInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionCreateNestedManyWithoutTravelerInput
    travelerTickets?: TicketCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketCreateNestedManyWithoutConductorInput
    verifiedTickets?: TicketCreateNestedManyWithoutSupervisorInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutSupervisorInput
  }

  export type UserUncheckedCreateWithoutBusesInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionUncheckedCreateNestedManyWithoutTravelerInput
    travelerTickets?: TicketUncheckedCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketUncheckedCreateNestedManyWithoutConductorInput
    verifiedTickets?: TicketUncheckedCreateNestedManyWithoutSupervisorInput
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UserCreateOrConnectWithoutBusesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusesInput, UserUncheckedCreateWithoutBusesInput>
  }

  export type TravelSessionCreateWithoutBusInput = {
    id?: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
    traveler: UserCreateNestedOneWithoutTravelSessionsInput
    boardingStop: StopCreateNestedOneWithoutBoardingSessionsInput
    destinationStop: StopCreateNestedOneWithoutDestinationSessionsInput
    ticket?: TicketCreateNestedOneWithoutSessionInput
  }

  export type TravelSessionUncheckedCreateWithoutBusInput = {
    id?: string
    travelerId: string
    boardingStopId: string
    destinationStopId: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
    ticket?: TicketUncheckedCreateNestedOneWithoutSessionInput
  }

  export type TravelSessionCreateOrConnectWithoutBusInput = {
    where: TravelSessionWhereUniqueInput
    create: XOR<TravelSessionCreateWithoutBusInput, TravelSessionUncheckedCreateWithoutBusInput>
  }

  export type TravelSessionCreateManyBusInputEnvelope = {
    data: TravelSessionCreateManyBusInput | TravelSessionCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutBusInput = {
    id?: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    issuedAt?: Date | string
    session: TravelSessionCreateNestedOneWithoutTicketInput
    traveler: UserCreateNestedOneWithoutTravelerTicketsInput
    conductor: UserCreateNestedOneWithoutConductedTicketsInput
    supervisor?: UserCreateNestedOneWithoutVerifiedTicketsInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutBusInput = {
    id?: string
    sessionId: string
    travelerId: string
    conductorId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    issuedAt?: Date | string
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutBusInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput>
  }

  export type TicketCreateManyBusInputEnvelope = {
    data: TicketCreateManyBusInput | TicketCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type RouteUpsertWithoutBusesInput = {
    update: XOR<RouteUpdateWithoutBusesInput, RouteUncheckedUpdateWithoutBusesInput>
    create: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutBusesInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutBusesInput, RouteUncheckedUpdateWithoutBusesInput>
  }

  export type RouteUpdateWithoutBusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    totalStops?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stops?: StopUpdateManyWithoutRouteNestedInput
    fares?: FareUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutBusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    totalStops?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stops?: StopUncheckedUpdateManyWithoutRouteNestedInput
    fares?: FareUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type UserUpsertWithoutBusesInput = {
    update: XOR<UserUpdateWithoutBusesInput, UserUncheckedUpdateWithoutBusesInput>
    create: XOR<UserCreateWithoutBusesInput, UserUncheckedCreateWithoutBusesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusesInput, UserUncheckedUpdateWithoutBusesInput>
  }

  export type UserUpdateWithoutBusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUpdateManyWithoutTravelerNestedInput
    travelerTickets?: TicketUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUpdateManyWithoutConductorNestedInput
    verifiedTickets?: TicketUpdateManyWithoutSupervisorNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutSupervisorNestedInput
  }

  export type UserUncheckedUpdateWithoutBusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUncheckedUpdateManyWithoutTravelerNestedInput
    travelerTickets?: TicketUncheckedUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUncheckedUpdateManyWithoutConductorNestedInput
    verifiedTickets?: TicketUncheckedUpdateManyWithoutSupervisorNestedInput
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type TravelSessionUpsertWithWhereUniqueWithoutBusInput = {
    where: TravelSessionWhereUniqueInput
    update: XOR<TravelSessionUpdateWithoutBusInput, TravelSessionUncheckedUpdateWithoutBusInput>
    create: XOR<TravelSessionCreateWithoutBusInput, TravelSessionUncheckedCreateWithoutBusInput>
  }

  export type TravelSessionUpdateWithWhereUniqueWithoutBusInput = {
    where: TravelSessionWhereUniqueInput
    data: XOR<TravelSessionUpdateWithoutBusInput, TravelSessionUncheckedUpdateWithoutBusInput>
  }

  export type TravelSessionUpdateManyWithWhereWithoutBusInput = {
    where: TravelSessionScalarWhereInput
    data: XOR<TravelSessionUpdateManyMutationInput, TravelSessionUncheckedUpdateManyWithoutBusInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutBusInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutBusInput, TicketUncheckedUpdateWithoutBusInput>
    create: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutBusInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutBusInput, TicketUncheckedUpdateWithoutBusInput>
  }

  export type TicketUpdateManyWithWhereWithoutBusInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutBusInput>
  }

  export type UserCreateWithoutTravelSessionsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelerTickets?: TicketCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketCreateNestedManyWithoutConductorInput
    verifiedTickets?: TicketCreateNestedManyWithoutSupervisorInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutSupervisorInput
    buses?: BusCreateNestedManyWithoutConductorInput
  }

  export type UserUncheckedCreateWithoutTravelSessionsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelerTickets?: TicketUncheckedCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketUncheckedCreateNestedManyWithoutConductorInput
    verifiedTickets?: TicketUncheckedCreateNestedManyWithoutSupervisorInput
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutSupervisorInput
    buses?: BusUncheckedCreateNestedManyWithoutConductorInput
  }

  export type UserCreateOrConnectWithoutTravelSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTravelSessionsInput, UserUncheckedCreateWithoutTravelSessionsInput>
  }

  export type BusCreateWithoutSessionsInput = {
    id?: string
    busNumber: string
    isActive?: boolean
    createdAt?: Date | string
    route: RouteCreateNestedOneWithoutBusesInput
    conductor?: UserCreateNestedOneWithoutBusesInput
    tickets?: TicketCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutSessionsInput = {
    id?: string
    busNumber: string
    routeId: string
    conductorId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutSessionsInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutSessionsInput, BusUncheckedCreateWithoutSessionsInput>
  }

  export type StopCreateWithoutBoardingSessionsInput = {
    id?: string
    stopName: string
    stopOrder: number
    distanceFromStart: number
    route: RouteCreateNestedOneWithoutStopsInput
    destinationSessions?: TravelSessionCreateNestedManyWithoutDestinationStopInput
  }

  export type StopUncheckedCreateWithoutBoardingSessionsInput = {
    id?: string
    routeId: string
    stopName: string
    stopOrder: number
    distanceFromStart: number
    destinationSessions?: TravelSessionUncheckedCreateNestedManyWithoutDestinationStopInput
  }

  export type StopCreateOrConnectWithoutBoardingSessionsInput = {
    where: StopWhereUniqueInput
    create: XOR<StopCreateWithoutBoardingSessionsInput, StopUncheckedCreateWithoutBoardingSessionsInput>
  }

  export type StopCreateWithoutDestinationSessionsInput = {
    id?: string
    stopName: string
    stopOrder: number
    distanceFromStart: number
    route: RouteCreateNestedOneWithoutStopsInput
    boardingSessions?: TravelSessionCreateNestedManyWithoutBoardingStopInput
  }

  export type StopUncheckedCreateWithoutDestinationSessionsInput = {
    id?: string
    routeId: string
    stopName: string
    stopOrder: number
    distanceFromStart: number
    boardingSessions?: TravelSessionUncheckedCreateNestedManyWithoutBoardingStopInput
  }

  export type StopCreateOrConnectWithoutDestinationSessionsInput = {
    where: StopWhereUniqueInput
    create: XOR<StopCreateWithoutDestinationSessionsInput, StopUncheckedCreateWithoutDestinationSessionsInput>
  }

  export type TicketCreateWithoutSessionInput = {
    id?: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    issuedAt?: Date | string
    traveler: UserCreateNestedOneWithoutTravelerTicketsInput
    conductor: UserCreateNestedOneWithoutConductedTicketsInput
    bus: BusCreateNestedOneWithoutTicketsInput
    supervisor?: UserCreateNestedOneWithoutVerifiedTicketsInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutSessionInput = {
    id?: string
    travelerId: string
    conductorId: string
    busId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    issuedAt?: Date | string
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutSessionInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutTravelSessionsInput = {
    update: XOR<UserUpdateWithoutTravelSessionsInput, UserUncheckedUpdateWithoutTravelSessionsInput>
    create: XOR<UserCreateWithoutTravelSessionsInput, UserUncheckedCreateWithoutTravelSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTravelSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTravelSessionsInput, UserUncheckedUpdateWithoutTravelSessionsInput>
  }

  export type UserUpdateWithoutTravelSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelerTickets?: TicketUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUpdateManyWithoutConductorNestedInput
    verifiedTickets?: TicketUpdateManyWithoutSupervisorNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutSupervisorNestedInput
    buses?: BusUpdateManyWithoutConductorNestedInput
  }

  export type UserUncheckedUpdateWithoutTravelSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelerTickets?: TicketUncheckedUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUncheckedUpdateManyWithoutConductorNestedInput
    verifiedTickets?: TicketUncheckedUpdateManyWithoutSupervisorNestedInput
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutSupervisorNestedInput
    buses?: BusUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type BusUpsertWithoutSessionsInput = {
    update: XOR<BusUpdateWithoutSessionsInput, BusUncheckedUpdateWithoutSessionsInput>
    create: XOR<BusCreateWithoutSessionsInput, BusUncheckedCreateWithoutSessionsInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutSessionsInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutSessionsInput, BusUncheckedUpdateWithoutSessionsInput>
  }

  export type BusUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutBusesNestedInput
    conductor?: UserUpdateOneWithoutBusesNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    conductorId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
  }

  export type StopUpsertWithoutBoardingSessionsInput = {
    update: XOR<StopUpdateWithoutBoardingSessionsInput, StopUncheckedUpdateWithoutBoardingSessionsInput>
    create: XOR<StopCreateWithoutBoardingSessionsInput, StopUncheckedCreateWithoutBoardingSessionsInput>
    where?: StopWhereInput
  }

  export type StopUpdateToOneWithWhereWithoutBoardingSessionsInput = {
    where?: StopWhereInput
    data: XOR<StopUpdateWithoutBoardingSessionsInput, StopUncheckedUpdateWithoutBoardingSessionsInput>
  }

  export type StopUpdateWithoutBoardingSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    distanceFromStart?: FloatFieldUpdateOperationsInput | number
    route?: RouteUpdateOneRequiredWithoutStopsNestedInput
    destinationSessions?: TravelSessionUpdateManyWithoutDestinationStopNestedInput
  }

  export type StopUncheckedUpdateWithoutBoardingSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    distanceFromStart?: FloatFieldUpdateOperationsInput | number
    destinationSessions?: TravelSessionUncheckedUpdateManyWithoutDestinationStopNestedInput
  }

  export type StopUpsertWithoutDestinationSessionsInput = {
    update: XOR<StopUpdateWithoutDestinationSessionsInput, StopUncheckedUpdateWithoutDestinationSessionsInput>
    create: XOR<StopCreateWithoutDestinationSessionsInput, StopUncheckedCreateWithoutDestinationSessionsInput>
    where?: StopWhereInput
  }

  export type StopUpdateToOneWithWhereWithoutDestinationSessionsInput = {
    where?: StopWhereInput
    data: XOR<StopUpdateWithoutDestinationSessionsInput, StopUncheckedUpdateWithoutDestinationSessionsInput>
  }

  export type StopUpdateWithoutDestinationSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    distanceFromStart?: FloatFieldUpdateOperationsInput | number
    route?: RouteUpdateOneRequiredWithoutStopsNestedInput
    boardingSessions?: TravelSessionUpdateManyWithoutBoardingStopNestedInput
  }

  export type StopUncheckedUpdateWithoutDestinationSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    distanceFromStart?: FloatFieldUpdateOperationsInput | number
    boardingSessions?: TravelSessionUncheckedUpdateManyWithoutBoardingStopNestedInput
  }

  export type TicketUpsertWithoutSessionInput = {
    update: XOR<TicketUpdateWithoutSessionInput, TicketUncheckedUpdateWithoutSessionInput>
    create: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutSessionInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutSessionInput, TicketUncheckedUpdateWithoutSessionInput>
  }

  export type TicketUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traveler?: UserUpdateOneRequiredWithoutTravelerTicketsNestedInput
    conductor?: UserUpdateOneRequiredWithoutConductedTicketsNestedInput
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    supervisor?: UserUpdateOneWithoutVerifiedTicketsNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TravelSessionCreateWithoutTicketInput = {
    id?: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
    traveler: UserCreateNestedOneWithoutTravelSessionsInput
    bus: BusCreateNestedOneWithoutSessionsInput
    boardingStop: StopCreateNestedOneWithoutBoardingSessionsInput
    destinationStop: StopCreateNestedOneWithoutDestinationSessionsInput
  }

  export type TravelSessionUncheckedCreateWithoutTicketInput = {
    id?: string
    travelerId: string
    busId: string
    boardingStopId: string
    destinationStopId: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
  }

  export type TravelSessionCreateOrConnectWithoutTicketInput = {
    where: TravelSessionWhereUniqueInput
    create: XOR<TravelSessionCreateWithoutTicketInput, TravelSessionUncheckedCreateWithoutTicketInput>
  }

  export type UserCreateWithoutTravelerTicketsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketCreateNestedManyWithoutConductorInput
    verifiedTickets?: TicketCreateNestedManyWithoutSupervisorInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutSupervisorInput
    buses?: BusCreateNestedManyWithoutConductorInput
  }

  export type UserUncheckedCreateWithoutTravelerTicketsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionUncheckedCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketUncheckedCreateNestedManyWithoutConductorInput
    verifiedTickets?: TicketUncheckedCreateNestedManyWithoutSupervisorInput
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutSupervisorInput
    buses?: BusUncheckedCreateNestedManyWithoutConductorInput
  }

  export type UserCreateOrConnectWithoutTravelerTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTravelerTicketsInput, UserUncheckedCreateWithoutTravelerTicketsInput>
  }

  export type UserCreateWithoutConductedTicketsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionCreateNestedManyWithoutTravelerInput
    travelerTickets?: TicketCreateNestedManyWithoutTravelerInput
    verifiedTickets?: TicketCreateNestedManyWithoutSupervisorInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutSupervisorInput
    buses?: BusCreateNestedManyWithoutConductorInput
  }

  export type UserUncheckedCreateWithoutConductedTicketsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionUncheckedCreateNestedManyWithoutTravelerInput
    travelerTickets?: TicketUncheckedCreateNestedManyWithoutTravelerInput
    verifiedTickets?: TicketUncheckedCreateNestedManyWithoutSupervisorInput
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutSupervisorInput
    buses?: BusUncheckedCreateNestedManyWithoutConductorInput
  }

  export type UserCreateOrConnectWithoutConductedTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConductedTicketsInput, UserUncheckedCreateWithoutConductedTicketsInput>
  }

  export type BusCreateWithoutTicketsInput = {
    id?: string
    busNumber: string
    isActive?: boolean
    createdAt?: Date | string
    route: RouteCreateNestedOneWithoutBusesInput
    conductor?: UserCreateNestedOneWithoutBusesInput
    sessions?: TravelSessionCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutTicketsInput = {
    id?: string
    busNumber: string
    routeId: string
    conductorId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    sessions?: TravelSessionUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutTicketsInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutVerifiedTicketsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionCreateNestedManyWithoutTravelerInput
    travelerTickets?: TicketCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketCreateNestedManyWithoutConductorInput
    verificationLogs?: VerificationLogCreateNestedManyWithoutSupervisorInput
    buses?: BusCreateNestedManyWithoutConductorInput
  }

  export type UserUncheckedCreateWithoutVerifiedTicketsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionUncheckedCreateNestedManyWithoutTravelerInput
    travelerTickets?: TicketUncheckedCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketUncheckedCreateNestedManyWithoutConductorInput
    verificationLogs?: VerificationLogUncheckedCreateNestedManyWithoutSupervisorInput
    buses?: BusUncheckedCreateNestedManyWithoutConductorInput
  }

  export type UserCreateOrConnectWithoutVerifiedTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerifiedTicketsInput, UserUncheckedCreateWithoutVerifiedTicketsInput>
  }

  export type VerificationLogCreateWithoutTicketInput = {
    id?: string
    scannedAt?: Date | string
    result: $Enums.VerificationResult
    supervisor: UserCreateNestedOneWithoutVerificationLogsInput
  }

  export type VerificationLogUncheckedCreateWithoutTicketInput = {
    id?: string
    supervisorId: string
    scannedAt?: Date | string
    result: $Enums.VerificationResult
  }

  export type VerificationLogCreateOrConnectWithoutTicketInput = {
    where: VerificationLogWhereUniqueInput
    create: XOR<VerificationLogCreateWithoutTicketInput, VerificationLogUncheckedCreateWithoutTicketInput>
  }

  export type VerificationLogCreateManyTicketInputEnvelope = {
    data: VerificationLogCreateManyTicketInput | VerificationLogCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TravelSessionUpsertWithoutTicketInput = {
    update: XOR<TravelSessionUpdateWithoutTicketInput, TravelSessionUncheckedUpdateWithoutTicketInput>
    create: XOR<TravelSessionCreateWithoutTicketInput, TravelSessionUncheckedCreateWithoutTicketInput>
    where?: TravelSessionWhereInput
  }

  export type TravelSessionUpdateToOneWithWhereWithoutTicketInput = {
    where?: TravelSessionWhereInput
    data: XOR<TravelSessionUpdateWithoutTicketInput, TravelSessionUncheckedUpdateWithoutTicketInput>
  }

  export type TravelSessionUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traveler?: UserUpdateOneRequiredWithoutTravelSessionsNestedInput
    bus?: BusUpdateOneRequiredWithoutSessionsNestedInput
    boardingStop?: StopUpdateOneRequiredWithoutBoardingSessionsNestedInput
    destinationStop?: StopUpdateOneRequiredWithoutDestinationSessionsNestedInput
  }

  export type TravelSessionUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStopId?: StringFieldUpdateOperationsInput | string
    destinationStopId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTravelerTicketsInput = {
    update: XOR<UserUpdateWithoutTravelerTicketsInput, UserUncheckedUpdateWithoutTravelerTicketsInput>
    create: XOR<UserCreateWithoutTravelerTicketsInput, UserUncheckedCreateWithoutTravelerTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTravelerTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTravelerTicketsInput, UserUncheckedUpdateWithoutTravelerTicketsInput>
  }

  export type UserUpdateWithoutTravelerTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUpdateManyWithoutConductorNestedInput
    verifiedTickets?: TicketUpdateManyWithoutSupervisorNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutSupervisorNestedInput
    buses?: BusUpdateManyWithoutConductorNestedInput
  }

  export type UserUncheckedUpdateWithoutTravelerTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUncheckedUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUncheckedUpdateManyWithoutConductorNestedInput
    verifiedTickets?: TicketUncheckedUpdateManyWithoutSupervisorNestedInput
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutSupervisorNestedInput
    buses?: BusUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type UserUpsertWithoutConductedTicketsInput = {
    update: XOR<UserUpdateWithoutConductedTicketsInput, UserUncheckedUpdateWithoutConductedTicketsInput>
    create: XOR<UserCreateWithoutConductedTicketsInput, UserUncheckedCreateWithoutConductedTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConductedTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConductedTicketsInput, UserUncheckedUpdateWithoutConductedTicketsInput>
  }

  export type UserUpdateWithoutConductedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUpdateManyWithoutTravelerNestedInput
    travelerTickets?: TicketUpdateManyWithoutTravelerNestedInput
    verifiedTickets?: TicketUpdateManyWithoutSupervisorNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutSupervisorNestedInput
    buses?: BusUpdateManyWithoutConductorNestedInput
  }

  export type UserUncheckedUpdateWithoutConductedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUncheckedUpdateManyWithoutTravelerNestedInput
    travelerTickets?: TicketUncheckedUpdateManyWithoutTravelerNestedInput
    verifiedTickets?: TicketUncheckedUpdateManyWithoutSupervisorNestedInput
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutSupervisorNestedInput
    buses?: BusUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type BusUpsertWithoutTicketsInput = {
    update: XOR<BusUpdateWithoutTicketsInput, BusUncheckedUpdateWithoutTicketsInput>
    create: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutTicketsInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutTicketsInput, BusUncheckedUpdateWithoutTicketsInput>
  }

  export type BusUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutBusesNestedInput
    conductor?: UserUpdateOneWithoutBusesNestedInput
    sessions?: TravelSessionUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    conductorId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: TravelSessionUncheckedUpdateManyWithoutBusNestedInput
  }

  export type UserUpsertWithoutVerifiedTicketsInput = {
    update: XOR<UserUpdateWithoutVerifiedTicketsInput, UserUncheckedUpdateWithoutVerifiedTicketsInput>
    create: XOR<UserCreateWithoutVerifiedTicketsInput, UserUncheckedCreateWithoutVerifiedTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerifiedTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerifiedTicketsInput, UserUncheckedUpdateWithoutVerifiedTicketsInput>
  }

  export type UserUpdateWithoutVerifiedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUpdateManyWithoutTravelerNestedInput
    travelerTickets?: TicketUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUpdateManyWithoutConductorNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutSupervisorNestedInput
    buses?: BusUpdateManyWithoutConductorNestedInput
  }

  export type UserUncheckedUpdateWithoutVerifiedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUncheckedUpdateManyWithoutTravelerNestedInput
    travelerTickets?: TicketUncheckedUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUncheckedUpdateManyWithoutConductorNestedInput
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutSupervisorNestedInput
    buses?: BusUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type VerificationLogUpsertWithWhereUniqueWithoutTicketInput = {
    where: VerificationLogWhereUniqueInput
    update: XOR<VerificationLogUpdateWithoutTicketInput, VerificationLogUncheckedUpdateWithoutTicketInput>
    create: XOR<VerificationLogCreateWithoutTicketInput, VerificationLogUncheckedCreateWithoutTicketInput>
  }

  export type VerificationLogUpdateWithWhereUniqueWithoutTicketInput = {
    where: VerificationLogWhereUniqueInput
    data: XOR<VerificationLogUpdateWithoutTicketInput, VerificationLogUncheckedUpdateWithoutTicketInput>
  }

  export type VerificationLogUpdateManyWithWhereWithoutTicketInput = {
    where: VerificationLogScalarWhereInput
    data: XOR<VerificationLogUpdateManyMutationInput, VerificationLogUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketCreateWithoutVerificationLogsInput = {
    id?: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    issuedAt?: Date | string
    session: TravelSessionCreateNestedOneWithoutTicketInput
    traveler: UserCreateNestedOneWithoutTravelerTicketsInput
    conductor: UserCreateNestedOneWithoutConductedTicketsInput
    bus: BusCreateNestedOneWithoutTicketsInput
    supervisor?: UserCreateNestedOneWithoutVerifiedTicketsInput
  }

  export type TicketUncheckedCreateWithoutVerificationLogsInput = {
    id?: string
    sessionId: string
    travelerId: string
    conductorId: string
    busId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    issuedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutVerificationLogsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutVerificationLogsInput, TicketUncheckedCreateWithoutVerificationLogsInput>
  }

  export type UserCreateWithoutVerificationLogsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionCreateNestedManyWithoutTravelerInput
    travelerTickets?: TicketCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketCreateNestedManyWithoutConductorInput
    verifiedTickets?: TicketCreateNestedManyWithoutSupervisorInput
    buses?: BusCreateNestedManyWithoutConductorInput
  }

  export type UserUncheckedCreateWithoutVerificationLogsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    travelSessions?: TravelSessionUncheckedCreateNestedManyWithoutTravelerInput
    travelerTickets?: TicketUncheckedCreateNestedManyWithoutTravelerInput
    conductedTickets?: TicketUncheckedCreateNestedManyWithoutConductorInput
    verifiedTickets?: TicketUncheckedCreateNestedManyWithoutSupervisorInput
    buses?: BusUncheckedCreateNestedManyWithoutConductorInput
  }

  export type UserCreateOrConnectWithoutVerificationLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationLogsInput, UserUncheckedCreateWithoutVerificationLogsInput>
  }

  export type TicketUpsertWithoutVerificationLogsInput = {
    update: XOR<TicketUpdateWithoutVerificationLogsInput, TicketUncheckedUpdateWithoutVerificationLogsInput>
    create: XOR<TicketCreateWithoutVerificationLogsInput, TicketUncheckedCreateWithoutVerificationLogsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutVerificationLogsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutVerificationLogsInput, TicketUncheckedUpdateWithoutVerificationLogsInput>
  }

  export type TicketUpdateWithoutVerificationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: TravelSessionUpdateOneRequiredWithoutTicketNestedInput
    traveler?: UserUpdateOneRequiredWithoutTravelerTicketsNestedInput
    conductor?: UserUpdateOneRequiredWithoutConductedTicketsNestedInput
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    supervisor?: UserUpdateOneWithoutVerifiedTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutVerificationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutVerificationLogsInput = {
    update: XOR<UserUpdateWithoutVerificationLogsInput, UserUncheckedUpdateWithoutVerificationLogsInput>
    create: XOR<UserCreateWithoutVerificationLogsInput, UserUncheckedCreateWithoutVerificationLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationLogsInput, UserUncheckedUpdateWithoutVerificationLogsInput>
  }

  export type UserUpdateWithoutVerificationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUpdateManyWithoutTravelerNestedInput
    travelerTickets?: TicketUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUpdateManyWithoutConductorNestedInput
    verifiedTickets?: TicketUpdateManyWithoutSupervisorNestedInput
    buses?: BusUpdateManyWithoutConductorNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelSessions?: TravelSessionUncheckedUpdateManyWithoutTravelerNestedInput
    travelerTickets?: TicketUncheckedUpdateManyWithoutTravelerNestedInput
    conductedTickets?: TicketUncheckedUpdateManyWithoutConductorNestedInput
    verifiedTickets?: TicketUncheckedUpdateManyWithoutSupervisorNestedInput
    buses?: BusUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type TravelSessionCreateManyTravelerInput = {
    id?: string
    busId: string
    boardingStopId: string
    destinationStopId: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
  }

  export type TicketCreateManyTravelerInput = {
    id?: string
    sessionId: string
    conductorId: string
    busId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    issuedAt?: Date | string
  }

  export type TicketCreateManyConductorInput = {
    id?: string
    sessionId: string
    travelerId: string
    busId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    issuedAt?: Date | string
  }

  export type TicketCreateManySupervisorInput = {
    id?: string
    sessionId: string
    travelerId: string
    conductorId: string
    busId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    issuedAt?: Date | string
  }

  export type VerificationLogCreateManySupervisorInput = {
    id?: string
    ticketId: string
    scannedAt?: Date | string
    result: $Enums.VerificationResult
  }

  export type BusCreateManyConductorInput = {
    id?: string
    busNumber: string
    routeId: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TravelSessionUpdateWithoutTravelerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutSessionsNestedInput
    boardingStop?: StopUpdateOneRequiredWithoutBoardingSessionsNestedInput
    destinationStop?: StopUpdateOneRequiredWithoutDestinationSessionsNestedInput
    ticket?: TicketUpdateOneWithoutSessionNestedInput
  }

  export type TravelSessionUncheckedUpdateWithoutTravelerInput = {
    id?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStopId?: StringFieldUpdateOperationsInput | string
    destinationStopId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type TravelSessionUncheckedUpdateManyWithoutTravelerInput = {
    id?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStopId?: StringFieldUpdateOperationsInput | string
    destinationStopId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutTravelerInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: TravelSessionUpdateOneRequiredWithoutTicketNestedInput
    conductor?: UserUpdateOneRequiredWithoutConductedTicketsNestedInput
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    supervisor?: UserUpdateOneWithoutVerifiedTicketsNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTravelerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutTravelerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: TravelSessionUpdateOneRequiredWithoutTicketNestedInput
    traveler?: UserUpdateOneRequiredWithoutTravelerTicketsNestedInput
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    supervisor?: UserUpdateOneWithoutVerifiedTicketsNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: TravelSessionUpdateOneRequiredWithoutTicketNestedInput
    traveler?: UserUpdateOneRequiredWithoutTravelerTicketsNestedInput
    conductor?: UserUpdateOneRequiredWithoutConductedTicketsNestedInput
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationLogUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumVerificationResultFieldUpdateOperationsInput | $Enums.VerificationResult
    ticket?: TicketUpdateOneRequiredWithoutVerificationLogsNestedInput
  }

  export type VerificationLogUncheckedUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumVerificationResultFieldUpdateOperationsInput | $Enums.VerificationResult
  }

  export type VerificationLogUncheckedUpdateManyWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumVerificationResultFieldUpdateOperationsInput | $Enums.VerificationResult
  }

  export type BusUpdateWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutBusesNestedInput
    sessions?: TravelSessionUpdateManyWithoutBusNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: TravelSessionUncheckedUpdateManyWithoutBusNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StopCreateManyRouteInput = {
    id?: string
    stopName: string
    stopOrder: number
    distanceFromStart: number
  }

  export type FareCreateManyRouteInput = {
    id?: string
    fromStopOrder: number
    toStopOrder: number
    amount: number
  }

  export type BusCreateManyRouteInput = {
    id?: string
    busNumber: string
    conductorId?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type StopUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    distanceFromStart?: FloatFieldUpdateOperationsInput | number
    boardingSessions?: TravelSessionUpdateManyWithoutBoardingStopNestedInput
    destinationSessions?: TravelSessionUpdateManyWithoutDestinationStopNestedInput
  }

  export type StopUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    distanceFromStart?: FloatFieldUpdateOperationsInput | number
    boardingSessions?: TravelSessionUncheckedUpdateManyWithoutBoardingStopNestedInput
    destinationSessions?: TravelSessionUncheckedUpdateManyWithoutDestinationStopNestedInput
  }

  export type StopUncheckedUpdateManyWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    distanceFromStart?: FloatFieldUpdateOperationsInput | number
  }

  export type FareUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStopOrder?: IntFieldUpdateOperationsInput | number
    toStopOrder?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type FareUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStopOrder?: IntFieldUpdateOperationsInput | number
    toStopOrder?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type FareUncheckedUpdateManyWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStopOrder?: IntFieldUpdateOperationsInput | number
    toStopOrder?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type BusUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductor?: UserUpdateOneWithoutBusesNestedInput
    sessions?: TravelSessionUpdateManyWithoutBusNestedInput
    tickets?: TicketUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    conductorId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: TravelSessionUncheckedUpdateManyWithoutBusNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    busNumber?: StringFieldUpdateOperationsInput | string
    conductorId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelSessionCreateManyBoardingStopInput = {
    id?: string
    travelerId: string
    busId: string
    destinationStopId: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
  }

  export type TravelSessionCreateManyDestinationStopInput = {
    id?: string
    travelerId: string
    busId: string
    boardingStopId: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
  }

  export type TravelSessionUpdateWithoutBoardingStopInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traveler?: UserUpdateOneRequiredWithoutTravelSessionsNestedInput
    bus?: BusUpdateOneRequiredWithoutSessionsNestedInput
    destinationStop?: StopUpdateOneRequiredWithoutDestinationSessionsNestedInput
    ticket?: TicketUpdateOneWithoutSessionNestedInput
  }

  export type TravelSessionUncheckedUpdateWithoutBoardingStopInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    destinationStopId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type TravelSessionUncheckedUpdateManyWithoutBoardingStopInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    destinationStopId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelSessionUpdateWithoutDestinationStopInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traveler?: UserUpdateOneRequiredWithoutTravelSessionsNestedInput
    bus?: BusUpdateOneRequiredWithoutSessionsNestedInput
    boardingStop?: StopUpdateOneRequiredWithoutBoardingSessionsNestedInput
    ticket?: TicketUpdateOneWithoutSessionNestedInput
  }

  export type TravelSessionUncheckedUpdateWithoutDestinationStopInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStopId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type TravelSessionUncheckedUpdateManyWithoutDestinationStopInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    boardingStopId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelSessionCreateManyBusInput = {
    id?: string
    travelerId: string
    boardingStopId: string
    destinationStopId: string
    status?: $Enums.SessionStatus
    tempQRCode: string
    qrExpiresAt: Date | string
    createdAt?: Date | string
  }

  export type TicketCreateManyBusInput = {
    id?: string
    sessionId: string
    travelerId: string
    conductorId: string
    boardingStop: string
    destinationStop: string
    fare: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    signedQRCode: string
    isVerified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: string | null
    issuedAt?: Date | string
  }

  export type TravelSessionUpdateWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traveler?: UserUpdateOneRequiredWithoutTravelSessionsNestedInput
    boardingStop?: StopUpdateOneRequiredWithoutBoardingSessionsNestedInput
    destinationStop?: StopUpdateOneRequiredWithoutDestinationSessionsNestedInput
    ticket?: TicketUpdateOneWithoutSessionNestedInput
  }

  export type TravelSessionUncheckedUpdateWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    boardingStopId?: StringFieldUpdateOperationsInput | string
    destinationStopId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type TravelSessionUncheckedUpdateManyWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    boardingStopId?: StringFieldUpdateOperationsInput | string
    destinationStopId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    tempQRCode?: StringFieldUpdateOperationsInput | string
    qrExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: TravelSessionUpdateOneRequiredWithoutTicketNestedInput
    traveler?: UserUpdateOneRequiredWithoutTravelerTicketsNestedInput
    conductor?: UserUpdateOneRequiredWithoutConductedTicketsNestedInput
    supervisor?: UserUpdateOneWithoutVerifiedTicketsNestedInput
    verificationLogs?: VerificationLogUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationLogs?: VerificationLogUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    travelerId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    boardingStop?: StringFieldUpdateOperationsInput | string
    destinationStop?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    signedQRCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationLogCreateManyTicketInput = {
    id?: string
    supervisorId: string
    scannedAt?: Date | string
    result: $Enums.VerificationResult
  }

  export type VerificationLogUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumVerificationResultFieldUpdateOperationsInput | $Enums.VerificationResult
    supervisor?: UserUpdateOneRequiredWithoutVerificationLogsNestedInput
  }

  export type VerificationLogUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumVerificationResultFieldUpdateOperationsInput | $Enums.VerificationResult
  }

  export type VerificationLogUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumVerificationResultFieldUpdateOperationsInput | $Enums.VerificationResult
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}