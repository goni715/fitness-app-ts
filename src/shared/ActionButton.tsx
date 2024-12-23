import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TSelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: TSelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(TSelectedPage.ContactUs)}
      href={`#${TSelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
