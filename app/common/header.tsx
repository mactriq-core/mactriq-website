"use client";

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Modal from '../components/Modal';


const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
      <Popover className={"mx-auto flex items-center sm:px-28 px-6 py-2 h-24 bg-gradient-to-r from-[#2A3E84] via-[#080B2A] to-[#2A3E84]"}>
        {/* <img src="" width="50" height="50"></img> */}
        <a href="/"><h1 className="font-bold text-white text-2xl">Logo</h1></a>
        <div className="grow">
          <div className="hidden sm:flex items-center md:gap-14 text-white">
            <Link href="#discover" className="nav-link ml-20">Discover</Link>
            <Link href="#marketplace"className="nav-link">Marketplace <span className="bg-[#15BFFD] text-xs px-1 py-1 rounded">PRO</span></Link>
            <Link href="#work" className="nav-link">How we Work</Link>
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
                <a href="/"><h1 className="font-bold text-white text-2xl">Logo</h1></a>
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
                  <Link className="focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-100 px-2 nav-link " href="#discover">Discover</Link>
                  <Link className="focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-100 px-2 nav-link" href="#marketplace">Marketplace <span className="bg-[#15BFFD] text-xs px-1 py-1 rounded">PRO</span></Link>  
                  <Link className="focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-100 px-2 nav-link" href="#work">How we Work</Link>  
                </nav>
              </div>
              <div className="mt-6 flex-col item-center gap-2">
              <button onClick={openModal} type="button" className="text-white bg-[#15BFFD] border border-[#15BFFD] hover:text-[#15BFFD] hover:bg-transparent rounded-full py-2 px-5 leading-6"><Link href="">Contact Us</Link></button>
              <Modal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </Popover.Panel>
        </Transition>
  
        <div className="hidden sm:block">
          <div className='flex items-center justify-center'>
              <form action="" className="relative mx-auto flex">
                  <input type="search" className="text-white text-xs peer cursor-pointer relative z-10 h-8 w-10 rounded-lg border bg-transparent  pr-6 outline-none focus:rounded-r-none focus:w-full focus:cursor-text focus:border-taupeGray focus:px-3"  placeholder="Type..."/>
                  <button className="absolute top-0 right-0 bottom-0 my-auto h-8 w-10 px-3 bg-slate-100 rounded-lg peer-focus:relative peer-focus:rounded-l-none">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                      <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                      </svg>
                  </button>
              </form>
          &nbsp;
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white mr-5"/> */}
          <button onClick={openModal} type="button" className="text-white bg-[#15BFFD] border border-[#15BFFD] hover:text-[#15BFFD] hover:bg-transparent rounded-full py-2 px-5 leading-6"><Link href="">Contact Us</Link></button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </Popover>
  );
};
export default Header;