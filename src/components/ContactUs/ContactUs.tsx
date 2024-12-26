import { Dispatch, SetStateAction } from "react";
import { TSelectedPage } from "../../shared/types";

type TProps = {
  setSelectedPage: Dispatch<SetStateAction<TSelectedPage>>
};



const ContactUs = ( {setSelectedPage }: TProps) => {
    return (
        <>
            <h1>This is Contact Us Component</h1>
        </>
    );
};

export default ContactUs;