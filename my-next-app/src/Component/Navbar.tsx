"use client";

import Image from "next/image";
import React, { useState } from "react";

const links = ["درباره ما", "شرایط و قوانین", "مقالات", "بارها", "مسافران"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative mx-auto w-full max-w-[1440px]">
      <nav
        dir="ltr"
        className="mx-auto my-6 flex h-12 w-full max-w-[1200px] items-center justify-between px-4 lg:my-0 lg:mb-9 lg:mt-9"
      >
        <div className="box-border flex h-10 flex-none flex-row items-center justify-center gap-2 rounded-xl border border-[#FE481C] bg-[#FE481C] px-3 py-2.5 sm:h-12 sm:w-[195px] sm:gap-3 sm:px-6">
          <button
            type="button"
            className="flex cursor-pointer items-center justify-center whitespace-nowrap text-center text-sm font-medium leading-[26px] text-white transition-opacity hover:opacity-85 sm:text-xl"
          >
            ثبت نام
          </button>

          <span
            aria-hidden="true"
            className="h-5 w-px flex-none bg-white sm:h-6"
          />

          <button
            type="button"
            className="flex cursor-pointer items-center justify-center mb-1 whitespace-nowrap text-center text-sm font-medium leading-[26px] text-white transition-opacity hover:opacity-85 sm:text-xl"
          >
            ورود
          </button>
        </div>

        <div className="flex flex-none flex-row items-center gap-3 lg:w-[707px] lg:justify-between">
          <div
            dir="rtl"
            className="hidden flex-none flex-row items-center gap-8 lg:flex"
          >
            {links.map((item) => (
              <span
                key={item}
                className="flex h-9 cursor-pointer items-center text-center text-xl font-medium leading-9 text-[#7E7E7E] transition-colors hover:text-[#FE481C]"
              >
                {item}
              </span>
            ))}
          </div>

          <button
            type="button"
            aria-label="منو"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#FE481C] text-[#FE481C] transition-colors hover:bg-[#FE481C] hover:text-white lg:hidden"
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>

          <div className="flex h-[43px] w-[130px] flex-none items-center sm:w-[173px]">
            <Image
              src="/Frame 234.svg"
              alt="AirBarLogo"
              width={173}
              height={43}
              className="h-auto w-full"
            />
          </div>
        </div>
      </nav>

      {open && (
        <div
          dir="rtl"
          className="absolute left-4 right-4 top-full z-50 flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-2 shadow-lg lg:hidden"
        >
          {links.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setOpen(false)}
              className="w-full cursor-pointer rounded-lg px-4 py-3 text-right text-lg font-medium text-[#7E7E7E] transition-colors duration-200 hover:text-[#FE481C] active:text-[#FE481C]"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;