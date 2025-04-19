import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
  openGraph: {
    description:
      "The official Next.js Course Dashboard, built with App Router.",
    // 可以添加其他 Open Graph 属性
    title: "Acme Dashboard",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // 相对路径，会自动与 metadataBase 组合
        width: 1200,
        height: 630,
        alt: "Acme Dashboard",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
