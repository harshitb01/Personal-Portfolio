import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Showcase from "./components/showcase/TopShowcase";
import ShowcaseBriefing from "./components/showcase/TopShowcaseBriefing";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


const App = () => {
    return (
        <>
            <Nav></Nav>
            <Header></Header>
            <About></About>
            {/* <Showcase></Showcase> */}
            {/* <Portfolio></Portfolio> */}
            <Experience></Experience>
            <Services></Services>
            <ShowcaseBriefing></ShowcaseBriefing>
            {/* <Testimonials></Testimonials> */}
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default App;
