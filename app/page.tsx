import DeliniAboutPageClient from "./DeliniAboutPageClient"

export const metadata = {
  title: "دلني",
  description: "خريطة تفاعلية ذكية لجامعة الملك سعود - اكتشف طريقك بسهولة داخل الحرم الجامعي",
  keywords: "دلني، جامعة الملك سعود، خريطة تفاعلية، ملاحة، طلاب، KSU",
  authors: [{ name: "فريق دلني" }],
  creator: "فريق دلني",
  publisher: "دلني",
  robots: "index, follow",
}
export default function DeliniAboutPage() {
  return <DeliniAboutPageClient />
}
