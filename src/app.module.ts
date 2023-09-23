import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './modules/category/category.module';
import { PostModule } from './modules/post/post.module';
import { TagModule } from './modules/tag/tag.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CategoryModule, PostModule, TagModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
