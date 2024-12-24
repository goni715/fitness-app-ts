import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { TSelectedPage } from "./shared/types";
import Home from "./components/Home/Home";
import Benefits from "./components/Benefits/Benefits";


const App = () => {
  const [selectedPage, setSelectedPage] = useState<TSelectedPage>(TSelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(TSelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage}/>
      </div>
    </>
  );
};

export default App;
