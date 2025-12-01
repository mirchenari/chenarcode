import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const metadata = {
  title: "نمونه کارهای چنار کد | محمدمهدی میرچناری",
};

export default function PortfolioPage() {
  const portfolio = [
    {
      name: "فروشگاه اینترنتی پرواز دیجیتال",
      id: 1,
      link: "https://parvaz-digital.liara.run/",
    },
    {
      name: "سایت چنار کد",
      id: 2,
      link: "/",
    },
    {
      name: "فروشگاه اینترنتی پرواز دیجیتال",
      id: 1,
      link: "https://parvaz-digital.liara.run/",
    },
    {
      name: "فروشگاه اینترنتی پرواز دیجیتال",
      id: 1,
      link: "https://parvaz-digital.liara.run/",
    },
    {
      name: "فروشگاه اینترنتی پرواز دیجیتال",
      id: 1,
      link: "https://parvaz-digital.liara.run/",
    },
    {
      name: "فروشگاه اینترنتی پرواز دیجیتال",
      id: 1,
      link: "https://parvaz-digital.liara.run/",
    },
  ];

  return (
    <>
      <section className="mb-10 md:mt-10">
        <div>
          <h1 className="text-4xl font-extrabold">
            <span className="text-primary">نمونه </span>
            <span>کارها</span>
          </h1>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="w-[337px] h-[200px] mb-10 rounded-lg bg-whit grid grid-cols-4 grid-rows-4 bg-white pb-5 mini-shadow hover:scale-110"
            >
              <div className="relative rounded-lg overflow-hidden row-span-3 col-span-4">
                <Image
                  alt={item.name}
                  src={`/image/portfolio-${item.id}.png`}
                  fill
                />
              </div>
              <div className="font-bold text-lg col-span-3 self-center justify-self-center mt-5">
                <p>{item.name}</p>
              </div>
              <div className="justify-self-center self-center mt-5">
                <a
                  href={item.link}
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md hover:bg-primary"
                  id="portfolio-link"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
