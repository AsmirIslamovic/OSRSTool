import React from 'react';

import EquipmentTreeItem from './EquipmentTreeItem';
import EquipmentTreeImage from '../../images/Equipment_tree.png';
import styles from './EquipmentTree.module.css';

const EquipmentTree = ({gear,selected,handleSlotSelection}) => {
  
        const {Head,Cape,Neck,Ammo,Weapon,Body,Shield,Legs,Hands,Feet,Ring} = gear; 
        console.log("selected: ",  selected)

        return (
            <div className={styles.content}>
                <img src={EquipmentTreeImage} alt="poop" className={styles.equipmentTree}/>
                <EquipmentTreeItem slot="Head" item={Head} selected={selected} handleSlotSelection={handleSlotSelection} />
                <EquipmentTreeItem slot="Cape" item={Cape} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="Neck" item={Neck} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="Ammo" item={Ammo} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="Weapon" item={Weapon} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="Body" item={Body} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="Shield" item={Shield} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="Legs" item={Legs} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="Hands" item={Hands} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="Feet" item={Feet} selected={selected} handleSlotSelection={handleSlotSelection}/>
                <EquipmentTreeItem slot="Ring" item={Ring} selected={selected} handleSlotSelection={handleSlotSelection}/>
                
            </div>
        );
}

export default EquipmentTree;