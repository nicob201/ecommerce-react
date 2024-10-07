import Navbar from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!"/>
    </>
  );
}

export default App;
