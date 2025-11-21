import Header from "@/components/shared/Header";
import Hero from "@/app/Hero";
import AboutMe from "@/app/AboutMe";
import WeOffer from "@/app/WeOffer";
import Testimonials from "@/app/Testimonials";
import OurGuarantee from "@/app/OurGuarantee";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <AboutMe />
        <WeOffer />
        <Testimonials />
        <OurGuarantee />
        <Footer hideChatButton />
      </main>
    </>
  );
}
