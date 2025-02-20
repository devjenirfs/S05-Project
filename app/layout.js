

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <title>Reserva de Armário</title>
            </head>
            <body className="bg-gray-100">{children}</body>
        </html>
    );
}
