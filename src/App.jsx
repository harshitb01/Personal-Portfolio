import React from "react";
import { Helmet } from "react-helmet-async";
import LOGO from "./assets/LOGO.png";
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
            <Helmet>
                <title>Harshit Bhandari | Unity Game Developer Portfolio</title>
                <meta name="description" content="Harshit Bhandari | Unity Game Developer — Portfolio featuring Dread Manor, AI systems, multiplayer gameplay, and experimental interactive creations built with C# & Blender." />
                <meta name="theme-color" content="#000000" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:title" content="Harshit Bhandari | Unity Game Developer Portfolio" />
                <meta property="og:description" content="Portfolio featuring Unity games, AI systems, multiplayer gameplay, and experimental interactive projects." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}` : ""} />
                <meta property="og:image" content={LOGO} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Harshit Bhandari | Unity Game Developer Portfolio" />
                <meta name="twitter:description" content="Unity games, AI systems, multiplayer gameplay, and experimental interactive projects." />
                <meta name="twitter:image" content={LOGO} />

                {/* Canonical */}
                <link rel="canonical" href={typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}` : ""} />

                {/* Favicon / Icons */}
                <link rel="icon" href={LOGO} />
                <link rel="apple-touch-icon" href={LOGO} />

                {/* JSON-LD: Person and WebSite */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Harshit Bhandari",
                        jobTitle: "Unity Game Developer",
                        url: typeof window !== "undefined" ? `${window.location.origin}` : undefined,
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "Harshit Bhandari Portfolio",
                        url: typeof window !== "undefined" ? `${window.location.origin}` : undefined,
                        inLanguage: "en",
                    })}
                </script>
            </Helmet>
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
