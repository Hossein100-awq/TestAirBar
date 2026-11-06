import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Archive, Plane } from 'lucide-react'
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer dir="rtl" className="relative min-h-[503px] w-full overflow-hidden">
      <Image
        src="/image 21.png"
        alt="Footer Image"
        fill
        className="object-cover object-bottom"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F6F6F6] to-white/0 to-[21.63%]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-4 pb-10 pt-48 sm:pt-64 lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:pb-[46px] lg:pt-[317px]">
        <div className="flex w-[217px] flex-none flex-col items-center gap-6 lg:h-[140px] lg:justify-between lg:gap-2">
          <div className="flex flex-col items-center gap-2">
            <div dir="ltr" className="flex items-center gap-2">
              <Image
                src="/Frame 234.png"
                alt="Airbar logo"
                width={173}
                height={43}
                className="h-auto w-[173px]"
              />
            </div>
            <p className="text-base font-medium leading-9 text-[#7E7E7E]">
              همراه مطمئن بسته ها در سفر
            </p>
          </div>

          <div dir="ltr" className="flex items-center gap-4 text-[#1B1B1B]">
            <Link
              href="#"
              aria-label="Instagram"
              className="transition-colors duration-200 hover:text-[#FE481C]"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="#"
              aria-label="Telegram"
              className="transition-colors duration-200 hover:text-[#FE481C]"
            >
              <FaTelegram size={24} />
            </Link>
            <Link
              href="#"
              aria-label="WhatsApp"
              className="transition-colors duration-200 hover:text-[#FE481C]"
            >
              <FaWhatsapp size={24} />
            </Link>
          </div>
        </div>

        <div className="flex gap-12 sm:gap-20 lg:h-[140px]">
          <div className="flex flex-col justify-center gap-4">
            <Link href="/shipments" className="footer-link">بار ها</Link>
            <Link href="/travelers" className="footer-link">مسافران</Link>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Link href="/blog" className="footer-link">مقالات</Link>
            <Link href="/terms" className="footer-link">شرایط و قوانین</Link>
            <Link href="/about" className="footer-link">درباره ما</Link>
          </div>
        </div>

        <div className="flex w-[208px] flex-none flex-col items-center gap-3 lg:h-[140px] lg:self-stretch">
          <Link
            href="/shipments/new"
            className="flex h-12 w-[208px] items-center justify-center gap-2 rounded-xl border border-[#FE481C] bg-[#FE481C] px-6 py-2.5 text-xl font-medium leading-[26px] text-white transition-colors duration-200 ease-in-out hover:border-[#E03A10] hover:bg-[#E03A10]"
          >
            ثبت بار
            <Archive size={24} />
          </Link>
          <Link
            href="/trips/new"
            className="flex h-[50px] w-[208px] items-center justify-center gap-2.5 rounded-xl border-2 border-[#FE481C] px-7 py-2.5 text-xl font-medium leading-[26px] text-[#FE481C] transition-colors duration-200 ease-in-out hover:bg-[#FFE4D6]"
          >
            ثبت سفر
            <Plane size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer