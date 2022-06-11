import Link from 'next/link'
import Logo from '../icons/Logo'
import Github from '../icons/Github'
import Discord from '../icons/Discord'
import LogoSmall from '../icons/LogoSmall'
import { LocaleSelect } from './LocaleSelect'

export default function Navbar(): JSX.Element {
  return (
    <>
      <div className="max-w-xl mx-auto p-4 px-1">
        <nav className='flex flex-row items-center justify-between w-full py-2 px-2'>
          <Link href='/'>
            <a className="flex flex-row items-center align-middle gap-2">
              <LogoSmall />
              <h1 className="text-2xl text-zinc-900 font-extrabold">Rumbo</h1>
            </a>
          </Link>
          <div className="flex flex-row gap-2 items-center">
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
            </div>
            <LocaleSelect />
          </div>
        </nav>
      </div>
    </>
  )
}