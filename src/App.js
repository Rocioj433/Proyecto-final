import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import Home from "./Components/home";
import HomeScreen from "./screens/HomeScreen";
import Nosotros from "./Components/Nosotros";
import Newsletter from "./Components/newsletter";
import Footer from "./Components/footer";
import Separator from "./Components"; 


function App() {
  return (
    <div className='App'>
      <Nav />
      <Separator />
      <Home />
      <Separator />
      <Cart />
      <Separator />
      <HomeScreen />
      <Separator />
      <Nosotros/>
      <Separator />
      <Newsletter/>
      <Separator />
      <Footer/> 
    </div>
  );
}


export default App;
