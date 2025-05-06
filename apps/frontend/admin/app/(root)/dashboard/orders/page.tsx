import styles from './page.module.css';
import InventoryFilter from '@/app/components/inventory/inventoryfilter/InventoryFilter';
import InventoryTable, { Column } from '@/app/components/inventory/inventorytable/InventoryTable';
import userData from "@/app/components/shared/data/users.json";

const Inventory = () =>
{


    return (
        <div className={styles.inventory}>
            <InventoryFilter />
            <InventoryTable data={userData} itemsPerPage={8} />
        </div>
    );
}

export default Inventory;