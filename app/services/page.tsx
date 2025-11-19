import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import WeOffer from "@/app/WeOffer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-white">
        <section id="services">
          <WeOffer
            backgroundClassName="bg-white"
            showCta={false}
            titleOverride="What We Do"
            titleClassNameOverride="text-left text-gray-800 text-3xl md:text-5xl font-normal mb-8 font-serif"
            hideServicesGrid
          />

          <div className="max-w-5xl mx-auto mt-8 space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="text-left text-gray-800 text-2xl md:text-3xl font-normal mb-4 font-serif">
                Comprehensive Tax Services
              </h3>
              <p className="text-left text-gray-700 text-base md:text-lg leading-relaxed font-avenir">
                Navigating taxes can feel like a lot, but working with a
                professional who understands your needs can make all the
                difference. Everyones situation is differentwhether you just
                need a straightforward return filed or you're dealing with more
                complex business requirementsso we take the time to understand
                what matters most to you. Our goal is to give you clarity and
                confidence throughout the year by breaking things down in a way
                thats easy to follow and offering strategies that align with
                your personal or business goals. From proactive planning to
                supporting you when things change, were here to provide steady
                guidance and practical solutions, so you can worry less about
                taxes and stay focused on whats most important.
              </p>
            </div>

            <div>
              <h3 className="text-left text-gray-800 text-2xl md:text-3xl font-normal mb-4 font-serif">
                Bookkeeping Services
              </h3>
              <p className="text-left text-gray-700 text-base md:text-lg leading-relaxed font-avenir">
                {/* Replace this text with your own explanation of Bookkeeping Services. */}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer contactOnly />
    </>
  );
}
