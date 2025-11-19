import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import AboutIntro from "@/app/about/AboutIntro";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <AboutIntro />
      </main>
      <Footer contactOnly />
    </>
  );
}
