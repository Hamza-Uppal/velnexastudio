import "./globals.css";

export const metadata = {
  title: "Velnexa Studio | Premium Websites & Business Systems",
  description:
    "Velnexa Studio builds premium websites, redesigns outdated websites, and develops business systems for companies worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}