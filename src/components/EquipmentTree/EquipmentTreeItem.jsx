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

const iconURL = "https://www.osrsbox.com/osrsbox-db/items-icons/";

const EquipmentTreeItem = ({slot,item,selected,handleSlotSelection}) => {
    
    let itemSlotDefault=null;
    let className=null;
    let itemURL = null;
    if (item) {
        itemURL = `${iconURL}${item.id}.png`;
    }
    

    switch (slot) {
        case "head":
            itemSlotDefault = defaultHeadImage;
            className = styles.head;
            break;
        case "cape":
            itemSlotDefault = defaultCapeImage;
            className = styles.cape;
            break;
        case "neck":
            itemSlotDefault = defaultNeckImage;
            className = styles.neck;
            break;
        case "ammo":
            itemSlotDefault = defaultAmmoImage;
            className = styles.ammo;
            break;
        case "weapon":
            itemSlotDefault = defaultWeaponImage;
            className = styles.weapon;
            break;
        case "body":
            itemSlotDefault = defaultBodyImage;
            className = styles.body;
            break;
        case "shield":
            itemSlotDefault = defaultShieldImage;
            className = styles.shield;
            break;
        case "legs":
            itemSlotDefault = defaultLegsImage;
            className = styles.legs;
            break;
        case "hands":
            itemSlotDefault = defaultHandsImage;
            className = styles.hands;
            break;
        case "feet":
            itemSlotDefault = defaultFeetImage;
            className = styles.feet;
            break;
        case "ring":
            itemSlotDefault = defaultRingImage;
            className = styles.ring;
            break;
        default:
            break;
    }
    
    return (
        <div className={[className,(slot === selected ? styles.selected_equipment : styles.equipment)].join(' ')} onClick={(e)=>handleSlotSelection(slot)}>
            <img src={item ? itemURL : itemSlotDefault} alt={slot} className={item ? styles.item: null}/>    
        </div>
    );
    
}

export default EquipmentTreeItem;