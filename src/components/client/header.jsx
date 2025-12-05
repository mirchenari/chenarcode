"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavLink from "../UI/navlink";

function HeaderSection({ className, isMobile }) {
  return (
    <motion.section
      className={`${className} h-full bg-[#222222] text-white flex-col items-center justify-evenly`}
      initial={isMobile ? { opacity: 0, translateX: -300 } : null}
      animate={isMobile ? { opacity: 1, translateX: 0 } : null}
      exit={isMobile ? { opacity: 0, translateX: -100 } : null}
    >
      <div>
        <h2 className="text-3xl font-extrabold">
          <span className="text-primary">چنار </span>
          <span>کد</span>
        </h2>
      </div>
      <div>
        <nav className="flex flex-col gap-5 items-center text-xl">
          <NavLink href="/">خانه</NavLink>
          <NavLink href="/about">درباره من</NavLink>
          <NavLink href="/service">خدمات من</NavLink>
          <NavLink href="/portfolio">نمونه کارها</NavLink>
          <NavLink href="/contact">تماس با من</NavLink>
        </nav>
      </div>
      <div className="flex gap-2.5 text-2xl">
        <Link href="https://t.me/chenarcode" target="_blank">
          <FontAwesomeIcon icon={faTelegram} />
        </Link>
        <Link href="mailto:chenarcode@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
    </motion.section>
  );
}

export default function Header() {
  const [isShow, setIsShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsShow(false);
  }, [pathname]);

  return (
    <header className="flex-1">
      <button
        className="md:hidden fixed top-5 left-5 bg-primary text-white w-10 h-10 rounded-lg flex justify-center items-center text-xl z-30"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <HeaderSection isMobile={false} className="hidden md:flex" />
      <AnimatePresence>
        {isShow && (
          <>
            <HeaderSection isMobile={true} className="flex md:hidden fixed top-0 left-0 bottom-0 sm:w-[40%] w-[85%] z-20" />
            <motion.div
              className="md:hidden fixed inset-0 bg-[#00000026]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsShow(false);
              }}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
