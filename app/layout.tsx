import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Saran S Kumar - AI & ML Engineer | Portfolio",
    template: "%s | Saran S Kumar",
  },
  description:
    "Saran S Kumar - Computer Science (AI & ML) student at SCTCE, IEEE volunteer, hackathon winner, and systems builder. Working on AI, robotics, cybersecurity, and scalable web systems.",
  keywords: [
    "Saran S Kumar",
    "saranskumar",
    "saranskumar.live",
    "AI ML engineer Kerala",
    "AI developer India",
    "computer science student SCTCE",
    "IEEE SCT SB",
    "robotics hackathon winner",
    "AIROB 2025",
    "DECODEX CTF winner",
    "Next.js developer",
    "FastAPI Python developer",
    "embedded systems ESP32",
    "workflow automation AI",
    "cybersecurity student India",
    "full stack developer Trivandrum",
  ],
  metadataBase: new URL("https://saranskumar.live"),
  alternates: {
    canonical: "https://saranskumar.live",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "Saran S Kumar", url: "https://saranskumar.live" }],
  creator: "Saran S Kumar",
  publisher: "Saran S Kumar",
  category: "Technology, Engineering, Portfolio",
  openGraph: {
    title: "Saran S Kumar - AI & ML Engineer | Portfolio",
    description:
      "CS (AI & ML) student at SCTCE, IEEE volunteer, hackathon winner, and systems builder. Robotics, cybersecurity, AI, and full-stack engineering.",
    url: "https://saranskumar.live",
    siteName: "Saran S Kumar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://saranskumar.live/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saran S Kumar - AI & ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SaranSKumar13",
    creator: "@SaranSKumar13",
    title: "Saran S Kumar - AI & ML Engineer | Portfolio",
    description:
      "CS (AI & ML) student, IEEE volunteer, hackathon winner. Building AI, robotics, and systems from first principles.",
    images: ["https://saranskumar.live/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

