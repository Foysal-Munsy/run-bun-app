import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('health')
  @ApiOperation({ summary: 'Health check endpoint' })
  health() {
    return { status: 'ok' };
  }

  @Post('echo')
  @ApiOperation({ summary: 'Echo request body' })
  echo(@Body() body: { message: string }) {
    return body;
  }
}
