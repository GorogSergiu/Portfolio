import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Image, Listbox, ListboxItem } from "@nextui-org/react";
import { faCircleCheck, faStar } from "@fortawesome/free-solid-svg-icons";

type PortofolioItemProps = {
  jobImage: string;
  companyName: string;
  jobTitle: string;
  jobLocation: string;
  jobExperience: string;
  technologies: string[];
  responsabilities: string[];
};

const PortofolioItem: React.FC<PortofolioItemProps> = ({
  jobImage,
  companyName,
  jobTitle,
  jobLocation,
  jobExperience,
  technologies,
  responsabilities,
}) => {
  const licenseAppImages = [
    "/TheSpotsHomePage.png",
    "/TheSpotsPlaces.png",
    "/TheSpotsSpotPage.png",
    "/TheSpotsUserPage.png",
  ];
  const allKeys = responsabilities.map((_, index) => index.toString());
  return (
    <>
      <div className="flex justify-center items-center mt-[30px] md:mt-[100px]">
        <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row gap-10">
          {!companyName.includes("TheSpots") && (
            <div className="w-[100%] md:w-[30%]">
              <Image src={jobImage} />
            </div>
          )}
          <div>
            <h2 className="text-[25px] md:text-[30px] text-left">
              ../{companyName} - {jobTitle}
            </h2>
            {jobLocation !== "" && (
              <h3>
                ../{jobLocation} - {jobExperience}
              </h3>
            )}
            <div className="flex flex-wrap mt-[30px] mb-[30px] gap-2">
              {technologies.map((technology: string, index: number) => (
                <Button
                  key={index}
                  isDisabled
                  color="default"
                  radius="full"
                  variant="bordered"
                  className="opacity-100"
                >
                  {technology}
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-left border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                <Listbox
                  disabledKeys={allKeys}
                  tabIndex={-1}
                  aria-label="Multiple selection example"
                  variant="flat"
                  disallowEmptySelection
                >
                  {responsabilities.map(
                    (responsability: string, index: number) => (
                      <ListboxItem
                        tabIndex={-1}
                        key={index}
                        className="flex items-center opacity-100"
                      >
                        <FontAwesomeIcon
                          icon={
                            responsability.includes(
                              "As a Junior Frontend Developer"
                            ) || responsability.includes("As a Junior Tester")
                              ? faStar
                              : faCircleCheck
                          }
                          className="mr-2"
                        />
                        <span className="whitespace-normal break-words overflow-visible">
                          {responsability}
                        </span>
                      </ListboxItem>
                    )
                  )}
                </Listbox>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] md:w-[80%] justify-center items-center overflow-visible">
        {companyName.includes("TheSpots") && (
          <div className="mt-[50px] overflow-x-auto">
            <div className="flex space-x-4 whitespace-nowrap">
              {licenseAppImages.map((appImage, index: number) => (
                <div
                  key={index}
                  className="inline-block flex-shrink-0 w-[300px] md:w-[600px] h-[auto]"
                >
                  <Image
                    src={appImage}
                    className="rounded-lg object-cover w-[300px] md:w-[600px]"
                    alt={`License App Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PortofolioItem;
