import Image from "next/image";
import Link from "next/link";
import Header from "../config";
import LogoSmall from "../icons/LogoSmall";
import { dictionary } from "../util/dictionary";
import Github from "../icons/Github";
import Discord from "../icons/Discord";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { LocaleSelect } from "../components/LocaleSelect";

function DriverForm() {
  const { t } = useTranslation("drive");

  return (
    <form action="https://getform.io/f/2fb6e102-a946-4a35-b282-d621162d9ba6" method="POST">
      <div className='prose max-w-lg mx-auto lg:mx-0 flex flex-col gap-5 px-12 pb-8 shadow-md border-2 bg-white border-black lg:mt-8'>
        <div>
          <h3>{t('title')}</h3>
          <p>{t('subtitle')}</p>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            {t('name')}
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm p-2"
              placeholder="Diego Aguirre"
            />
          </div>
        </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {t('email')}
        </label>
        <div className="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            className="border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 p-2"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
          {t('phone')}
        </label>
        <div className="mt-1 relative shadow-sm">
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 p-2"
            placeholder="+502 4987-6543"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {t('location')}
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="location"
            id="location"
            className="border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 p-2"
            placeholder="Guatemala"
          />
        </div>
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
          {t('message')}
        </label>
        <div className="mt-1">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            // @ts-ignore
            placeholder={t('messagePlaceholder')}
            className="border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 p-2"
            defaultValue={''}
          />
        </div>
      </div> 
      <div className="flex flex-row gap-4 justify-center w-full mt-8">
        <div className="flex justify-center align-middle">
          <Image src="/vroom.gif" width="114px" height="48px" alt=""/>
        </div>
        <button
          type="submit"
          className="w-2/3 px-10 rounded-sm py-2 border border-b-2 border-accent text-md text-white bg-gray-800 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          // className="w-2/3 items-center px-4 py-2 border border-b-2 border-black font-large text-lg font-medium shadow-md text-white bg-zinc-700 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
        >
          {t('submit')}
        </button>
        <div className="flex justify-center align-middle">
          <Image src="/vroom.gif" width="114px" height="48px" alt=""/>
        </div>
      </div>
      </div>
    </form>
  )
}

function DriverHero() {
  const { t } = useTranslation("drive");

  return (
    <div className="prose max-w-md lg:mt-48 mt-12 lg:mx-0 mx-auto text-gray-50 px-2">
      <h1 className="text-gray-50">
        {t("heroTitle")}
      </h1>
      <h3 className="text-gray-50">{t("perks")}</h3>
      <ul>
        <li>{t("perk1")}</li>
        <li>{t("perk2")}</li>
        <li>{t("perk3")}</li>
        <li>{t("perk4")}</li>
      </ul> 
    </div>
  )
}

export default function Drive() {
  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto p-4 px-4">
        <nav className='flex flex-row items-center justify-between w-full py-2 px-1'>
          <Link href='/'>
            <a className="flex flex-row items-center align-middle gap-2">
              <LogoSmall />
              <h1 className="text-2xl text-zinc-900 font-extrabold">rumbo</h1>
            </a>
          </Link>
          <div className="flex flex-row gap-4 items-center pr-4">
          <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/cmj8vsEt"
              className="cursor-pointer" 
            >
                <Discord />
          </a>
          <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/rumbo-labs"
              className="cursor-pointer" 
            >
                <Github />
          </a>
          <LocaleSelect />
        </div>
        </nav>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-center gap-12 min-h-screen bg-black'>
        <DriverHero />
        <DriverForm />
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["drive"])),
    },
  };
}