import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { createKeyv } from '@keyv/redis';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      process.env.MONGO_URI ?? 'mongodb://localhost:27017/run_bun',
    ),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
    }),

    // CacheModule.register({
    //   isGlobal: true,
    //   ttl: 20 * 1000,
    //   stores: redisStore,
    // }),

    //   CacheModule.registerAsync({
    //     isGlobal: true,
    //     useFactory: async () => {
    //       const store = await redisStore({
    //         socket: {
    //           host: 'localhost',
    //           port: 6379,
    //         },
    //       });
    //       return {
    //         store,
    //         ttl: 10,
    //       };
    //     },
    //   }),
    // ],
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: () => ({
        stores: [createKeyv('redis://localhost:6379')],
        ttl: 60 * 1000,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
