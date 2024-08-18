import DefaultLayout from "@/layouts/default";
import { Blogs } from "@/items/blogs-data";
import { useParams } from "react-router-dom";
import { useScroll, useSpring, motion } from "framer-motion";

type BlogPostProps = {};

const BlogPost: React.FC<BlogPostProps> = ({}) => {
  const { slug } = useParams<{ slug: string }>();
  const blog = Blogs.find((data) => data.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!blog) {
    return <div>Blog post not found.</div>;
  }
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <motion.div
          className="fixed top-0 left-0 bottom-0 w-[10px] bg-white origin-top"
          style={{ scaleY }}
        />
        <div className="flex flex-col w-[80%] justify-center">
          {Blogs.map((data) => (
            <div>
              <h1 className="text-[20px] md:text-[50px] font-testTheFuture leading-[1.5] md:leading-tight mt-[50px] mb-[50px] md:mb-[100px]">
                {data.title}
              </h1>
              <div>{data.text}</div>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default BlogPost;
