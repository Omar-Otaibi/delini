import DeliniAboutPageClient from "./DeliniAboutPageClient"

export const metadata = {
  title: "دلني",
  description: "خريطة تفاعلية ذكية لجامعة الملك سعود - اكتشف طريقك بسهولة داخل الحرم الجامعي",
  keywords: "دلني، جامعة الملك سعود، خريطة تفاعلية، ملاحة، طلاب، KSU",
  authors: [{ name: "فريق دلني" }],
  creator: "فريق دلني",
  publisher: "دلني",
  robots: "index, follow",

  // Open Graph metadata for social sharing
  openGraph: {
    title: "دلني - خريطة تفاعلية ذكية لجامعة الملك سعود",
    description: "اكتشف طريقك بسهولة داخل الحرم الجامعي ووصل إلى قاعاتك الدراسية في الوقت المحدد",
    url: "https://about-delini.vercel.app",
    siteName: "دلني",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://about-delini.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "دلني - خريطة تفاعلية ذكية لجامعة الملك سعود",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "دلني - خريطة تفاعلية ذكية لجامعة الملك سعود",
    description: "اكتشف طريقك بسهولة داخل الحرم الجامعي ووصل إلى قاعاتك الدراسية في الوقت المحدد",
    images: ["https://about-delini.vercel.app/og-image.png"],
  },

  // Additional metadata
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7BA7C7",

  // Force refresh
  other: {
    "og:image:secure_url": "https://about-delini.vercel.app/og-image.png",
    "og:updated_time": new Date().toISOString(),
  },
}

export default function DeliniAboutPage() {
  return <DeliniAboutPageClient />
}
