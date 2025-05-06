import './dashboard.css';
import type {Metadata} from "next";
import {satoshi} from "@/app/fonts/satoshi";
import {APP_DESCRIPTION, APP_NAME, SERVER_URL} from "@/lib/constants";
import Sidebar from "@/app/components/dashboard/sidebar/Sidebar";
import Topbar from "@/app/components/dashboard/topbar/Topbar";
import {FormProvider} from "@/context/FormContext";

export const metadata: Metadata = {
    title: {
        template: `%s | ${APP_NAME}`,
        default: APP_NAME,
    },
    description: APP_DESCRIPTION,
    metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>)
{
    return (
        <FormProvider>
            <div className={`${satoshi.variable} antialiased fulldashboard`}>
                <Sidebar/>
                <div className="dashcontainer">
                    <Topbar/>
                    {children}
                </div>
            </div>
        </FormProvider>
    );
}