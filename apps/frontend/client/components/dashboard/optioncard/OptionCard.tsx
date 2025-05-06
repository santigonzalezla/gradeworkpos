import { ReactNode } from 'react';

interface OptionCardProps {
    title: string;
    subtitle: string;
    icon: ReactNode;
    link: string;
}

const OptionCard = ({ title, subtitle, icon, link }: OptionCardProps) =>
{
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className={styles}>{subtitle}</p>
            <span>{icon}</span>
        </div>
    );
}