import './globals.css'
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br" dir="ltr">
            <body className={`antialiased`}>{children}</body>
        </html>
    )
}
