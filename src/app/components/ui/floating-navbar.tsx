"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/app/lib/utils/cn";
import Link from "next/link";
import Image from "next/image";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        if (globalThis.location.pathname.substring(1) == "") {
            // get the element by id and use scrollIntoView
            const elem = document.getElementById(targetId);
            elem?.scrollIntoView({
                behavior: "smooth",
            });
        } else {
            // globalThis.location.href = 'https://fydaa.com/#pricing'
        }
    };

    // useMotionValueEvent(scrollYProgress, "change", (current) => {
    //     // Check if current is not undefined and is a number
    //     if (typeof current === "number") {
    //         let direction = current! - scrollYProgress.getPrevious()!;

    //         if (scrollYProgress.get() < 0.05) {
    //             setVisible(false);
    //         } else {
    //             if (direction < 0) {
    //                 setVisible(true);
    //             } else {
    //                 setVisible(false);
    //             }
    //         }
    //     }
    // });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/30 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2 items-center justify-center space-x-4",
                    className
                )}
            >
                <Link href={'/'} className={cn(
                    "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 mr-8"
                )}>
                    <Image src={'/logo-short.svg'} alt="Diffusion Labs" width={15} height={15} className="aspect-[29/30] mr-1" />
                    <Image src={'/logo-full.svg'} alt="Diffusion Labs" width={121} height={20} className="aspect-[163/30] hidden md:block" />
                </Link>
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        onClick={handleScroll}
                        className={cn(
                            "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="block text-sm">{navItem.name}</span>
                    </Link>
                ))}
                {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                    <span>Login</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button> */}
            </motion.div>
        </AnimatePresence>
    );
};
