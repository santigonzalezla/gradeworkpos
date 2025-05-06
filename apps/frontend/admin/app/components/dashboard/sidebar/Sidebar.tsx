'use client';

import styles from './sidebar.module.css';
import Logo from "@/app/components/shared/Logo";
import SidebarOption from "@/app/components/dashboard/sidebaroption/SidebarOption";
import {ArrowSingleLeft, Clients, Dashboard, Finances, Messages, Quotation} from "@/app/components/svg";
import {useState} from "react";

const Sidebar = () =>
{
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () =>
    {
        setIsCollapsed(!isCollapsed);
        console.log(isCollapsed);
    }

    const options = [
        { item: 'Dashboard', icon: <Dashboard />, link: '/dashboard' },
        { item: 'Clients', icon: <Clients />, link: '/dashboard/clients' },
        { item: 'Messages', icon: <Messages />, link: '/dashboard/messages' },
        { item: 'Quotation', icon: <Quotation />, link: '/dashboard/quotation' },
        { item: 'Finances', icon: <Finances />, link: '/dashboard/finances' }
    ];

    return (
        <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.options}>
                {options.map((option, index) => (
                    <SidebarOption
                        icon={option.icon}
                        item={option.item}
                        link={option.link}
                        isCollapsed={isCollapsed}
                        key={index}
                    />
                ))}
            </div>
            <div>

            </div>
            <button onClick={toggleCollapse} className={styles.collapsebutton}>
                <ArrowSingleLeft />
            </button>
        </div>
    );
}

export default Sidebar;