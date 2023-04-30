export default function ProductLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className="container mx-auto">
                {children}
            </body>
        </html>
    )
}