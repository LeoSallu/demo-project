import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/')
  getBackend(): string {
    return 'Ciao, siamo del backend!'
  }
}
