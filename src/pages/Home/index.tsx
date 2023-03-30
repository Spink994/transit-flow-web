import Layout from "../../components/Layout";
import Hero from "./components/Hero";
import Logistics from "./components/Logistics";
import Transporting from "./components/Transporting";
import Testimonials from "./components/Testimonials";
import WhatWeDo from "./components/WhatWeDo";
import Opportunity from "./components/Opportunity";
import Experts from "./components/Experts";
import GetInTouch from "./components/GetInTouch";
import Blog from "./components/Blog";

function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <WhatWeDo />
        <Logistics />
        <Transporting />
        <Testimonials />
        <Opportunity />
        <Experts />
        <GetInTouch />
        <Blog />
      </>
    </Layout>
  );
}

export default Home;
