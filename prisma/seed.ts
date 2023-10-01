import { PrismaClient } from '@prisma/client'
import {users} from './users'
import {categories} from './categories'
import {posts} from './posts'
import {categoriesOnPosts} from './categoriesOnPosts'
const prisma = new PrismaClient()
async function main() {
  
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }

  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  for (const post of posts) {
    await prisma.post.create({
      data: post,
    });
  }

  for (const categoryOnPost of categoriesOnPosts) {
    const post = await prisma.post.findUnique({ where: { id: categoryOnPost.postId } });
    const categoria = await prisma.category.findUnique({ where: { id: categoryOnPost.categoryId } });
  
    if (post && categoria) {
      await prisma.categoriesOnPosts.create({
        data: {
          postId: post.id,
          categoryId: categoria.id,
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })