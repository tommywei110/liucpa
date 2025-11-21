import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-white">
        <section className="bg-white pt-8 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-gray-800 text-3xl md:text-5xl font-normal mb-12 font-serif">
              Pricing
            </h1>

            <div className="space-y-6">
              <p className="text-gray-700 text-base md:text-lg font-avenir leading-relaxed">
                For tax preparation, cost depends on your filing needs, return
                complexity, and the level of support you want throughout the
                process. The cost varies based on your specific tax situation.
              </p>
              <p className="text-gray-700 text-base md:text-lg font-avenir leading-relaxed">
                For bookkeeping, your business's transaction volume, number of
                accounts and entities, industry complexity, sales tax filings,
                and catch-up/cleanup work are some of the biggest drivers that
                affect price.
              </p>
              <p className="text-gray-700 text-base md:text-lg font-avenir leading-relaxed">
                To provide clear pricing, we use a hybrid approach—charging a
                flat base fee for standard filing and an hourly rate for work
                beyond that scope. This flexible structure allows us to tailor
                pricing based on workload. To get an accurate quote, simply fill
                out{" "}
                <a
                  href="https://form.jotform.com/253210540369148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1d3859] hover:text-[#152a43] underline transition"
                >
                  a short questionnaire
                </a>{" "}
                to share your tax details, so we can customize the flat fee to
                your needs.
              </p>
              <p className="text-gray-700 text-base md:text-lg font-avenir leading-relaxed">
                As a new CPA firm, we're offering introductory pricing during
                this startup phase. Fees are currently set lower to build
                relationships and serve smaller businesses. As the firm grows
                and I expand services, pricing will evolve to continue
                reflecting the value and support you receive.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer contactOnly hideChatButton />
    </>
  );
}
