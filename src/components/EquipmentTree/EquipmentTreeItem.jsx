import React from 'react';

import styles from './EquipmentTree.module.css';
import defaultHeadImage from '../../images/Head_slot.png'
import defaultCapeImage from '../../images/Cape_slot.png'
import defaultNeckImage from '../../images/Neck_slot.png'
import defaultAmmoImage from '../../images/Ammo_slot.png'
import defaultWeaponImage from '../../images/Weapon_slot.png'
import defaultBodyImage from '../../images/Body_slot.png'
import defaultShieldImage from '../../images/Shield_slot.png'
import defaultLegsImage from '../../images/Legs_slot.png'
import defaultHandsImage from '../../images/Hands_slot.png'
import defaultFeetImage from '../../images/Feet_slot.png'
import defaultRingImage from '../../images/Ring_slot.png'

const EquipmentTreeItem = ({slot,item,selected,handleSlotSelection}) => {
    
    let itemSlotDefault=null;
    let className=null;

    switch (slot) {
        case "Head":
            itemSlotDefault = defaultHeadImage;
            className = styles.head;
            break;
        case "Cape":
            itemSlotDefault = defaultCapeImage;
            className = styles.cape;
            break;
        case "Neck":
            itemSlotDefault = defaultNeckImage;
            className = styles.neck;
            break;
        case "Ammo":
            itemSlotDefault = defaultAmmoImage;
            className = styles.ammo;
            break;
        case "Weapon":
            itemSlotDefault = defaultWeaponImage;
            className = styles.weapon;
            break;
        case "Body":
            itemSlotDefault = defaultBodyImage;
            className = styles.body;
            break;
        case "Shield":
            itemSlotDefault = defaultShieldImage;
            className = styles.shield;
            break;
        case "Legs":
            itemSlotDefault = defaultLegsImage;
            className = styles.legs;
            break;
        case "Hands":
            itemSlotDefault = defaultHandsImage;
            className = styles.hands;
            break;
        case "Feet":
            itemSlotDefault = defaultFeetImage;
            className = styles.feet;
            break;
        case "Ring":
            itemSlotDefault = defaultRingImage;
            className = styles.ring;
            break;
        default:
            break;
    }
    
    return (
        <div className={[className,(slot === selected ? styles.selected_equipment : styles.equipment)].join(' ')} onClick={(e)=>handleSlotSelection(slot)}>
            <img src={item ? item : itemSlotDefault} alt={slot} className={item ? styles.item: null}/>    
        </div>
    );
    
}

export default EquipmentTreeItem;