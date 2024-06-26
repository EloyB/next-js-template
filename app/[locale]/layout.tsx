import CookieConsent from "@/components/global/cookie-consent";
import "./globals.css";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
