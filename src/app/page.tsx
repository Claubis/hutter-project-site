import Image from "next/image";

import HomePage from "./HomePage/page";
import About from "./About/page";

export default function Home() {
  return (
    <main>
        <HomePage/>
        <About/>
    </main>
  );
}
