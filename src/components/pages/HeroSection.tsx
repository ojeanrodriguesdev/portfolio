'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTypingEffect } from '@/components/hooks/useTypingEffect'

const greetings = ['Hi! My name is Jean Rodrigues!', "I'm React Developer!"]

const MobileIcons = [
  {
    imageSrc: '/images/heroSection/github.svg',
    url: 'https://github.com',
    widthMobile: 22,
    heightMobile: 30,
  },
  {
    imageSrc: '/images/heroSection/instagram.svg',
    url: 'https://www.linkedin.com',
    widthMobile: 30,
    heightMobile: 40,
  },
  {
    imageSrc: '/images/heroSection/curriculum.svg',
    url: '/path-to-curriculum',
    widthMobile: 20,
    heightMobile: 40,
  },
]

const DesktopIcons = [
  {
    imageSrc: '/images/heroSection/github.svg',
    url: 'https://github.com/ojeanrodriguesdev',
    widthDesktop: 47,
    heightDesktop: 40,
  },
  {
    imageSrc: '/images/heroSection/instagram.svg',
    url: '#',
    widthDesktop: 56,
    heightDesktop: 40,
  },
  {
    imageSrc: '/images/heroSection/curriculum.svg',
    url: '#',
    widthDesktop: 40,
    heightDesktop: 40,
  },
]

export default function HeroSection() {
  const typedText = useTypingEffect(greetings, 25, 2000)

  return (
    <section className="relative w-screen min-h-screen bg-gradient-to-b from-[#07bdff] via-[#07b0ff6c] to-[#07bdff] flex items-center justify-around py-6 ">
      <div className="w-screen flex flex-col xl:flex-row items-center justify-around ">
        <div className="flex flex-col xl:flex-row">
          <div className="w-full flex items-center justify-center mb-3 xl:mb-0">
            <Image
              src="/images/HeroSection/me.png"
              alt="Jean Rodrigues"
              width={366}
              height={366}
              priority={true}
              loading="eager"
              quality={100}
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[366px] xl:w-[366] h-auto object-contain"
            />
          </div>
          {/* ViewPort Inteiro */}
          <div className="relative flex flex-col md:flex-row items-center justify-center mx-24">
            <div>
              {/* Frase Digitando */}
              <div className="pl-[3px] md:pl-[5px]">
                <p className="text-[#454545] font-impact font-semibold lg:font-semibold text-sm md:text-lg drop-shadow-lg">
                  {typedText}
                  <span className="animate-blink">|</span> {/* Cursor piscante */}
                </p>
              </div>

              {/* Titulo com Ícones ao lado */}
              <div className="relative text-center text-white drop-shadow-2xl">
                {/* Ícones Mobile */}
                <div className="flex md:hidden absolute right-[45px] top-[5%] space-x-2 transform translate-x-10 items-center justify-center z-20">
                  {MobileIcons.map((icon, index) => (
                    <Link key={index} href={icon.url} passHref>
                      <Image
                        src={icon.imageSrc}
                        alt={`Icon ${index + 1}`}
                        width={icon.widthMobile}
                        height={icon.heightMobile}
                        className="drop-shadow-lg"
                      />
                    </Link>
                  ))}
                </div>

                {/* Ícones Desktop */}
                <div className="hidden md:flex absolute right-[50px] top-[5%] space-x-2 transform translate-x-10 items-center justify-center z-20">
                  {DesktopIcons.map((icon, index) => (
                    <Link key={index} href={icon.url} passHref>
                      <Image
                        src={icon.imageSrc}
                        alt={`Icon ${index + 1}`}
                        width={icon.widthDesktop}
                        height={icon.heightDesktop}
                        className=""
                      />
                    </Link>
                  ))}
                </div>

                {/* Texto Principal */}
                <h1 className="leading-[38px] md:leading-[75px] drop-shadow-xl font-extrabold text-5xl md:text-8xl">
                  <span className="pr-[120px] md:pr-[240px]">REACT</span> <br />
                  DEVELOPER
                </h1>
              </div>

              {/* Frase Final */}
              <div className="text-end">
                <p className="text-[#454545] font-impact font-semibold lg:font-semibold text-sm md:text-lg drop-shadow-lg">
                  Web development enthusiast,
                  <br /> 1 year of freelancing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
