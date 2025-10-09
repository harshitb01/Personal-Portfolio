import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import LOGO from "./assets/LOGO.png";
import IMGDreadManor from "./assets/DreadManor.webp";
import IMGServices from "./assets/bg-texture.png";
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
    const section = typeof window !== "undefined" ? window.location.hash || "#home" : "#home";
    const og = useMemo(() => {
        const base = {
            url: typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}${window.location.hash}` : "",
            image: LOGO,
            title: "Harshit Bhandari | Unity Game Developer Portfolio",
            description: "Unity games, AI systems, multiplayer gameplay, and experimental interactive projects.",
        };
        if (section === "#about") {
            return {
                ...base,
                title: "About Harshit Bhandari — Unity Game Developer",
                description: "Background, skills, and focus areas: Unity, C#, performance, and player experience.",
            };
        }
        if (section === "#experience") {
            return {
                ...base,
                title: "Skills — Unity, C#, Blender, Multiplayer, Tooling",
                description: "Languages and tools used across shipped projects and prototypes.",
                image: IMGDreadManor,
            };
        }
        if (section === "#services") {
            return {
                ...base,
                title: "Work — Selected Projects and Experience",
                description: "Highlights: Dread Manor, NGO projects, arcade experiences, and more.",
                image: IMGServices,
            };
        }
        return base;
    }, [section]);

    return (
        <>
            <Helmet>
                <title>Harshit Bhandari | Unity Game Developer Portfolio</title>
                <meta name="description" content="Harshit Bhandari | Unity Game Developer — Portfolio featuring Dread Manor, AI systems, multiplayer gameplay, and experimental interactive creations built with C# & Blender." />
                <meta name="theme-color" content="#000000" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:title" content={og.title} />
                <meta property="og:description" content={og.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={og.url} />
                <meta property="og:image" content={og.image} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={og.title} />
                <meta name="twitter:description" content={og.description} />
                <meta name="twitter:image" content={og.image} />

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
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: og.title,
                        description: og.description,
                        url: og.url,
                        inLanguage: "en",
                        isPartOf: {
                            "@type": "WebSite",
                            name: "Harshit Bhandari Portfolio",
                        },
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? `${window.location.origin}/#home` : undefined },
                            { "@type": "ListItem", position: 2, name: "About", item: typeof window !== "undefined" ? `${window.location.origin}/#about` : undefined },
                            { "@type": "ListItem", position: 3, name: "Skills", item: typeof window !== "undefined" ? `${window.location.origin}/#experience` : undefined },
                            { "@type": "ListItem", position: 4, name: "Work", item: typeof window !== "undefined" ? `${window.location.origin}/#services` : undefined },
                            { "@type": "ListItem", position: 5, name: "Contact", item: typeof window !== "undefined" ? `${window.location.origin}/#contact` : undefined },
                        ],
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
