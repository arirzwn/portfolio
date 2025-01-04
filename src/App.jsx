import { NavigasiBar } from "./layout/NavigasiBar.jsx";
import { Home } from "./pages/Home.jsx";
import { Footer } from "./layout/Footer.jsx";

function App() {
  return (
    <>
      <div className="bg-[#1e1f2b]">
        <NavigasiBar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
