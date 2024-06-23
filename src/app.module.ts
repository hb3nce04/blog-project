import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { AuthorModule } from './author/author.module';
import { TagModule } from './tag/tag.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blog'),
    PostModule,
    CategoryModule,
    AuthorModule,
    TagModule,
    AdminModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
