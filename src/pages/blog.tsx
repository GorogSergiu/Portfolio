import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function BlogPage() {
  const blogPosts = [
    {
      author: "Sergiu Gorog",
      date: "22/10/2000",
      slug: "why-nextui",
      title: "Why did I choose NextUI",
      image: "/nextuiLOGO.png",
    },
  ];

  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col w-[80%]">
          <h1 className="text-[40px] md:text-[100px] font-testTheFuture md:mt-[50px] mb-[50px] md:mb-[100px]">
            Blogs
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-start md:justify-start gap-16">
            {blogPosts.map((post) => (
              <div>
                <Card
                  className="w-[270px] py-4 transform hover:scale-[1.2] transition-transform duration-200"
                  isPressable
                  onPress={() => navigate(`/blog/${post.slug}`)}
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny text-left uppercase font-bold">
                      {post.date}
                    </p>
                    <small className="text-default-500 text-left">
                      {post.author}
                    </small>
                    <h4 className="font-bold text-left text-large">
                      {post.title}
                    </h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src={post.image}
                      width={270}
                    />
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
