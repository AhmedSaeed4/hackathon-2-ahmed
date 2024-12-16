import Navbar from "./components/NavBar";
import Hero from "./components/hero";
import Features from "./components/features";
import Listings from "./components/Listings";
import Idea from "./components/Idea";
import Email from "./components/Email";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Features/>
      <Listings />
      <Idea/>
      <Email/> 
      <Footer />
    </div>
  );
}
