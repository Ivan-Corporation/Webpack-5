// No need to import "react" just for JSX in React 17+
import Recipes from "./Recipes";
import kihot from "../images/kihot.png";
import Penultimo from "../images/Penultimo.jpg";

import "../styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Koma Human</h1>
          <img src={kihot} alt="kihot" width="250" />
          <img src={Penultimo} alt="Penultimo" width="250" />
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
