import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ButtonMain from "./ui/Buttons/ButtonMain/ButtonMain";
import ButtonNav from "./ui/Buttons/ButtonNav/ButtonNav";
import ButtonSecondary from "./ui/Buttons/ButtonSecondary/ButtonSecondary";

function App() {
  return (
    <div className="App">
      <Header />
      <ButtonMain />
      <ButtonSecondary />
      <ButtonNav />
      <Footer />
    </div>
  );
}

export default App;
