// components/Header.jsx
import React from "react";
import { useRouter } from "next/router";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, TranslateIcon } from '@heroicons/react/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function LocaleSelect() {
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    router.push(router.route, router.asPath, {
      locale: locale,
    });
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-sm border border-gray-500 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-800 hover:bg-gray-50">
          <TranslateIcon className="-mr-1 ml-1 h-5 w-5" aria-hidden="true" />
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-32 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none px-1">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => handleLocaleChange("en")}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 rounded-sm select-none' : 'text-gray-700',
                    'block px-4 py-2 text-sm font-semibold'
                  )}
                >
                  English
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => handleLocaleChange("es")}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 rounded-sm select-none' : 'text-gray-700',
                    'block px-4 py-2 text-sm font-semibold'
                  )}
                >
                  Español
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}