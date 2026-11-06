import React from 'react'

const CtaPart = () => {
  return (
    <section
      dir="rtl"
      className="mx-auto flex w-[calc(100%-32px)] max-w-[1200px] flex-col items-center justify-center gap-4 rounded-3xl bg-[#FFF1E9] p-6 font-['IRANYekanXFaNum'] sm:p-12 lg:min-h-[288px] lg:gap-6"
    >
      <p className="w-full text-center text-sm font-medium not-italic leading-7 text-[#FE481C] lg:text-[16px]">
        مسیر بعدی از اینجا شروع می‌شود
      </p>

      <h2 className="w-full text-center text-2xl font-semibold not-italic leading-[1.6] text-[#1B1B1B] sm:text-3xl lg:text-[40px] lg:leading-[60px]">
        تو هم بخشی از این مسیر باش
      </h2>

      <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <button
          type="button"
          className="box-border flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#FE481C] bg-white p-3 transition-colors duration-200 ease-in-out hover:bg-[#FFE4D6] sm:w-[206px]"
        >
          <span className="text-center text-lg font-medium not-italic leading-9 text-[#FE481C] lg:text-[20px]">
            ثبت سفر
          </span>
        </button>

        <button
          type="button"
          className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#FE481C] p-3 transition-colors duration-200 ease-in-out hover:bg-[#E03A10] sm:w-[204px]"
        >
          <span className="text-center text-lg font-medium not-italic leading-9 text-white lg:text-[20px]">
            ثبت بار
          </span>
        </button>
      </div>
    </section>
  )
}

export default CtaPart