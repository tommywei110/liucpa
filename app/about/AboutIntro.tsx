"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function AboutIntro() {
  const { language } = useLanguage();
  const bio = `CPA, Founder

Originally from Jinzhou, Liaoning, a small town in northeast China, Alex earned her bachelor’s degree from East China Normal University in Shanghai and her Master of Accounting from Washington University in St. Louis. She began her career with the Big 4, where she developed a strong foundation in individual, trust, gift, as well as partnership and S-Corp taxation. Later, she expanded her skills in bookkeeping, payroll, and sales tax compliance while working closely with clients in industries such as restaurants, construction, healthcare, non-profits, and retail.
These experiences shaped Alex’s belief that exceptional accounting services should be accessible to all—not just large corporations or private equity firms. She founded her own practice to bring the same level of technical excellence found at major firms to small business owners and individuals, offering clear, proactive tax planning and dependable accounting support.
Having spent over twenty years in China before moving to the United States, Alex understands the challenges of starting anew and building lasting financial stability in a different country. As a first-generation immigrant, she is passionate about helping others navigate complex tax and accounting landscapes, reduce their tax burdens, and make confident decisions for their future.
Alex takes pride in her precision, integrity, and commitment to her clients’ success. Her goal is to help clients save time, gain peace of mind, and focus on what truly matters—knowing their books and taxes are handled with care.
Outside of work, Alex enjoys baking, gardening, snowboarding, and mountain biking with her husband, fully embracing Utah’s beautiful outdoors and vibrant seasons.`;

  return (
    <section className="bg-white pt-28 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Text Only */}
        <div>
          <h1
            className={`text-gray-800 text-3xl md:text-5xl font-normal mb-4 ${
              language === "zh" ? "font-noto-serif-sc" : "font-serif"
            }`}
          >
            {"Alex Liu"}
          </h1>
          {bio
            .split(/\n{2,}|\n(?=[A-Z])/)
            .map((para) => para.trim())
            .filter(Boolean)
            .map((para, idx) => (
              <p
                key={idx}
                className={`text-gray-700 leading-relaxed text-base md:text-lg font-avenir whitespace-pre-line text-left ${
                  idx === 0 ? "mb-6" : "mb-[0.7rem]"
                }`}
              >
                {para}
              </p>
            ))}
          {/* Round profile image */}
          <div className="mt-6 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-gray-300 relative">
            <Image
              src="/aboutpic.jpg"
              alt="Portrait of Alex Liu, CPA"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
