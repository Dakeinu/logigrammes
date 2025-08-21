import "./globals.css";

export const metadata = {
  title: "Logigramme",
  description: "Logigramme jouable hébergé sur Vercel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
