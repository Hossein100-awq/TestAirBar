import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 font-['IRANYekanXFaNum']">
      <div
        dir="ltr"
        className="flex flex-col items-center gap-8 lg:h-[467px] lg:flex-row lg:gap-0"
      >
        <div className="relative aspect-[610/467] w-full max-w-[610px] flex-none lg:min-w-0 lg:flex-1">
          <Image
            src="/image 16.png"
            alt="About Image"
            fill
            sizes="(min-width: 1024px) 610px, 100vw"
            className="object-contain"
            priority
          />
        </div>

        <div
          dir="rtl"
          className="flex w-full flex-col items-end gap-6 lg:min-w-0 lg:max-w-[584px] lg:flex-1"
        >
          <h6 className="w-full text-right text-sm font-medium leading-7 text-[#FE481C] lg:text-base">
            درباره ی ایر بار
          </h6>

          <h1 className="w-full text-right text-3xl font-extrabold not-italic leading-[1.5] text-[#1B1B1B] lg:text-[48px] lg:leading-[72px]">
            ما مسیرها را
            <br />
            به هم نزدیک می‌کنیم
          </h1>

          <h4 className="w-full text-right text-base font-medium leading-8 text-[#595959] lg:text-xl lg:leading-9">
            یک بسته برای رسیدن، همیشه به یک مسیر تازه نیاز ندارد. ایربار،
            <br className="hidden xl:block" />
            فرستنده‌ها را به مسافرهای هم‌مسیر وصل می‌کند تا ظرفیت خالی سفر،
            <br className="hidden xl:block" />
            فرصتی برای رساندن بسته‌ها باشد.
          </h4>

          <button
            type="button"
            className="self-start flex h-14 w-[204px] flex-none cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#FE481C] p-3 transition-opacity hover:opacity-85"
          >
            <span className="text-center text-xl font-medium leading-9 text-white">
              همراه ایر بار شو
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;