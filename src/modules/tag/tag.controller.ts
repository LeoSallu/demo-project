import { Controller, Get } from '@nestjs/common';

@Controller('tag')
export class TagController {
  @Get()
  getTags(): string {
    return 'Sei nei Tag';
  }
}
