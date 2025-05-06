'use client';

import styles from "./topbar.module.css";
import NotificationTop from "@/app/components/dashboard/notificationtop/NotificationTop";
import Image from "next/image";
import {usePathname} from "next/navigation";

const Topbar = () =>
{
    const pathname = usePathname();
    let text: string;

    switch (pathname)
    {
        case '/dashboard':
            text = 'Resumen';
            break;
        case '/dashboard/clients':
            text = 'Clientes';
            break;
        case '/dashboard/messages':
            text = 'Mensajes';
            break;
        case '/dashboard/quotation':
            text = 'Cotizaciones';
            break;
        case '/dashboard/finances':
            text = 'Finanzas';
            break;
        default:
            text = 'Dashboard'; // Valor por defecto si no coincide ninguna ruta
            break;
    }

    return (
        <div className={styles.top}>
            <h1>{text}</h1>
            <div className={styles.topright}>
                <NotificationTop/>
                <Image src={"/user.png"} alt={"User"} width={50} height={50}/>
            </div>
        </div>
    );
}

export default Topbar;