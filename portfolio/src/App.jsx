import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden"> 
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;