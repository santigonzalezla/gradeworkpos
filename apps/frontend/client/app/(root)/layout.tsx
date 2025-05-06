import './globals.css';
import type { Metadata } from 'next';
import { satoshi } from '../fonts/satoshi';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '../lib/constants';

export const metadata: Metadata = {
    title: {
        template: `%s | ${APP_NAME}`,
        default: APP_NAME,
    },
    description: APP_DESCRIPTION,
    metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>)
{
    return (
        <html lang="en">
            <body className={`${satoshi.variable}`}>
                {children}
            </body>
        </html>
    );
}
