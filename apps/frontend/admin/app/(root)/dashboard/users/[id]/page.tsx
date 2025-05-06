'use client';

import styles from './page.module.css';
import { useParams } from 'next/navigation';
import ProductSection from '@/app/components/inventory/productsection/ProductSection';


const Product = () =>
{
    // Aquí puedes usar el ID del producto para cargar los datos específicos del producto

    const { id } = useParams();

    return (
        <div>
            <ProductSection />
        </div>
    )
}

export default Product;