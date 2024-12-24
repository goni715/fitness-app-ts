import { Dispatch, SetStateAction } from "react";
import { TBenefitType, TSelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import BenefitItem from "./BenefitItem";
import { benefits } from "../../data/data";

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
                We provide world class fitness equipment, trainers and classes
                to get you to your ultimate fitness goals with ease. We provide
                true care into each and every member.
              </p>
            </div>

            {/* Benefits */}
            <div className="mt-5 items-center justify-between gap-8 md:flex">
            {benefits?.map((benefit: TBenefitType) => (
            <BenefitItem
              key={benefit.title}
              item={benefit}
              setSelectedPage={setSelectedPage}
            />
          ))}
            </div>
          </div>
        </section>
      </>
    );
};

export default Benefits;