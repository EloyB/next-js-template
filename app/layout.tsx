import CookieConsent from "@/components/global/cookie-consent";
import "./globals.css";
import Navbar from "@/components/custom/navbar";

export const metadata = {
  title: "Bakkerij Keust",
  description: "Elke dag verse broden",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="font-montserrat">
        <Navbar />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
