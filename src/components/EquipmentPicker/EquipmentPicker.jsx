
import React from 'react';

import styles from './EquipmentPicker.module.css';
import EnhancedTable from './Table/EnhancedTable';

const EquipmentPicker = ({gear,data,handleEquipItem}) => {
        return (
            <div className={styles.content}>
                <EnhancedTable gear={gear} data={data} handleEquipItem={handleEquipItem}></EnhancedTable>
            </div>
        );
}

export default EquipmentPicker;