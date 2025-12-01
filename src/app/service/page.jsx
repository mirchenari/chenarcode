import {
  faChartLine,
  faCode,
  faFileCode,
  faRocket,
  faShoppingCart,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "خدمات چنار کد | محمدمهدی میرچناری",
};

export default function ServicePage() {
  const services = [
    {
      name: "طراحی و توسعه وب‌سایت اختصاصی",
      icon: faCode,
      keywords: [
        "UI/UX اصولی",
        "پیاده‌سازی با React / Next.js",
        "سرعت بالا و سئو دوستانه",
      ],
    },
    {
      name: "طراحی سایت فروشگاهی",
      icon: faShoppingCart,
      keywords: [
        "سیستم سبد خرید و پرداخت",
        "مدیریت محصولات",
        "طراحی واکنش‌گرا و سریع",
      ],
    },
    {
      name: "طراحی لندینگ‌پیج حرفه‌ای",
      icon: faRocket,
      keywords: [
        "طراحی جذاب و مدرن",
        "مناسب معرفی محصول، رویداد یا دوره",
        "بهینه‌سازی برای تبدیل بهتر (Conversion)",
      ],
    },
    {
      name: "بهینه‌سازی سرعت و سئو",
      icon: faTachometerAlt,
      keywords: ["افزایش سرعت لود", "سئوی تکنیکال", "بهبود امتیاز PageSpeed"],
    },
    {
      name: "طراحی داشبورد و پنل مدیریت",
      icon: faChartLine,
      keywords: [
        "رابط کاربری مدرن",
        "کاملاً داینامیک",
        "مناسب استارتاپ‌ها و کسب‌وکارها",
      ],
    },
    {
      name: "تبدیل UI/طرح گرافیکی به کد",
      icon: faFileCode,
      keywords: [
        "تبدیل Figma به کد",
        "پیکسل پرفکت",
        "استفاده از اصول Clean Code",
      ],
    },
  ];

  return (
    <>
      <section className="mb-10 md:mt-10">
        <div>
          <h1 className="text-4xl font-extrabold">
            <span className="text-primary">خدمات </span>
            <span>من</span>
          </h1>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white py-5 rounded-xl shadow flex flex-col items-center gap-5 text-center hover:shadow-xl"
            >
              <div className="w-[60px] h-[60px] bg-primary rounded-full text-white flex justify-center items-center text-2xl">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div>
                <p className="text-xl font-bold">{item.name}</p>
              </div>
              <div>
                <ul className="flex flex-col gap-1">
                  {item.keywords.map((keyword, keywordIndex) => (
                    <li key={keywordIndex}>{keyword}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
