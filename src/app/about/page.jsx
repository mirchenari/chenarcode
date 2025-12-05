import Btn from "@/components/UI/btn";
import Image from "next/image";

export const metadata = {
  title: "درباره چنار کد | محمدمهدی میرچناری",
};

export default function AboutPage() {
  return (
    <>
      <section className="mb-10 md:mt-10">
        <h1 className="text-4xl font-extrabold">
          <span className="text-primary">درباره </span>
          <span>من</span>
        </h1>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Image
            alt="چنار کد"
            src="/image/about-banner.jpeg"
            width={500}
            height={500}
            className="border-15 border-white rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-3xl font-extrabold">
              محمدمهدی میرچناری | توسعه انواع سایت ها با چنار کد
            </h2>
          </div>
          <div>
            <p className="text-justify text-gray-600">
              من محمدمهدی میرچناری هستم؛ دانشجوی پزشکی که در کنار مسیر دانشگاهی،
              علاقه‌ٔ جدی و قدیمی به دنیای برنامه‌نویسی دارد. از همان ابتدا
              ساختن چیزهایی که هم زیبا باشند و هم درست کار کنند برای من جذاب بود
              و همین باعث شد توسعه وب را به‌طور حرفه‌ای دنبال کنم. در چنارکد،
              تلاش من این است که هر پروژه را با دقت، سلیقه و استانداردهای درست
              پیش ببرم؛ از طراحی رابط کاربری تا پیاده‌سازی با تکنولوژی‌های مدرن
              مثل React و Next.js. باور دارم یک وب‌سایت خوب باید ترکیبی از سرعت،
              سادگی و تجربه کاربری روان باشد. هدفم این است که در کنار تحصیل،
              مسیر توسعه وب را جدی و پایدار ادامه بدهم و برای هر مشتری فضایی
              بسازم که به آن اعتماد کند و نتیجه‌ای بگیرد که شایسته‌اش است.
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
              <li>
                <span className="text-primary">سن: </span>
                <span>21</span>
              </li>
              <li>
                <span className="text-primary">شغل: </span>
                <span>توسعه دهنده وب سایت</span>
              </li>
              <li>
                <span className="text-primary">شماره تماس: </span>
                <span dir="ltr">0921-204-8035</span>
              </li>
              <li>
                <span className="text-primary">ایمیل: </span>
                <span>chenarcode@gmail.com</span>
              </li>
              <li>
                <span className="text-primary">فریلنسر: </span>
                <span>available</span>
              </li>
              <li>
                <span className="text-primary">کشور: </span>
                <span>ایران</span>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <Btn href="/dl/resume.pdf" target="_blank">دانلود رزومه</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
