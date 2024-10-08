import DefaultLayout from "@/layouts/default";
import "../styles/index.css";
import { Button, Link } from "@nextui-org/react";
import HomepageCard from "@/components/homepage-card";
import HomepageProject from "@/components/homepage-project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function IndexPage() {
  const projectImages = [
    {
      logo: "/learnlightlogo.png",
      string: "/LearnLight.png",
      name: "LearnLight",
      description: "Frontend",
      link: "/portfolio/frontend",
    },
    {
      logo: "/nutrinooslogo.png",
      string: "/nutrinoosHome.png",
      name: "NutriNOOS",
      description: "Wordpress",
      link: "/portfolio/wordpress",
    },
    {
      logo: "/ideahublogo.png",
      string: "/ideahub.png",
      name: "IdeaHub",
      description: "Tester/Frontend",
      link: "/portfolio/frontend",
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center md:gap-4 py-8 md:py-10">
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row w-[80%] items-center justify-between">
          <h2 className="text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[150px] font-testTheFuture leading-[1] md:leading-tight">
            Frontend
          </h2>
          <Button
            href="/portfolio/frontend"
            as={Link}
            radius="full"
            variant="ghost"
            className="h-[50px] md:h-[70px] text-[18px] md:text-[30px] min-w-[150px] md:min-w-[350px] mb-[20px] md:mb-0 "
          >
            Projects
            <FontAwesomeIcon icon={faCode} />
          </Button>
        </div>
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row w-[80%] items-center justify-between">
          <HomepageCard />
          <h2 className="text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[150px] font-testTheFuture mb-6 md:mb-0 md:pl-[20px]">
            Developer
          </h2>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h3 className="text-[25px] w-[80%] text-left md:text-[70px] font-testTheFuture">
          Some of my work
        </h3>
        <div className="container flex w-[80%] flex-col md:flex-row gap-9">
          {projectImages.map((element: any, index: number) => (
            <HomepageProject
              key={index}
              logo={element.logo}
              image={element.string}
              name={element.name}
              description={element.description}
              link={element.link}
            />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
