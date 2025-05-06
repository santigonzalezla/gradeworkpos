import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@repo/ui/button';

const Home = ()  =>
{
    return (
        <div className={styles.page}>
            <h1>Cliente</h1>
            <Button appName={""}>Aqui</Button>
        </div>
    );
}
