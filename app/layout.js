import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://faisalab.ca";
const siteTitle = "Faisal Abuosbeh | Portfolio";
const siteDescription =
  "Systems Design Engineering student at the University of Waterloo. Software, AI, and projects worth building.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Faisal Abuosbeh",
    title: siteTitle,
    description: siteDescription,
    // Absolute URL via metadataBase + opengraph-image.js file convention
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
