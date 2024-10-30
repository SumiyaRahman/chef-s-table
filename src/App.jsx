import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";

const App = () => {
  return (
    <div className="container mx-auto px-5">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our recipes section */}
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;