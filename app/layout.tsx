import type { Metadata } from "next";
import {
  Montserrat,
  Open_Sans,
  Playfair_Display,
  Rock_Salt,
  Cormorant,
  Merriweather,
  PT_Serif,
  Source_Serif_4,
  Libre_Baskerville,
  Liu_Jian_Mao_Cao,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const rockSalt = Rock_Salt({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-rock-salt",
  display: "swap",
});

const cormorant = Cormorant({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-serif",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-source-serif-4",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const liuJianMaoCao = Liu_Jian_Mao_Cao({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-liu-jian-mao-cao",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-serif-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tax Experts - Professional CPA Services",
  description:
    "Tax advisory for individuals & small businesses. Our Certified Accountants are experts in providing cutting edge tax advice for both personal and corporate clients.",
  icons: {
    icon: [{ url: "/logo.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/logo.png", sizes: "192x192", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${playfairDisplay.variable} ${rockSalt.variable} ${cormorant.variable} ${merriweather.variable} ${ptSerif.variable} ${sourceSerif4.variable} ${libreBaskerville.variable} ${liuJianMaoCao.variable} ${notoSansSC.variable} ${notoSerifSC.variable}`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
