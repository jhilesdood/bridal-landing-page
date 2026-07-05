import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "./hooks/useLenis";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { Preloader } from "./components/Preloader";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Why } from "./components/Why";
import { Sessions } from "./components/Sessions";
import { Wordmark } from "./components/Wordmark";
import { Packages } from "./components/Packages";
import { Delivery } from "./components/Delivery";
import { Process } from "./components/Process";
import { Reel } from "./components/Reel";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { VideoModal } from "./components/VideoModal";
import { REEL_SRC, REEL_POSTER } from "./data/site";

export default function App() {
  const reduced = useReducedMotion();
  const [loading, setLoading] = useState(true);
  const [reelOpen, setReelOpen] = useState(false);

  useLenis(!loading && !reduced);

  // Prevent scroll under the preloader.
  useEffect(() => {
    document.documentElement.style.overflow = loading ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* page-wide cinematic grain */}
      <div className="grain-fixed" aria-hidden />

      <ScrollProgress />
      <CustomCursor />
      <Nav />

      <main>
        <Hero onOpenReel={() => setReelOpen(true)} />
        <Marquee />
        <Why />
        <Sessions />
        <Wordmark />
        <Packages />
        <Delivery />
        <Process />
        <Reel onOpenReel={() => setReelOpen(true)} />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />

      <VideoModal
        open={reelOpen}
        onClose={() => setReelOpen(false)}
        src={REEL_SRC}
        poster={REEL_POSTER}
      />
    </>
  );
}
