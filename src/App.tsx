import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { TSelectedPage } from "./shared/types";


const App = () => {
  const [selectedPage, setSelectedPage] = useState<TSelectedPage>(TSelectedPage.Home);

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      </div>
    </>
  );
};

export default App;
