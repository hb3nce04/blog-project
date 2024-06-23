import { Controller, Get, Render } from '@nestjs/common';
import { PostService } from './post/post.service';
import { Post } from './post/schemas/post.schema';

@Controller()
export class AppController {
  constructor(private postService: PostService) {}

  @Get('')
  @Render('blog/pages/index')
  async indexPage() {
    // return {
    //   posts: [
    //     {
    //       id: 1,
    //       author: {
    //         name: 'Bence',
    //       },
    //       category: {
    //         name: 'IT',
    //       },
    //       tags: [{ name: 'egy' }, { name: 'kettő' }],
    //       createdAt: null,
    //       body: 'asdddd',
    //     },
    //   ],
    //   categories: [{ name: 'egy' }, { name: 'kettő' }],
    //   tags: [{ name: 'egy' }, { name: 'kettő' }],
    //   latestPosts: [{ id: 1, title: 'sd', createdAt: null }],
    // };
    const posts = await this.postService.findAll();
    return {posts};
  }

  @Get('/about')
  @Render('blog/pages/about')
  aboutPage() {}

  @Get('/contact')
  @Render('blog/pages/contact')
  contactPage() {}

  @Get('/author')
  @Render('blog/pages/author')
  authorPage() {}

  @Get('/policy')
  @Render('blog/pages/policy')
  policyPage() {}

  @Get('/terms')
  @Render('blog/pages/terms')
  termsPage() {}
}
