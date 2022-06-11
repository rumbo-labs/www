import { useTranslation } from "next-i18next";
import Link from "next/link";

function HeroCTA(){
  const { t } = useTranslation("home");
  return (
    <div className="prose prose-invert">
      <h1>
        {t("title")}
      </h1>
      <p>
        {t("p1")}
      </p>
      <p>
        {t("p2")}
      </p>
    </div>
  )
}

function HeroButtons() {
  const { t } = useTranslation("home");
  return (
    <div>
      <div className="px-0 flex gap-4 flex-wrap">
        <Link
          href="/drive"
        >
          <a
            className="px-10 rounded-sm py-2 border border-b-2 border-accent text-md text-white bg-gray-800 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t("buttons.drive")}
          </a>
        </Link>
        <a
          className="rounded-sm px-10 py-2 border border-b-2 text-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          href="https://github.com/rumbo-labs"
          target="_blank"
          rel="noreferrer"
        >
          {t("buttons.contribute")}
        </a>
        <a
          className="rounded-sm px-10 py-2 border border-b-2 text-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          href="mailto:luke@rumbo.so"
        >
          {t("buttons.email")}
        </a>
        
      </div>
    </div>
  );
}

export function Hero() {
  return (
      <div className="max-w-xl flex flex-col w-full mx-auto p-4 gap-16 mt-8 lg:mt-16">
        <HeroCTA /> 
        <HeroButtons />
      </div>
  )
}
