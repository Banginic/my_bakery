import React from "react";
import { Hero, Services, Contact, About } from "@/components/index";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
