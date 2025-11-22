import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prabath Wijethilaka",
  description: "Portfolio of Prabath Wijethilaka - Electronic & Telecommunication Engineering undergraduate specializing in FPGA Design, RISC-V, and Hardware Acceleration",
  keywords: ["FPGA", "Hardware Acceleration", "RISC-V", "Computer Architecture", "Portfolio", "Engineering"],
  authors: [{ name: "Prabath Wijethilaka" }],
  openGraph: {
    title: "Prabath Wijethilaka",
    description: "Portfolio showcasing FPGA projects, hardware acceleration work, and engineering achievements",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <Navbar />
          <main className="pt-16 min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

