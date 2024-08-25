import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Button } from "@nextui-org/react";

const CookieConsent: React.FC = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [visible, setVisible] = useState(!cookies.cookieConsent);

  const acceptCookies = () => {
    setCookie("cookieConsent", "accepted", { path: "/", maxAge: 31536000 });
    setVisible(false);
  };

  const declineCookies = () => {
    setCookie("cookieConsent", "declined", { path: "/", maxAge: 31536000 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#18181a] text-white p-4 flex justify-between items-center z-50">
      <span>
        By pressing the accept button, you’re agreeing to the use of cookies
        that make everything run smoothly. :)
      </span>
      <div className="flex flex-col md:flex-row gap-3">
        <Button
          onClick={acceptCookies}
          color="primary"
          variant="ghost"
          className="transform hover:scale-[1.2] transition-transform duration-200"
        >
          Accept
        </Button>
        <Button
          onClick={declineCookies}
          color="primary"
          variant="ghost"
          className="transform hover:scale-[1.2] transition-transform duration-200"
        >
          Decline
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
