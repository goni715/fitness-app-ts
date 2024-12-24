import { Dispatch, SetStateAction } from "react";
import { TSelectedPage } from "../../shared/types";

type TProps = {
  setSelectedPage: Dispatch<SetStateAction<TSelectedPage>>
};


const Benefits = ({ setSelectedPage }: TProps) => {
    return (
        <>
            <section id="benefits" className="mx-auto min-h-full w-5/6 py-20"> 
            <div>
                {/* Header */}
                <div className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
                </div>
            </div>
            </section>
        </>
    );
};

export default Benefits;