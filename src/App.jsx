import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Showcase from "./components/showcase/TopShowcase";
import ShowcaseBriefing from "./components/showcase/TopShowcaseBriefing";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <Showcase></Showcase>
            <ShowcaseBriefing></ShowcaseBriefing>
            <About></About>
            <Portfolio></Portfolio>
            <Experience></Experience>
            <Services></Services>
            {/* <Testimonials></Testimonials> */}
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default App;
