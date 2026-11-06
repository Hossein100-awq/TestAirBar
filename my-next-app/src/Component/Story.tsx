import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <section
      dir="rtl"
      className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-4 font-['IRANYekanXFaNum']"
    >
      <h6 className="w-full text-right text-sm font-medium leading-7 text-[#FE481C] lg:text-base">
        داستان ما
      </h6>

      <h2 className="w-full text-right text-2xl font-semibold leading-[1.5] text-[#1B1B1B] lg:text-[40px] lg:leading-[60px]">
        از یک مسیر مشترک، تا یک ارتباط مطمئن
      </h2>

      <div
        dir="ltr"
        className="relative isolate flex w-full flex-col items-center gap-8 xl:min-h-[168px] xl:flex-row xl:items-center xl:justify-end"
      >
        <div
          dir="rtl"
          className="z-0 flex w-full flex-none flex-col items-center gap-6 xl:w-[759.5px]"
        >
          <p className="w-full text-right text-base font-medium leading-8 text-[#1B1B1B] lg:text-xl lg:leading-9">
            ایربار بر پایه یک ایده ساده شکل گرفته: مسافری که به مقصد شما می‌رود، می‌تواند همراه مطمئنی برای بسته شما باشد.
          </p>
          <p className="w-full text-right text-base font-medium leading-8 text-[#595959] lg:text-xl lg:leading-9">
            ما می‌خواهیم پیدا کردن هم‌مسیر، هماهنگی تحویل و پیگیری مراحل ارسال، ساده و شفاف باشد؛ تجربه‌ای که هم برای فرستنده ارزش دارد و هم برای مسافر.
          </p>
        </div>

        <div className="z-[1] order-first h-[220px] w-[220px] flex-none -rotate-[8.35deg] sm:h-[280px] sm:w-[280px] xl:absolute xl:left-0 xl:top-[-144.64px] xl:order-none xl:h-[360px] xl:w-[360px]">
          <Image
            src="/83e826ae-5b90-4d18-989c-5097c4409e79 1.png"
            alt="Story Image"
            width={360}
            height={360}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;