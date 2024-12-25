import { Dispatch, SetStateAction } from "react";
import { TBenefitType, TSelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import BenefitItem from "./BenefitItem";
import { benefits } from "../../data/data";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import ActionButton from "../../shared/ActionButton";
import { motion } from "framer-motion";


type TProps = {
  setSelectedPage: Dispatch<SetStateAction<TSelectedPage>>
};


const Benefits = ({ setSelectedPage }: TProps) => {

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

    return (
      <>
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
          <motion.div
           onViewportEnter={() => setSelectedPage(TSelectedPage.Benefits)}
          >
            {/* Header */}
            <motion.div 
               className="md:my-5 md:w-3/5"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                 hidden: { opacity: 0, x: -50 },
                 visible: { opacity: 1, x: 0 },
               }}
              >
              <HText>MORE THAN JUST GYM.</HText>
              <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes
                to get you to your ultimate fitness goals with ease. We provide
                true care into each and every member.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div 
              className="mt-5 items-center justify-between gap-8 md:flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={container}
            >
              {benefits?.map((benefit: TBenefitType) => (
                <BenefitItem
                  key={benefit.title}
                  item={benefit}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </motion.div>

            {/* Graphics & Description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
              {/* GRAPHIC */}
              <img
                className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
              />

              {/* description */}
              <div>
                {/* title */}
                <div className="relative">
                  <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                    <motion.div
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.5 }}
                       transition={{ duration: 0.5 }}
                       variants={{
                         hidden: { opacity: 0, x: 50 },
                         visible: { opacity: 1, x: 0 },
                       }}
                    >
                      <HText>
                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                        <span className="text-primary-500">FIT</span>
                      </HText>
                    </motion.div>
                  </div>
                </div>

                {/* descript */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <p className="my-5">
                    Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                    egestas ultrices consectetur adipiscing ultricies enim.
                    Pulvinar fames vitae vitae quis. Quis amet vulputate
                    tincidunt at in nulla nec. Consequat sed facilisis dui sit
                    egestas ultrices tellus. Ullamcorper arcu id pretium sapien
                    proin integer nisl. Felis orci diam odio.
                  </p>
                  <p className="mb-5">
                    Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel
                    est tellus quam porttitor. Mauris velit euismod elementum
                    arcu neque facilisi. Amet semper tortor facilisis metus
                    nibh. Rhoncus sit enim mattis odio in risus nunc.
                  </p>
                </motion.div>

                {/* button */}
                <div className="relative mt-16">
                  <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Join Now
                    </ActionButton>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </>
    );
};

export default Benefits;