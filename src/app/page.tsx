

import HomePage from "./HomePage/page";
import About from "./About/page";
import Services from "./Services/page";
import Contact from "./Contact/page";
import Testimonial from "./Testimonial/page";

export default function Home() {
  return (
    <main>
        <HomePage/>
        <About/>
        <Services/>
        <Contact/>
        <Testimonial/>
    </main>
  );
}
