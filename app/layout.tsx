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
    default: "Saran S Kumar — Engineer",
    template: "%s | Saran S Kumar",
  },
  description:
    "CS (AI & ML) student and builder of real-world systems. Embedded systems, full-stack engineering, robotics, and AI exploration. Based in Trivandrum, Kerala.",
  keywords: [
    "Saran S Kumar",
    "embedded systems",
    "full-stack engineer",
    "robotics",
    "IoT",
    "Next.js",
    "Kerala engineer",
  ],
  authors: [{ name: "Saran S Kumar" }],
  openGraph: {
    title: "Saran S Kumar — Engineer",
    description: "Builder of real-world systems across embedded, full-stack, robotics, and AI.",
    siteName: "saranskumar.live",
    locale: "en_IN",
    type: "website",
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
          defaultTheme="dark"
          enableSystem
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
