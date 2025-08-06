import React from 'react'

export default function ObrigadoPage() {
    return (
        <main
            style={{
                minHeight: '70vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
            }}
        >
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                Obrigado!
            </h1>
            <p
                style={{
                    fontSize: '1.25rem',
                    maxWidth: '500px',
                    textAlign: 'center',
                }}
            >
                Sua ação foi concluída com sucesso.
                <br />
                Agradecemos por confiar no nosso trabalho.
            </p>
        </main>
    )
}
