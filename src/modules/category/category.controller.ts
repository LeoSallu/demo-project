import { Controller, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  @Get()
  getCategories(): string {
    return 'Sei nelle categorie';
  }
}
