import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import type { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  // minute hour everyday. – time based rule
  /**
      ┌──────── minute (0–59)
      │ ┌────── hour (0–23)
      │ │ ┌──── day of month (1–31)
      │ │ │ ┌── month (1–12)
      │ │ │ │ ┌─ day of week (0–7)
      │ │ │ │ │
      │ │ │ │ │
      * * * * *
   */
  @Cron('0 0 * * *')
  handleDailyJob() {
    console.log('Runs every day at midnight');
  }

  // runs after 5 seconds repeatedly
  @Interval(5000)
  handleIntervalJob() {
    console.log('Runs every 5 seconds');
  }

  //  Runs once, after a delay.
  @Timeout(10000)
  handleStartupDelay() {
    console.log('Runs once after 10 seconds');
  }
}
