import { PT_Sans } from "next/font/google"

const ptSans = PT_Sans({ weight: '400', style: 'italic', subsets: ['latin'] })

export const ItalicText = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => <span style={{ ...ptSans.style, fontStyle: 'italic' }}>{children}</span>