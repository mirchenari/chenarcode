import ContactForm from "@/components/client/contactForm";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "تماس با من | محمدمهدی میرچناری",
};

export default function ContactPage() {
  return (
    <>
      <section className="mb-10 md:mt-10">
        <div>
          <h1 className="text-4xl font-extrabold">
            <span className="text-primary">تماس </span>
            <span>با من</span>
          </h1>
        </div>
      </section>
      <section className="flex flex-col md:grid grid-cols-3 gap-10">
        <ContactForm />
        <div className="flex flex-col gap-5 *:hover:scale-105">
          <a href="mailto:chenarcode@gmail.com">
            <div className="bg-white rounded-lg mini-shadow text-center flex flex-col items-center justify-center gap-2.5 py-5">
              <div className="w-[50px] h-[50px] rounded-full bg-primary text-white flex justify-center items-center text-xl">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h2 className="text-xl font-bold">ایمیل</h2>
              </div>
              <div>
                <p>chenarcode@gmail.com</p>
              </div>
            </div>
          </a>
          <a href="tel:+989212048035">
            <div className="bg-white rounded-lg mini-shadow text-center flex flex-col items-center justify-center gap-2.5 py-5">
              <div className="w-[50px] h-[50px] rounded-full bg-primary text-white flex justify-center items-center text-xl">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <h2 className="text-xl font-bold">شماره تماس</h2>
              </div>
              <div>
                <p dir="ltr">0921-204-8035</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
