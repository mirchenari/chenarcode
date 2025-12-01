import "./globals.css";
import "../lib/fontawesome";
import Header from "@/components/client/header";

export const metadata = {
  title: "چنار کد | توسعه انواع سایت ها | محمدمهدی میرچناری",
  description:
    "طراحی، توسعه و اجرای انواع وی سایت و اپلیکیشن های تحت وب توسط محمدمهدی میرچناری در چنار کد",
  keywords: [
    "ChenarCode",
    "چنار کد",
    " چنارکد",
    "محمدمهدی میرچناری",
    "رزومه",
    "نمونه کار",
    "پروژه",
    "برنامه نویسی",
    "Next.js",
    "React",
    "وب",
    "طراحی سایت",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      <body dir="rtl" className="bg-bg md:fixed inset-0 md:flex flex-row-reverse *:h-full">
        <Header />
        <main className="flex-4 px-10 py-10 md:py-0  overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
