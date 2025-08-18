import { getAllPosts, getAllTags } from '@/lib/blog';
import Blog from '@/components/Blog';

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return <Blog posts={posts} tags={tags} />;
}

export const metadata = {
  title: 'Blog - Abhishek Shastri',
  description: 'Thoughts, tutorials, and insights about web development, technology, and programming.',
};
