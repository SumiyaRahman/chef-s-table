import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import SideBar from "./Components/SideBar";

const App = () => {
  return (
    <div className="px-5">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our recipes section */}
      <OurRecipes></OurRecipes>

      {/* recipe cards section */}
      <section className="container mx-auto grid grid-cols-3 gap-6">
        {/* card section */}
        <div className="col-span-2">
          <Recipes></Recipes>
        </div>
        {/* sidebar */}
        <div>
          <SideBar></SideBar>
        </div>
      </section>
    </div>
  );
};

export default App;
