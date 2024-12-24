import { Dispatch, SetStateAction } from "react";
import { TSelectedPage } from "../../shared/types";

type TProps = {
  setSelectedPage: Dispatch<SetStateAction<TSelectedPage>>
};


const Benefits = ({ setSelectedPage }: TProps) => {
    return (
        <>
            <h1>Benefits component</h1>
        </>
    );
};

export default Benefits;