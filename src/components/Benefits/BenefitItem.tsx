import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { TSelectedPage } from "../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type TProps = {
    item: {
        icon: IconType;
        title: string;
        description: string;
    },
    setSelectedPage: Dispatch<SetStateAction<TSelectedPage>> 
}

const BenefitItem = ({item, setSelectedPage}: TProps) => {

    const childVariant = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      };


    return (
      <>
        <motion.div
          variants={childVariant}
          className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
              <item.icon />
            </div>
          </div>

          <h4 className="font-bold">{item.title}</h4>
          <p className="my-3">{item.description}</p>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(TSelectedPage.ContactUs)}
            href={`#${TSelectedPage.ContactUs}`}
          >
            <p>Learn More</p>
          </AnchorLink>
        </motion.div>
      </>
    );
};

export default BenefitItem;