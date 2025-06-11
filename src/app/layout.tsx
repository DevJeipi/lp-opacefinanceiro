import './globals.css'
import { Lato } from 'next/font/google'
import localFont from 'next/font/local'
import { Metadata } from 'next'

// Metadata for SEO
export const metadata: Metadata = {
    title: 'Curso Do Cheque Especial à Independência Financeira',
    description:
        'Aprenda a investir sem riscos utilizando o método Pace Financeiro, e adquira sua independência financeira.',
    alternates: {
        canonical: 'https://opacefinanceiro.com.br',
    },
    openGraph: {
        title: 'O Pace Financeiro | Invista com segurança',
        description:
            'Aprenda a investir sem riscos utilizando o método Pace Financeiro, e adquira sua independência financeira.',
        url: 'https://opacefinanceiro.com.br',
        siteName: 'Pace Financeiro',
        images: [
            {
                url: 'https://opacefinanceiro.com.br/open-graph-image.webp',
                width: 1200,
                height: 630,
                alt: 'Pace Financeiro - Independência Financeira',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Curso Do Cheque Especial à Independência Financeira',
        description:
            'Aprenda a investir sem riscos utilizando o método Pace Financeiro, e adquira sua independência financeira.',
        images: [
            {
                url: 'https://opacefinanceiro.com.br/open-graph-image.webp',
                width: 1200,
                height: 630,
                alt: 'Pace Financeiro - Independência Financeira',
            },
        ],
    },
    verification: {
        google: 'F4PQfnmTddvBGg9T9vGcGnZy9vdkKYL56Q0t3UZNhB8',
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
            path: 'fonts/Conquera-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: 'fonts/Conquera-Medium.woff2',
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
            <head>
                {/* Preload de recursos críticos */}
                <link
                    rel="preload"
                    href="/imagemdefundologin.webp"
                    as="image"
                    type="image/webp"
                />
                <link
                    rel="preload"
                    href="/foto-otavio-17-removebg.webp"
                    as="image"
                    type="image/webp"
                />
            </head>
            <body
                className={`${lato.variable} ${conquera.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
