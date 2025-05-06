'use client';

import styles from "./sidebaroption.module.css";
import {usePathname} from "next/navigation";
import React, {ReactNode} from "react";
import Link from "next/link";

interface SidebarOptionProps {
    link: string;
    icon: ReactNode;
    item: string;
    isCollapsed?: boolean;
}

const SidebarOption = ({ link, icon, item, isCollapsed}:SidebarOptionProps) =>
{
    const pathname = usePathname();
    const isActive = pathname === link || (pathname.startsWith(link) && link !== '/dashboard');

    return (
        <Link href={link} className={`${isActive && styles.active} ${styles.option} ${isCollapsed ? styles.collapsed :""}`}>
            <span>{icon}</span>
            <p>{item}</p>
        </Link>
    )
}

export default SidebarOption;