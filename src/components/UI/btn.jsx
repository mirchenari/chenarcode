import Link from "next/link";

export default function Btn({ children, onClick, href, target }) {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className="bg-primary text-white border border-primary rounded-md
       hover:bg-transparent hover:text-primary py-2.5 px-3 cursor-pointer max-h-full"
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="bg-primary text-white border border-primary rounded-md
       hover:bg-transparent hover:text-primary py-2.5 px-3 cursor-pointer"
      >
        {children}
      </button>
    );
  }
}
