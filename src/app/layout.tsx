import './globals.css'
import { Lato } from 'next/font/google'
import localFont from 'next/font/local'
import { Metadata } from 'next'

// Metadata for SEO
export const metadata: Metadata = {
    title: 'Pace Financeiro | Invista com segurança',
    description:
        'Aprenda a investir sem riscos utilizando o método Pace Financeiro, e adquira sua independência financeira.',
    openGraph: {
        title: 'O Pace Financeiro | Invista com segurança',
        description:
            'Aprenda a investir sem riscos utilizando o método Pace Financeiro, e adquira sua independência financeira.',
        url: 'https://opacefinanceiro.com.br', // Altere para seu domínio real
        siteName: 'Pace Financeiro',
        images: ['/velas2.webp'],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pace Financeiro | Invista com segurança',
        description:
            'Aprenda a investir sem riscos utilizando o método Pace Financeiro, e adquira sua independência financeira.',
        images: ['https://opacefinanceiro.com.br/velas2.webp'],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
}

// Importing fonts
const lato = Lato({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lato',
})

const conquera = localFont({
    src: [
        {
            path: '../fonts/Conquera-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/Conquera-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-conquera',
    display: 'swap',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br" dir="ltr">
            <body
                className={`${lato.variable} ${conquera.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
