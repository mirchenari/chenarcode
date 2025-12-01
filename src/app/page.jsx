import Btn from "@/components/UI/btn";
import TypeAnimation from "@/components/UI/typeAnimation";
import Image from "next/image";

export default function Page() {
  return (
    <section className="flex flex-col sm:flex-row gap-5 items-center justify-center h-full">
      <div className="flex-1 flex flex-col gap-3">
        <div>
          <p className="text-primary text-lg">سلام...</p>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">
            <span>من </span>
            <span className="hidden" data="for-seo">
              چنار کد | محمدمهدی میرچناری
            </span>
            <TypeAnimation
              className="text-primary"
              texts={["محمدمهدی میرچناری", "چنار کد"]}
            />
            <span> هستم</span>
          </h1>
        </div>
        <div>
          <h3 className="text-2xl">توسعه دهنده وب سایت</h3>
        </div>
        <div>
          <p className="text-justify text-gray-600">
            من یه توسعه‌دهنده وب هستم که عاشق ساختن سایت‌های سریع، تمیز و
            کاربرپسندم. همیشه سعی می‌کنم هر ایده‌ای رو به بهترین شکل ممکن تبدیل
            به یک تجربه جذاب کنم. بیشتر با React و Next.js کار می‌کنم و دوست
            دارم پروژه‌هایی بسازم که هم ظاهر خوبی داشته باشن و هم استفاده ازشون
            لذت‌بخش باشه.
          </p>
        </div>
        <div className="my-5">
          <Btn href="/about">منو بیشتر بشناس</Btn>
        </div>
      </div>
      <div className="flex-1">
        <Image
          alt="چنار کد"
          src="/image/home-img.png"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
