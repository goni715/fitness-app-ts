import AnchorLink from "react-anchor-link-smooth-scroll";
import { TSelectedPage } from "../../shared/types";
import { Dispatch, SetStateAction } from "react";

type TProps = {
    page: string;
    selectedPage: TSelectedPage;
    setSelectedPage: Dispatch<SetStateAction<TSelectedPage>>
}


const Link = ({ page, selectedPage, setSelectedPage } : TProps) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as TSelectedPage; //Our Classes = ourclasses

    return (
        <>
            <AnchorLink
             className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ''} transition duration-500 hover:text-primary-300`}
             href={`#${lowerCasePage}`}
             onClick={()=> setSelectedPage(lowerCasePage)}
            >
                {page}
            </AnchorLink>
        </>
    );
};

export default Link;