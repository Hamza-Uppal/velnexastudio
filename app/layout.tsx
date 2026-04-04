import "./globals.css";

export const metadata = {
  title: "Velnexa Studio | Websites, Systems & Digital Solutions",
  description:
    "Velnexa Studio builds premium websites, redesigns outdated websites, and develops business systems, dashboards, and digital solutions for modern businesses.",
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