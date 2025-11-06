import { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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

const lato = Lato({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
    preload: true,
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br" dir="ltr">
            {/* Script do Google Tag Manager para o <head> */}
            <Script
                id="gtm-script-head"
                strategy="afterInteractive" // Carrega após a página se tornar interativa
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WT4GLWFJ');
          `,
                }}
            />
            <body className={`${lato.className} antialiased`}>
                {/* Fallback do Google Tag Manager para o <body> */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WT4GLWFJ"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                {children}
            </body>
        </html>
    )
}
