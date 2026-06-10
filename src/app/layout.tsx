import "./globals.css";
import ScrollToTop from "@/app/components/scroll-to-top";

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { lang } = await params;
  const currentLang = lang || "en";

  return (
    <html lang={currentLang}>
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}