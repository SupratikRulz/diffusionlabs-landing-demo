'use client'

import Image from "next/image";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { FloatingNav } from "./components/ui/floating-navbar";
import { ItalicText } from "./components/ui/text-italic";
import Spline from "@splinetool/react-spline";
import { PinContainer } from "./components/ui/3d-pin";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import Link from "next/link";

const navItems = [

  {
    name: "Work",
    link: "/#work",
    icon: undefined, //<IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Team",
    link: "/#team",
    icon: undefined,//<IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Community",
    link: "/#community",
    icon: undefined,
    // (
    //   <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    // ),
  },
];

const people = [
  {
    id: 1,
    name: "Rahul Agarwal",
    designation: "CEO, Co-Founder",
    image:
      "https://pbs.twimg.com/profile_images/1213718033815851008/Q6cK7QIa_400x400.jpg",
  },
  {
    id: 2,
    name: "Daksh M.",
    designation: "CTO, Co-Founder",
    image:
      "https://photos.wellfound.com/users/13707343-medium_jpg?1632814448",
  },

  {
    id: 3,
    name: "Malay Vasa",
    designation: "Designer",
    image:
      "https://photos.wellfound.com/users/12306837-medium_jpg?1624626454",
  },
  {
    id: 4,
    name: "Rohan Sharma",
    designation: "Engineer",
    image:
      "https://media.licdn.com/dms/image/C5603AQGAGzuEKgR6eQ/profile-displayphoto-shrink_400_400/0/1644815466480?e=1713398400&v=beta&t=qw-cAyvx-aONygoSVAcacBwEFsGC7LDAmUQI56QRoN0",
  },
  {
    id: 5,
    name: "Him",
    designation: "His title",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Her",
    designation: "Some title",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundGradientAnimation>
        <FloatingNav navItems={navItems} />
      </BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl p-4">
        <div className="relative drop-shadow-2xl bg-gradient-to-b text-white/90 pt-16">
          <span>We are a </span><ItalicText>software engineering</ItalicText><br />and <ItalicText>financial risk</ItalicText> research lab.
          <div className="w-full max-w-screen-lg relative h-[250px] md:h-[500px]">
            <Spline scene="https://prod.spline.design/kiJ2FfAT6F61aTri/scene.splinecode" />
          </div>
        </div>
      </div>
      <div id="work" className="w-full px-4 py-10 flex flex-col items-center justify-center bg-[linear-gradient(180deg,#0d0a01,#0e0602,#0b0404,#050304,#010101)]">
        <h2 className="text-white/80 text-3xl mb-10">We are <ItalicText>driving</ItalicText> the R&D at</h2>
        <PinContainer
          title="Visit mEth Lab"
          href="https://methlab.xyz"
        >
          <div className="flex flex-col p-4 max-w-sm w-[20rem]">
            <h3 className="w-full mb-6 font-bold text-2xl text-white/90">
              Valent Protocol
            </h3>
            <div className="text-lg font-normal mb-10">
              <span className="text-[#b1773c] font-thin">
                Valent is a liquidation-free and oracle-less lending/borrowing protocol for fixed-rate, fixed-term positions.
              </span>
            </div>
            <button className="no-underline group cursor-pointer relative shadow-2xl bg-[#ff7b00050] rounded-full p-px text-xs font-normal flex items-center leading-6  text-white w-32">
              {/* <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span> */}
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-[#ff7b0009] py-0.5 px-4 ring-1 ring-[#ff7b0059] ">
                <span>{`Coming Soon`}</span>
                {/* <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg> */}
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
          </div>
        </PinContainer>
      </div>
      <div id="team" className="w-full relative flex flex-col items-center justify-center bg-[#010101]">
        <div className="w-full relative px-4 py-10 flex flex-col items-center justify-center bg-grid-white/[0.1]">
          <div className="absolute w-full h-full pointer-events-none inset-0 flex items-center justify-center bg-[#010101] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#010101)]"></div>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-white/50 to-blue-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mb-10"
          >
            The <ItalicText>Diffusion</ItalicText> team
          </motion.h1>
          <div className="w-full flex flex-row items-center justify-center py-10">
            <AnimatedTooltip items={people} />
          </div>
        </div>
      </div>
      <div id="community" className="w-full relative flex flex-col px-4 py-10 items-center justify-center bg-[#010101]">
        <div className="absolute bottom-0 right-0 flex h-8 items-end overflow-hidden">
          <div className="flex -mb-px h-[2px] w-[calc(100vw-128px)]  -scale-x-100">
            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          </div>
        </div>
        <h2 className="text-white text-5xl font-medium mb-16 text-center">
          Join the <ItalicText>Community</ItalicText>!
        </h2>

        <div className="w-full flex flex-row items-center justify-center gap-10 flex-wrap mb-20">
          <CardContainer className="inter-var max-w-sm rounded-2xl hover:shadow-[0_8px_16px_rgb(255_101_0/0.4)] bg-[#ff7b0000] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 cursor-pointer">
            <CardBody className="relative group/card  hover:shadow-sm hover:shadow-emerald-500/[0.1] bg-[linear-gradient(180deg,#0d0a01,#0e0602,#0b0404,#050304,#010101)] border-white/[0.1]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                X (Formerly Twitter)
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://www.mantle.xyz/twitter-logo.svg"
                  height="1000"
                  width="1000"
                  className="w-full h-40 object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var max-w-sm rounded-2xl hover:shadow-[0_8px_16px_rgb(255_101_0/0.4)] bg-[#ff7b0000] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 cursor-pointer">
            <CardBody className="relative group/card  hover:shadow-sm hover:shadow-emerald-500/[0.1] bg-[linear-gradient(180deg,#0d0a01,#0e0602,#0b0404,#050304,#010101)] border-white/[0.1]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Telegram
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://www.mantle.xyz/telegram-logo.svg"
                  height="1000"
                  width="1000"
                  className="w-full h-40 object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var max-w-sm rounded-2xl hover:shadow-[0_8px_16px_rgb(255_101_0/0.4)] bg-[#ff7b0000] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 cursor-pointer">
            <CardBody className="relative group/card  hover:shadow-sm hover:shadow-emerald-500/[0.1] bg-[linear-gradient(180deg,#0d0a01,#0e0602,#0b0404,#050304,#010101)] border-white/[0.1]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Discord
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://www.mantle.xyz/discord-logo.svg"
                  height="1000"
                  width="1000"
                  className="w-full h-40 object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
      <footer className="w-full flex flex-col bg-[#010101] pt-20">
        <div className="w-full flex flex-col lg:flex-row px-4 py-10 items-start justify-center bg-[#010101] gap-16 mb-16">
          <div className="flex flex-col justify-start items-start">
            <div className="flex flex-row">
              <Image src={'/logo-short.svg'} alt="Diffusion Labs" width={15} height={15} className="aspect-[29/30] mr-4" />
              © DiffusionLabs {new Date().getFullYear().toString()}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="flex flex-row mb-4">Legal</div>
            <div className="flex flex-row mb-1">
              <Link href={'/'} className="underline">Privacy Policy</Link>
            </div>
            <div className="flex flex-row mb-1">
              <Link href={'/'} className="underline">Terms & Conditions</Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="flex flex-row mb-4">Resources</div>
            <div className="flex flex-row mb-1">
              <Link href={'/'} className="underline">Docs</Link>
            </div>
            <div className="flex flex-row mb-1">
              <Link href={'/'} className="underline">Github</Link>
            </div>
            <div className="flex flex-row mb-1">
              <Link href={'/'} className="underline">Testnet</Link>
            </div>
            <div className="flex flex-row mb-1">
              <Link href={'/'} className="underline">Meth Lab</Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="flex flex-row mb-4">Community</div>
            <div className="flex flex-row mb-1">
              <Link href={'/'} className="underline">Discord</Link>
            </div>
            <div className="flex flex-row mb-1">
              <Link href={'/'} className="underline">X</Link>
            </div>
            <div className="flex flex-row mb-1">
              <Link href={'/'} className="underline">Telegram</Link>
            </div>
            <div className="flex flex-row mb-1">
              <Link href={'/'} className="underline">Linkedin</Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center items-center bg-[#010101]">
          <Image src={'/logo-short.svg'} alt="Diffusion Labs" width={15} height={15} className="aspect-[29/30] mr-4 w-[50px]" />
          <Image src={'/logo-full.svg'} alt="Diffusion Labs" width={121} height={20} className="aspect-[163/30] w-[300px]" />
        </div>
      </footer>
    </main>
  );
}
