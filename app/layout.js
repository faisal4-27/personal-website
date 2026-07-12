import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Faisal Abuosbeh | Portfolio",
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
