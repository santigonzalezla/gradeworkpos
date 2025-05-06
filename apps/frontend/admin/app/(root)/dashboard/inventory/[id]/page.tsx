'use client';

import styles from './page.module.css';
import mockData from "@/app/components/shared/data/mockData.json";
import { Create, Download, Upload } from '@/app/components/svg';
import { ReactNode, useEffect, useState } from 'react';
import GenericFilter from '@/app/components/shared/genericfilter/GenericFilter';
import GenericDataTable from '@/app/components/shared/genericdatatable/GenericDataTable';
import Modal from '@/app/components/shared/modal/Modal';
import { GenericForm } from '@/app/components/shared/genericform/GenericForm';

interface Inventory {
    code: string;
    name: string;
    category: string;
    stock: number;
    price: string;
    lastUpdate: string;
    status: string;
}

interface InventoryConfig {
    columns: any[];
    itemsPerPage?: number;
    pageLabels?: {
        showing?: string;
        of?: string;
    }
}

interface InputConfig {
    fieldTypes: Record<string, string>;
    selectOptions: Record<string, string[]>;
    labelTranslations: Record<string, string>;
    placeholderTranslations: Record<string, string>;
}

const Inventory = () =>
{
    const [inventoryData, setInventoryData] = useState<Inventory[]>([]);
    const [filteredData, setFilteredData] = useState<Inventory[]>([]);
    const [config, setConfig] = useState<InventoryConfig>({columns: []});
    const [inputConfig, setInputConfig] = useState<InputConfig>({
        fieldTypes: {},
        selectOptions: {},
        labelTranslations: {},
        placeholderTranslations: {}
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filterConfig = [
        { field: 'name', placeholder: 'Nombre', label: 'nombre' },
        { field: 'category', placeholder: 'Categoría', label: 'categoría' },
        { field: 'status', placeholder: 'Estado', label: 'estado' }
    ];

    useEffect(() =>
    {
        const inventory = mockData.inventory.data as Inventory[];
        setInventoryData(mockData.inventory.data);
        setFilteredData(inventory);
        setConfig(mockData.inventory.config);
        setInputConfig(mockData.inventory.inputConfig);
    }, []);

    const handleFilterChange = (filters: Record<string, string>) =>
    {
        const filtered = inventoryData.filter(inventory =>
        {
            // Verificar cada filtro activo
            return Object.entries(filters).every(([field, value]) =>
            {
                if (!value) return true; // Si no hay valor, no filtrar por este campo

                const fieldValue = inventory[field as keyof Inventory];
                return String(fieldValue).toLowerCase().includes(value.toLowerCase());
            });
        });

        setFilteredData(filtered);
    };

    // Función para resetear filtros
    const handleResetFilters = () =>
    {
        setFilteredData(inventoryData);
    };

    const handleOverlayClick = () =>
    {
        setIsModalOpen(false);
    };

    const handleSubmit = (formData: Record<string, any>) =>
    {
        console.log('Datos del formulario:', formData);
        // Aquí implementarías la lógica para guardar los datos
    };

    const columns = [
        { key: 'code', header: 'CÓDIGO', width: '10%' },
        { key: 'name', header: 'PRODUCTO', width: '20%' },
        { key: 'category', header: 'CATEGORÍA', width: '15%' },
        { key: 'stock', header: 'CANTIDAD', width: '12%' },
        { key: 'price', header: 'PRECIO', width: '12%' },
        { key: 'lastUpdate', header: 'ACTUALIZACIÓN', width: '15%' },
        { key: 'status', header: 'ESTADO', width: '15%' }
    ];

    const createProduct = (): ReactNode =>
    {
        return (
            <GenericForm
                columns={columns}
                onSubmit={handleSubmit}
                onClose={handleOverlayClick}
                inputConfig={inputConfig}
            />
        );
    }

    return (
        <div className={styles.inventory}>
            <div className={styles.inventoryTop}>
                <GenericFilter
                    filterConfig={filterConfig}
                    onFilterChange={handleFilterChange}
                    onResetFilters={handleResetFilters}
                />
                <div className={styles.topButtons}>
                    <button className={styles.create} onClick={() => setIsModalOpen(prevState => !prevState)}>
                        <Create />
                    </button>
                    <button className={styles.upload}><Upload /></button>
                    <button className={styles.download}><Download /></button>
                </div>
            </div>
            <GenericDataTable
                data={filteredData}
                config={config}
            />
            {isModalOpen && (
                <Modal children={createProduct()} onClose={handleOverlayClick} />
            )}
        </div>
    );
}

export default Inventory;