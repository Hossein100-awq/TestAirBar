import React from 'react'

const roles = [
  {
    title: 'اگر بسته داری',
    description:
      'بسته‌ات را ثبت کن و با اطمینان بسپار؛ از هماهنگی تا تحویل، مسیر برایت روشن است.',
  },
  {
    title: 'اگر راهی سفر هستی',
    description:
      'مسیر سفرت را ثبت کن و همراه بسته‌ی دیگران شو؛ ساده، شفاف و با پرداخت امن.',
  },
]

const JourneyPart = () => {
  return (
    <section
      dir="rtl"
      className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-4 px-4 font-['IRANYekanXFaNum'] lg:gap-6"
    >
      <h4 className="w-full text-center text-sm font-medium leading-7 text-[#FE481C] lg:text-[16px]">
        دو نقش، یک مسیر
      </h4>

      <h2 className="w-full text-center text-2xl font-semibold leading-[1.6] text-[#1B1B1B] sm:text-3xl lg:text-[40px] lg:leading-[60px]">
        چه بسته داشته باشی، چه راهی سفر باشی
      </h2>

      <div className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:gap-6">
        {roles.map((role) => (
          <div
            key={role.title}
            className="flex w-full flex-col items-start gap-3 rounded-2xl bg-white p-5 sm:p-8 lg:min-h-[196px] lg:flex-1 lg:gap-4"
          >
            <h3 className="w-full text-right text-2xl font-semibold not-italic leading-[1.6] text-[#1B1B1B] lg:text-[28px] lg:leading-[44px]">
              {role.title}
            </h3>

            <p className="w-full text-right text-base font-medium not-italic leading-8 text-[#595959] lg:text-[20px] lg:leading-[36px]">
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default JourneyPart