"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Download, MapPin, Navigation, Clock, ArrowDown, Building, Route, Linkedin, Github, User } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"

export default function DeliniAboutPageClient() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const teamMembers = [
    {
      name: "عمر العتيبي",
      role: "مصمم ومطور الواجهات الامامية",
      linkedin:"https://www.linkedin.com/in/omarotaibi/",
      github: "https://github.com/Omar-Otaibi",
    },
    {
      name: "يزيد الجروان",
      role: "مطور الواجهة الخلفية",
      linkedin: "https://www.linkedin.com/in/yazeed-aljarwan-b86b06318/",
      github: "https://github.com/yazeedaljarwan",
    },
    {
      name: "عبدالله الداود",
      role: "مطور الخرائط التفاعلية",
      linkedin: "https://www.linkedin.com/in/abdullah-aldawood-7121b12a8/",
      github: "#",
    },
    {
      name: "انس الدريهم",
      role: "مطور الواجهة الخلفية",
      linkedin: "https://www.linkedin.com/in/anas-aldraihem-3ab48b2b8/",
      github: "https://github.com/Anasijd",
    },
    {
      name: "بدر الشهري",
      role: "مطور واجهات المستخدم",
      linkedin: "https://www.linkedin.com/in/%D8%A8%D8%AF%D8%B1-%D8%A7%D9%84%D8%B4%D9%87%D8%B1%D9%8A-634a49335/",
      github: "#",
    },

  ]

  return (
    <div dir="rtl" className="font-arabic">
      <div
        ref={containerRef}
        className="min-h-screen bg-gradient-to-br from-[#7BA7C7] via-[#5A8DB3] to-[#34495E] overflow-hidden"
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-gradient-to-br from-[#7BA7C7]/30 to-[#34495E]/30"
          />

          {/* Floating geometric shapes */}
          {/* <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute bottom-32 left-32 w-24 h-24 bg-[#7BA7C7]/20 rounded-full blur-lg"
            />
          </div> */}

          <motion.div style={{ y: textY }} className="relative z-10 text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-150"></div>
                <Image
                  src="/Vector.png"
                  alt="شعار تطبيق دلني"
                  width={300}
                  height={300}
                  className="mx-auto drop-shadow-2xl relative z-10"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto font-semibold"
            >
              خريطة تفاعلية ذكية لجامعة الملك سعود
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-white/85 mb-16 leading-relaxed max-w-3xl mx-auto"
            >
              اكتشف طريقك بسهولة داخل الحرم الجامعي ووصل إلى قاعاتك الدراسية في الوقت المحدد
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <ArrowDown className="w-10 h-10 text-white/70 mx-auto animate-bounce" />
            </motion.div>
          </motion.div>
        </section>

        {/* Introduction Section */}
        <section className="py-28 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-20 items-center"
            >
              <motion.div variants={fadeInUp} className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-[#7BA7C7] via-[#5A8DB3] to-[#34495E] p-12 rounded-3xl shadow-2xl">
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-10 shadow-inner">
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">الميزات الذكية</h3>
                    <ul className="space-y-6 text-white/95">
                      <li className="flex items-right gap-5 ">
                        <span className="text-lg">خرائط تفاعلية عالية الدقة للحرم الجامعي</span>
                        <MapPin className="w-6 h-6 text-white flex-shrink-0" />
                      </li>
                      <li className="flex items-center gap-5 flex-row-reverse">
                        <span className="text-lg">توجيه ذكي لأقصر الطرق إلى القاعات</span>
                        <Navigation className="w-6 h-6 text-white flex-shrink-0" />
                      </li>
                      <li className="flex items-center gap-5 flex-row-reverse">
                        <span className="text-lg">تنبيهات مواعيد المحاضرات والامتحانات</span>
                        <Clock className="w-6 h-6 text-white flex-shrink-0" />
                      </li>
                      <li className="flex items-center gap-5 flex-row-reverse">
                        <span className="text-lg">معلومات شاملة عن جميع المباني والمرافق</span>
                        <Building className="w-6 h-6 text-white flex-shrink-0" />
                      </li>
                      <li className="flex items-center gap-5 flex-row-reverse">
                        <span className="text-lg">حفظ المسارات المفضلة والمتكررة</span>
                        <Route className="w-6 h-6 text-white flex-shrink-0" />
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="order-1 md:order-2">
                <div className="bg-white rounded-3xl p-12 shadow-2xl">
                  <h2 className="text-5xl md:text-6xl font-bold text-[#34495E] mb-10 leading-tight">
                    دليلك الذكي في جامعة الملك سعود
                  </h2>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    دلني هو تطبيق الخرائط التفاعلية المصمم خصيصاً لطلاب وموظفي جامعة الملك سعود. يوفر التطبيق نظام ملاحة
                    متطور يساعدك في الوصول إلى وجهتك بأسرع وأسهل الطرق.
                  </p>
                  <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                    مع واجهة سهلة الاستخدام وميزات ذكية، لن تضيع في الحرم الجامعي مرة أخرى. اكتشف المباني، القاعات،
                    المكتبات، والمرافق الأخرى بكل سهولة.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 text-[#5A8DB3] bg-[#7BA7C7]/10 p-4 rounded-xl">
                      <MapPin className="w-8 h-8 flex-shrink-0" />
                      <span className="font-bold text-lg">دقة عالية</span>
                    </div>
                    <div className="flex items-center gap-4 text-[#5A8DB3] bg-[#7BA7C7]/10 p-4 rounded-xl">
                      <Navigation className="w-8 h-8" />
                      <span className="font-bold text-lg">توجيه ذكي</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-4 bg-[#34495E]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { number: "200+", label: "مبنى ومرفق" },
                { number: "1000+", label: "قاعة دراسية" },
                { number: "50000+", label: "طالب مستفيد" },
                { number: "99%", label: "دقة التوجيه" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
                >
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-white/80 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-28 px-4 bg-gradient-to-l from-[#34495E] via-[#5A8DB3] to-[#7BA7C7]">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-white mb-10">
                ابدأ رحلتك الجامعية بثقة
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-2xl text-white/95 mb-16 max-w-4xl mx-auto leading-relaxed">
                حمل تطبيق دلني الآن واستمتع بتجربة ملاحة سلسة داخل جامعة الملك سعود. لا تدع الوقت يضيع في البحث عن
                قاعاتك الدراسية.
              </motion.p>

              <motion.div variants={fadeInUp} className="mb-12">
                <a
                  href="https://expo.dev/accounts/omariv/projects/delni_test/builds/0f825e3b-b292-4e90-b936-85bf2ee69dea"
                  className="inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-[#34495E] hover:bg-white/95 text-xl px-16 py-10 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold hover:shadow-white/20"
                  >
                    <Download className="w-8 h-8 ml-4" />
                    تحميل التطبيق
                  </Button>
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <p className="text-white font-semibold">متوافق مع أندرويد</p>
                  <p className="text-white/80">الإصدار 6.0 وما فوق</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <p className="text-white font-semibold">حجم التطبيق</p>
                  <p className="text-white/80">73 ميجابايت</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <p className="text-white font-semibold">الإصدار الحالي</p>
                  <p className="text-white/80">0.6.1 قيد التطوير</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-28 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-[#34495E] mb-10">فريق التطوير</h2>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  مجموعة من طلاب جامعة الملك سعود الذين عملوا على تطوير هذا التطبيق لخدمة المجتمع الجامعي.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    variants={fadeInUp}
                    whileHover={{ y: -20, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 bg-white">
                      <CardContent className="p-10 text-center">
                        <div className="relative mb-8">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#7BA7C7] to-[#5A8DB3] rounded-full blur-lg opacity-30 scale-110"></div>
                          <div className="relative z-10 w-40 h-40 mx-auto bg-[#0077B5] rounded-full flex items-center justify-center border-4 border-[#7BA7C7]/50 shadow-xl">
                            <User className="w-20 h-20 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#34495E] mb-4">{member.name}</h3>
                        <p className="text-[#5A8DB3] font-semibold text-lg mb-6">{member.role}</p>
                        <div className="flex justify-center gap-4">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-12 h-12 bg-[#0077B5] hover:bg-[#005885] text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                          >
                            <Linkedin className="w-6 h-6" />
                          </a>
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-12 h-12 bg-[#333333] hover:bg-[#24292e] text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                          >
                            <Github className="w-6 h-6" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-4 bg-[#34495E] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <Image src="/Vector.png" alt="شعار دلني" width={120} height={120} className="mx-auto opacity-90" />
              </div>
              <p className="text-white/90 mb-6 text-xl">تطبيق الخرائط التفاعلية لجامعة الملك سعود</p>
              <p className="text-white/70 mb-4 text-lg">© 2025 دلني. جميع الحقوق محفوظة.</p>
              <p className="text-white/60 text-base">مطور بفخر لخدمة المجتمع الجامعي</p>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  )
}
