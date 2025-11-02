import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WeOffer from "@/components/WeOffer";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <WeOffer />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
