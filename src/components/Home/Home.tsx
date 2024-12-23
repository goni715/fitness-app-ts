import { TSelectedPage } from "../../shared/types";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import useMediaQuery from "../../hooks/useMediaQuery";


type TProps = {
  setSelectedPage: (value: TSelectedPage) => void;
}


const Home = ({ setSelectedPage }: TProps) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");


    return (
        <>
           <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
             {/* IMAGE AND MAIN HEADER */}
             <div>
                {/* Main Header */}
                <div>
                    {/* Headings */}
                    <div>
                        <div>
                            <div>
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image */}
             </div>
           </section>
        </>
    );
};

export default Home;