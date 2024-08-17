import { Card, Link, CardFooter, Image, Button } from "@nextui-org/react";

type HomepageProjectProps = {
  logo: string,
  image: string;
  name: string;
  description: string;
  link: string;
};

const HomepageProject: React.FC<HomepageProjectProps> = ({ logo, image, name, description, link }) => {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[200px] col-span-12 sm:col-span-7"
    >
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={image}
      />
      <CardFooter className="absolute w-[60%] z-20 rounded-none right-0 top-0 bottom-0 flex flex-col justify-center items-center gap-4 bg-black/40 p-4">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Logo"
            className="rounded-full w-10 h-11 bg-black"
            src={logo}
          />
          <div className="flex flex-col">
            <h3 className="text-white/60">{name}</h3>
            <p className="text-tiny text-white/60">{description}</p>
          </div>
        </div>
        <Button radius="full" size="sm" href={link} as={Link}>
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HomepageProject;
