import DefaultLayout from "@/layouts/default";
import "../styles/index.css";
import { Input, Textarea, Button, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center items-center gap-6 py-8 md:py-10">
        <div className="flex flex-row w-[80%] md:mb-[50px]">
          <h2 className="text-[45px] md:text-[100px] font-testTheFuture leading-[1] md:leading-tight">
            Let's get in touch
          </h2>
        </div>
        <div className="flex flex-col w-[80%] gap-6">
          <div className="flex md:w-[30%] flex-wrap md:flex-nowrap">
            <Input isRequired type="email" variant="bordered" label="Email" />
          </div>
          <div className="flex md:w-[30%] gap-2 flex-wrap md:flex-nowrap">
            <Input
              isRequired
              type="name"
              variant="bordered"
              label="First Name"
            />
            <Input
              isRequired
              type="name"
              variant="bordered"
              label="Last Name"
            />
          </div>
          <div className="flex md:w-[30%] flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Textarea
              isRequired
              variant="bordered"
              minRows={3}
              label="Message"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex w-[80%]">
          <Button
            href="/portofolio"
            as={Link}
            radius="full"
            variant="bordered"
            className="h-[50px] md:h-[70px] text-[18px] md:text-[30px] w-[150px] md:w-[30%] mb-[20px] md:mb-0"
          >
            Send
            <FontAwesomeIcon icon={faMessage} />
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
