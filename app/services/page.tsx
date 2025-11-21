import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import WeOffer from "@/app/WeOffer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-white">
        <section id="services" className="bg-white pt-8 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-gray-800 text-3xl md:text-5xl font-normal mb-12 font-serif">
              What We Do
            </h1>

            <div className="space-y-12">
              <div>
                <h3 className="text-left text-gray-800 text-2xl md:text-3xl font-normal mb-4 font-serif">
                  Tax Planning and Compliance Services
                </h3>
                <p className="text-left text-gray-700 text-base md:text-lg leading-relaxed font-avenir mb-4">
                  We provide tax return compliance services for individuals and
                  businesses. We continuously monitor federal, state, and local
                  tax law changes to help you minimize current and future tax
                  liabilities. Our services include:
                </p>
                <ul className="text-left text-gray-700 text-base md:text-lg leading-relaxed font-avenir list-disc list-inside space-y-2">
                  <li>Personal tax returns</li>
                  <li>
                    Business tax returns (S Corporations, partnerships, LLCs,
                    sole proprietorships)
                  </li>
                  <li>Corporate tax returns</li>
                  <li>Other tax returns (trusts, gifts, foundations)</li>
                  <li>Tax representation for audits</li>
                  <li>Amended tax returns</li>
                </ul>
              </div>

              <div>
                <h3 className="text-left text-gray-800 text-2xl md:text-3xl font-normal mb-4 font-serif">
                  Accounting and Bookkeeping Services
                </h3>
                <p className="text-left text-gray-700 text-base md:text-lg leading-relaxed font-avenir mb-4">
                  We prepare financial statements in accordance with Generally
                  Accepted Accounting Principles (GAAP) for use by banks,
                  investors, and other third parties. Our comprehensive
                  accounting services include:
                </p>
                <ul className="text-left text-gray-700 text-base md:text-lg leading-relaxed font-avenir list-disc list-inside space-y-2">
                  <li>Monthly, quarterly, or annual bookkeeping</li>
                  <li>Management of accounts payable and receivable</li>
                  <li>
                    Preparation of general ledgers and monthly financial
                    statements
                  </li>
                  <li>Payroll setup with trusted third-party providers</li>
                  <li>QuickBooks consulting and troubleshooting</li>
                  <li>Sales tax return preparation</li>
                  <li>Form 1099 preparation</li>
                  <li>
                    Assistance with letters and notices related to your accounts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer contactOnly hideChatButton />
    </>
  );
}
