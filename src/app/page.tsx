import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import { getAllPosts, getAllTags } from '@/lib/blog';

export default function Home() {
  const posts = getAllPosts().slice(0, 6); // Show only first 6 posts on homepage
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Experience />
      <Education />
      <Projects />
      <Blog posts={posts} tags={tags} />
      <Footer />
    </div>
  );
}
