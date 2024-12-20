type TProps = {
    name: string;
}

const About = ({name} : TProps) => {
    return (
        <>
            This is About Page 
            {name}
        </>
    );
};

export default About;