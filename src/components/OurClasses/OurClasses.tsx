import { Dispatch, SetStateAction } from "react";
import { TSelectedPage } from "../../shared/types";

type TProps = {
    setSelectedPage : Dispatch<SetStateAction<TSelectedPage>>
}

const OurClasses = ({ setSelectedPage }: TProps) => {
    return (
        <>
            <h2>Our classes component</h2>
        </>
    );
};

export default OurClasses;