import { Button } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PortofolioItem from "@/components/portofolio-item";
import { Frontend, WordpressProjects, LicenseApp } from "@/projects/project";

export default function Portofolio() {
  const [toggle, setToggle] = useState(1);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col-reverse md:flex-row w-[80%] items-center justify-between md:mt-[50px] mb-[50px]">
          <h2 className="text-[35px] md:text-[90px] font-testTheFuture leading-[1] md:leading-tight">
            All of my work
          </h2>
          <a href="/GorogSergiuStefan.pdf" download="SergiuGorog.pdf">
            <Button
              radius="full"
              variant="bordered"
              className="h-[50px] md:h-[70px] text-[14px] md:text-[30px] w-[150px] md:w-[350px] mb-[20px] md:mb-0"
            >
              Download CV
              <FontAwesomeIcon icon={faDownload} className="ml-2" />
            </Button>
          </a>
        </div>
        <div>
          <Button
            onPress={() => setToggle(1)}
            radius="full"
            variant={toggle === 1 ? "solid" : "ghost"}
            className="rounded-tr-none rounded-br-none"
          >
            Frontend
          </Button>
          <Button
            onPress={() => setToggle(2)}
            radius="full"
            variant={toggle === 2 ? "solid" : "ghost"}
            className="rounded-none"
          >
            License App
          </Button>
          <Button
            onPress={() => setToggle(3)}
            radius="full"
            variant={toggle === 3 ? "solid" : "ghost"}
            className="rounded-tl-none rounded-bl-none"
          >
            Wordpress
          </Button>
        </div>
        <div className="flex flex-col w-[100%] justify-center items-center">
          {toggle === 1 &&
            Frontend.map((item, index: number) => (
              <PortofolioItem
                key={index}
                jobImage={item.jobImage}
                companyName={item.companyName}
                jobExperience={item.jobExperience}
                jobLocation={item.jobLocation}
                jobTitle={item.jobTitle}
                technologies={item.technologies}
                responsabilities={item.responsabilities}
              />
            ))}
          {toggle === 2 &&
            LicenseApp.map((item, index: number) => (
              <PortofolioItem
                key={index}
                jobImage={item.jobImage}
                companyName={item.companyName}
                jobExperience={item.jobExperience}
                jobLocation={item.jobLocation}
                jobTitle={item.jobTitle}
                technologies={item.technologies}
                responsabilities={item.responsabilities}
              />
            ))}
          {toggle === 3 &&
            WordpressProjects.map((item, index: number) => (
              <PortofolioItem
                key={index}
                jobImage={item.jobImage}
                companyName={item.companyName}
                jobExperience={item.jobExperience}
                jobLocation={item.jobLocation}
                jobTitle={item.jobTitle}
                technologies={item.technologies}
                responsabilities={item.responsabilities}
              />
            ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
