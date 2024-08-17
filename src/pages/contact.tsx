import DefaultLayout from "@/layouts/default";
import "../styles/index.css";
import { useState } from "react";
import { Input, Textarea, Button, Spinner } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = (e: any) => {
    setShowLoader(true);
    e.preventDefault();

    const serviceId = "service_ibdjiun";
    const templateId = "template_nsywdyv";
    const publicKey = "e8Yqf9xBykR-nZ2eL";

    const templateParams = {
      from_email: email,
      from_firstname: firstName,
      from_lastname: lastName,
      to_name: "Sergiu",
      message: message,
      reply_to: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setEmail("");
        setFirstName("");
        setLastName("");
        setMessage("");
        setEmailSent(true);
        setShowLoader(false);
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center items-center gap-6 py-8 md:py-10">
        {!emailSent && (
          <>
            <div className="flex flex-row w-[80%] md:mb-[50px]">
              <h2 className="text-[45px] md:text-[100px] font-testTheFuture leading-[1] md:leading-tight">
                Let's get in touch
              </h2>
            </div>
            <div className="w-[80%] flex flex-col gap-6">
              <div className="flex md:w-[30%] flex-wrap md:flex-nowrap">
                <Input
                  isRequired
                  type="email"
                  name="user_email"
                  variant="bordered"
                  label="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="flex md:w-[30%] gap-6 md:gap-2 flex-wrap md:flex-nowrap">
                <Input
                  isRequired
                  name="user_firstname"
                  type="name"
                  variant="bordered"
                  label="First Name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <Input
                  isRequired
                  name="user_lastname"
                  type="name"
                  variant="bordered"
                  label="Last Name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="flex md:w-[30%] flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Textarea
                  isRequired
                  name="user_message"
                  variant="bordered"
                  minRows={3}
                  label="Message"
                  placeholder=""
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex w-[80%]">
              <Button
                type="submit"
                onClick={handleSubmit}
                radius="full"
                variant="bordered"
                className="h-[50px] md:h-[70px] text-[18px] md:text-[30px] w-[150px] md:w-[30%] mb-[20px] md:mb-0"
              >
                {!showLoader && (
                  <>
                    Send
                    <FontAwesomeIcon icon={faMessage} />
                  </>
                )}
                {showLoader && <Spinner color="default" />}
              </Button>
            </div>
          </>
        )}
        {emailSent && (
          <div className="flex flex-row w-[80%] md:mb-[50px]">
            <h2 className="text-[25px] md:text-[60px] font-testTheFuture leading-12 md:leading-tight">
              <span className="hover:italic">I</span>
              <span className="hover:italic"> just</span>
              <span className="hover:italic"> received</span>
              <span className="hover:italic"> your</span>
              <span className="hover:italic"> message,</span>
              <span className="hover:italic"> and</span>
              <span className="hover:italic"> I</span>
              <span className="hover:italic"> look</span>
              <span className="hover:italic"> forward</span>
              <span className="hover:italic"> to</span>
              <span className="hover:italic"> connecting</span>
              <span className="hover:italic"> with</span>
              <span className="hover:italic"> you!</span>
              <br />
              <span className="hover:italic">I’ll</span>
              <span className="hover:italic"> get</span>
              <span className="hover:italic"> back</span>
              <span className="hover:italic"> to</span>
              <span className="hover:italic"> you</span>
              <span className="hover:italic"> ASAP.</span>
              <span className="hover:italic"> In</span>
              <span className="hover:italic"> the</span>
              <span className="hover:italic"> meantime,</span>
              <span className="hover:italic"> feel</span>
              <span className="hover:italic"> free</span>
              <span className="hover:italic"> to</span>
              <span className="hover:italic"> explore</span>
              <span className="hover:italic"> the</span>
              <span className="hover:italic"> rest</span>
              <span className="hover:italic"> of</span>
              <span className="hover:italic"> the</span>
              <span className="hover:italic"> site.</span>
              <span className="hover:italic"> Have</span>
              <span className="hover:italic"> a</span>
              <span className="hover:italic"> wonderful</span>
              <span className="hover:italic"> day!</span>
              <span className="hover:italic">
                <FontAwesomeIcon className="ml-[10px]" icon={faFaceSmile} />
              </span>
            </h2>
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
