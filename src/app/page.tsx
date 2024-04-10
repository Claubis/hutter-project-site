import Image from "next/image";

import HomePage from "./HomePage/page";
import About from "./About/page";
import Services from "./Services/page";

export default function Home() {
  return (
    <main>
        <HomePage/>
        <About/>
        <Services/>
    </main>
  );
}
