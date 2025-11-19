import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Script from "next/script";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-white">
        <section className="bg-white pt-28 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-gray-800 text-3xl md:text-5xl font-normal mb-8 font-serif">
              Get In Touch
            </h1>
            <div className="w-full mb-8">
              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/jyliu0220/30min"
                style={{ minWidth: "320px", height: "700px", width: "100%" }}
              />
            </div>
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
            />

            <div className="mt-8 space-y-3 text-gray-700 text-base md:text-lg font-avenir flex flex-col items-start">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Phone: 801-895-2011</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email: alex@liucpa.com</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Business Hours: Mon - Fri, 10am - 6pm</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer hideGetInTouch hideChatButton />
    </>
  );
}
