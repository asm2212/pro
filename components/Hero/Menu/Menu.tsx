'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import SVGGradientBg from '../SVGGradientBg';
import GithubLogo from '../../../public/images/svg/Github-Logo.svg';
import LinkedinLogo from '../../../public/images/svg/LinkedIn-Logo.svg';


import clsx from 'clsx';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const inActiveStyle = 'text-white/50 hover:bg-white/40 hover:text-white/80';
const activeStyle = 'bg-gradient-to-b from-white/40 to-[#2F2D2D]/20';

interface NavItem {
  name: string;
  href: string;
  isActive: boolean;
}

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navMenu, setNavMenu] = useState<NavItem[]>([
    { name: 'Home', href: '/', isActive: true },
    { name: 'About', href: '/#about', isActive: false },
    { name: 'Projects', href: '/#projects', isActive: false },
  ]);

  const setActiveNavItem = (selectedName: string) => {
    setNavMenu((prevNavMenu) =>
      prevNavMenu.map((item) => ({
        ...item,
        isActive: item.name === selectedName,
      })),
    );
  };

  return (
    <div className="mx-auto max-w-[1440px]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link className="flex items-center gap-2" href="/">
              <Image
                src="/images/png/aquawolf-logo.png"
                alt="Logo"
                width={25}
                height={25}
              />
              <div className="text-lg font-semibold text-white">Asmare</div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-10 w-10 text-white" />
            </button>
          </div>
          <div className="hidden gap-4 rounded-full bg-white/20 px-5 py-2 text-white lg:flex lg:w-full lg:flex-1 lg:items-center lg:gap-x-12">
            {/* Desktop Mobile menu */}
            {navMenu.map((item) => (
              <span key={item.name} onClick={() => setActiveNavItem(item.name)}>
                <a
                  className={clsx({
                    'flex-2 relative rounded-full px-4 py-1 transition-all':
                      true,
                    [activeStyle]: item.isActive,
                    [inActiveStyle]: !item.isActive,
                  })}
                  href={item.href}
                >
                  {item.name}
                </a>
              </span>
            ))}
          </div>
          <div className="hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
          <a
              href="https://www.linkedin.com/in/asm2212"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
>
  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
  </span>
  <span className="relative text-white">Connect on LinkedIn</span>
</a>

          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg-default px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="relative z-50">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Asmare</span>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/png/aquawolf-logo.png"
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                    <div className="text-lg font-semibold text-white">
                      Asmare
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-10 w-10 text-white"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 text-center">
                    {navMenu.map((item) => (
                      <a
                        key={item.name + 1}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-3xl font-normal leading-7 text-white transition-all hover:bg-gray-50/20"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {/* Seperator */}
                  <div className="flex flex-1 items-center justify-center">
                    <div className="h-[2px] w-[70vw] bg-white/100"></div>
                  </div>
                  {/* Social Links */}
                  <div className="mt-10 grid gap-10">
                    <div className="align-center flex flex-1 justify-center gap-10">
                  
                    
                      <a
                        href="https://github.com/asm2212"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={GithubLogo}
                          alt="Github Logo"
                          width={50}
                          height={50}
                        />
                      </a>
                    </div>
                    <div className="align-center flex justify-center gap-10">
                      <a
                        href="https://www.linkedin.com/in/asm2212"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid items-center"
                      >
                        <Image
                          src={LinkedinLogo}
                          alt="Linkedin Logo"
                          width={50}
                          height={50}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SVGGradientBg />
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
