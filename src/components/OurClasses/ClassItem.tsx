
interface TProps {
    name: string;
    description?: string;
    image: string;
  }

const ClassItem = ({name, description, image} : TProps) => {
    return (
        <>
            <h1>Class Item</h1>
        </>
    );
};

export default ClassItem;