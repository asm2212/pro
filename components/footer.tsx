import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubLogo from '@/public/images/svg/Github-Logo.svg';
import LinkedinLogo from '@/public/images/svg/LinkedIn-Logo.svg';


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-default px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-8 flex justify-center space-x-6">
          <Link
            href="/discord"
            className="transition-colors hover:text-gray-300"
          >
            Discord
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-gray-300"
          >
            Contact Me
          </Link>
          <Link href="/hire" className="transition-colors hover:text-gray-300">
            Hire Me
          </Link>
        </nav>

        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-6">
         
            <a
              href="https://github.com/asm2212"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={GithubLogo}
                alt="Github Logo"
                width={40}
                height={40}
              />
            </a>
        
            <a
              href="https://www.linkedin.com/in/asm2212"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={LinkedinLogo}
                alt="Linkedin Logo"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm">
          © {currentYear} Asmare, All rights reserved
        </p>
      </div>
    </footer>
  );
}
