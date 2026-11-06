import Image from 'next/image'
import React from 'react'

const values = [
  {
    title: 'شفافیت در هر مرحله',
    description: 'از هماهنگی اولیه تا تایید دریافت، هر قدم باید روشن باشد',
    image: '/1_400.png',
  },
  {
    title: 'آرامش در پرداخت',
    description: 'پرداخت امانی، بخشی از تجربه‌ای است که با اعتماد شروع می‌شود',
    image: '/ChatGPT Image Sep 23, 2026, 07_07_14 PM (2) 1.png',
  },
  {
    title: 'آدم‌ها در مرکز مسیر',
    description: 'هویت و ارتباط روشن کاربران، پایه یک همکاری مطمئن است',
    image: '/ChatGPT Image Sep 23, 2026, 07_07_13 PM (1) 1.png',
  },
]

const TrustPart = () => {
  return (
    <section
      dir="rtl"
      className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-4 px-4 font-['IRANYekanXFaNum'] lg:gap-6"
    >
      <h4 className="w-full text-center text-sm font-medium leading-7 text-[#FE481C] lg:text-[16px]">
        چیزی که به آن باور داریم
      </h4>

      <h2 className="w-full text-center text-3xl font-semibold leading-[1.5] text-[#1B1B1B] lg:text-[40px] lg:leading-[60px]">
        اعتماد، در تمام مسیر
      </h2>

      <div className="flex w-full flex-wrap items-stretch justify-center gap-6 lg:flex-nowrap">
        {values.map((item) => (
          <div
            key={item.title}
            className="flex w-full max-w-[384px] flex-col items-center gap-4 rounded-2xl p-6 sm:w-[calc(50%-12px)] lg:min-h-[360px] lg:w-auto lg:min-w-0 lg:flex-1"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={180}
              height={180}
              className="h-[140px] w-[140px] flex-none sm:h-[180px] sm:w-[180px]"
            />
            <h3 className="w-full max-w-[336px] text-center text-2xl font-semibold leading-[1.6] text-[#1B1B1B] lg:text-[28px] lg:leading-[44px]">
              {item.title}
            </h3>
            <p className="w-full max-w-[336px] text-center text-base font-medium leading-7 text-[#595959]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustPart