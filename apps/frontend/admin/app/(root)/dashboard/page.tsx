import styles from './page.module.css';
import {ClientIcon, EarningsIcon, InteractionsIcon, ProjectIcon} from "@/app/components/svg";
import StatsCard from "@/app/components/dashboard/statscard/StatsCard";
import NotificationCard from "@/app/components/dashboard/notificationcard/NotificationCard";
import ChartData from "@/app/components/dashboard/chart/ChartData";

const cards = [
    {
        title: 'Clientes',
        value: '431',
        relation: 11,
        icon: <ClientIcon />,
        color: 'FF4200'
    },
    {
        title: 'Proyectos',
        value: '20',
        relation: 2,
        icon: <ProjectIcon />,
        color: '2B3138'
    },
    {
        title: 'Ganancias',
        value: '7,500$',
        relation: 54,
        icon: <EarningsIcon />,
        color: '62FF6B'
    },
    {
        title: 'Interacciones',
        value: '5,463',
        relation: -5,
        icon: <InteractionsIcon />,
        color: '95A4FC'
    }
];

const Dashboard = () =>
{
    return (
        <div className={styles.dashboard}>
            <div className={styles.cards}>
                {cards.map((card, index) => (
                    <StatsCard
                        key={index}
                        title={card.title}
                        value={card.value}
                        relation={card.relation}
                        icon={card.icon}
                        color={card.color}
                    />
                ))}
            </div>
            <div className={styles.infoapp}>
                <ChartData />
                <NotificationCard />
            </div>
        </div>
    );
}

export default Dashboard;