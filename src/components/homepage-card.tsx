import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Link,
} from "@nextui-org/react";
import myProfilePhoto from "/Avatar.png";

export default function HomepageCard() {
  return (
    <Card className="max-w-[450px] shadow-lg">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={myProfilePhoto} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Sergiu-Stefan Gorog
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @sergiugorog
            </h5>
          </div>
        </div>
        <Button
          href="/contact"
          as={Link}
          color="primary"
          radius="full"
          size="sm"
          variant="bordered"
        >
          Hire me
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          I am a Frontend Developer stacked with a promising skill-set.
          Dedicated to design, deliver and develop ideas and bring them into a
          digital format. Always up for new challenges that help me increase my
          professional and personal skills.
        </p>
        <span className="pt-2">
          #FrontendWithSergiu
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
