import AnchorLink from "react-anchor-link-smooth-scroll";

type TProps = {
    page: string,
    
}


const Link = ({ page }) => {
    return (
        <>
            <AnchorLink>
                {page}
            </AnchorLink>
        </>
    );
};

export default Link;