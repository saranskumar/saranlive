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
  title: "Saran S Kumar – AI & ML Engineer | Portfolio",
  description:
    "Saran S Kumar is an AI & ML engineer, developer, and technology enthusiast working on AI, cybersecurity, robotics, and scalable systems.",
  keywords: [
    "Saran S Kumar",
    "saranskumar",
    "AI developer",
    "ML engineer",
    "cybersecurity",
    "robotics",
  ],
  metadataBase: new URL("https://saranskumar.live"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Saran S Kumar" }],
  creator: "Saran S Kumar",
  openGraph: {
    title: "Saran S Kumar – AI & ML Engineer | Portfolio",
    description:
      "Saran S Kumar is an AI & ML engineer, developer, and technology enthusiast working on AI, cybersecurity, robotics, and scalable systems.",
    url: "https://saranskumar.live",
    siteName: "Saran S Kumar",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saran S Kumar – AI & ML Engineer | Portfolio",
    description:
      "Saran S Kumar is an AI & ML engineer, developer, and technology enthusiast working on AI, cybersecurity, robotics, and scalable systems.",
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

