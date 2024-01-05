"use client";

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
      <Popover className={"mx-auto flex items-center sm:px-28 px-6 py-2 h-24 bg-gradient-to-r from-[#2A3E84] via-[#080B2A] to-[#2A3E84]"}>
        {/* <img src="" width="50" height="50"></img> */}
        <h1 className="font-bold text-white text-2xl">Logo</h1>
        <div className="grow">
          <div className="hidden sm:flex items-center md:gap-14 text-white">
            <Link href="" className="ml-20">Discover</Link>
            <Link href="">Marketplace <span className="bg-[#15BFFD] text-xs px-1 py-1 rounded">PRO</span></Link>
            <Link href="">How we Work</Link>
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2A3E84]">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30"/>

        <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
    

        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="rounded-lg bg-gradient-to-r from-[#2A3E84] via-[#080B2A] to-[#2A3E84] shadow-lg ring-1 ring-black ring-opaity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex item-center justify-between">
                <h1 className="font-bold text-white text-2xl">Logo</h1>
                <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2A3E84]">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8 text-white">
                  <Link className="focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-100 px-2" href="">Discover</Link>
                  <Link className="focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-100 px-2" href="">Marketplace <span className="bg-[#15BFFD] text-xs px-1 py-1 rounded">PRO</span></Link>  
                  <Link className="focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-100 px-2" href="">How we Work</Link>  
                </nav>
              </div>
              <div className="mt-6 flex-col item-center gap-2">
              <button type="button" className="text-[#15BFFD] rounded-full border border-[#15BFFD] py-2 px-5 leading-6 bg-[#2A3E84]"><Link href="">Contact Us</Link></button>
              </div>
            </div>
          </div>
        </Popover.Panel>
        </Transition>
  
        <div className="hidden sm:block">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white mr-5"/>
          <button type="button" className="text-[#15BFFD] rounded-full border border-[#15BFFD] py-2 px-5 leading-6 bg-[#2A3E84]"><Link href="">Contact Us</Link></button>
        </div>
      </Popover>
  );
};
export default Header;