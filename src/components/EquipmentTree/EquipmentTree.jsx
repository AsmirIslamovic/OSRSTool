import React from 'react';

import EquipmentTreeItem from './EquipmentTreeItem';
import EquipmentTreeImage from '../../images/Equipment_tree.png';
import styles from './EquipmentTree.module.css';

const EquipmentTree = ({gear,selected,handleSlotSelection}) => {
  
        const {head,cape,neck,ammo,weapon,body,shield,legs,hands,feet,ring} = gear; 
        return (
            <div className={styles.content}>
                <img src={EquipmentTreeImage} alt="Equipment Tree" className={styles.equipmentTree}/>
                <EquipmentTreeItem slot="head" item={head} selected={selected} handleSlotSelection={handleSlotSelection} />
                <EquipmentTreeItem slot="cape" item={cape} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="neck" item={neck} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="ammo" item={ammo} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="weapon" item={weapon} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="body" item={body} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="shield" item={shield} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="legs" item={legs} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="hands" item={hands} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="feet" item={feet} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="ring" item={ring} selected={selected} handleSlotSelection={handleSlotSelection}/>
                
            </div>
        );
}

export default EquipmentTree;