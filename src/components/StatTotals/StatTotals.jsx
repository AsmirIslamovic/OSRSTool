import React from 'react';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import stab_icon from '../../images/StatIcons/Stab_icon.png';
import slash_icon from '../../images/StatIcons/Slash_icon.png';
import crush_icon from '../../images/StatIcons/Crush_icon.png';
import magic_icon from '../../images/StatIcons/Magic_icon.png';
import ranged_icon from '../../images/StatIcons/Ranged_icon.png';
import strength_icon from '../../images/StatIcons/Strength_icon.png';
import ranged_strength_icon from '../../images/StatIcons/Ranged_Strength_icon.png';
import magic_damage_icon from '../../images/StatIcons/Magic_Damage_icon.png';
import prayer_icon from '../../images/StatIcons/Prayer_icon.png';
import styles from './StatTotals.module.css';




const StatTotals = ({gear}) => {
    var stats = {
        attack_stab: 0,
        attack_slash: 0,
        attack_crush: 0,
        attack_magic: 0,
        attack_ranged: 0,
        defence_stab: 0,
        defence_slash: 0,
        defence_crush: 0,
        defence_magic: 0,
        defence_ranged: 0,
        melee_strength: 0,
        ranged_strength: 0,
        magic_damage: 0,
        prayer: 0,
    };

    for (var item in gear) {
        if(gear[item]) {
            for(var stat in gear[item].equipment) {
                stats[stat] += gear[item].equipment[stat];
            }
        }
    }
        return (
            <div className={styles.content}>
                <Paper className={styles.attack}>
                    <div className={styles.header}>
                        <p>Attack Totals</p>
                    </div>
                    <Divider></Divider>
                    <div className={styles.icons}>
                        <img src={stab_icon} alt="stab icon"/>
                        <img src={slash_icon} alt="slash icon"/>
                        <img src={crush_icon} alt="crush icon"/>
                        <img src={magic_icon} alt="magic icon"/>
                        <img src={ranged_icon} alt="ranged icon"/>
                    </div>
                    <div className={styles.values}>
                        <h5>{stats.attack_stab}</h5>
                        <h5>{stats.attack_slash}</h5>
                        <h5>{stats.attack_crush}</h5>
                        <h5>{stats.attack_magic}</h5>
                        <h5>{stats.attack_ranged}</h5>
                    </div>
                </Paper>

                <Paper className={styles.defence}>
                    <div className={styles.header}>
                        <p>Defence Totals</p>
                    </div>
                    <Divider></Divider>
                    <div className={styles.icons}>
                        <img src={stab_icon} alt="stab icon"/>
                        <img src={slash_icon} alt="slash icon"/>
                        <img src={crush_icon} alt="crush icon"/>
                        <img src={magic_icon} alt="magic icon"/>
                        <img src={ranged_icon} alt="ranged icon"/>
                    </div>
                    <div className={styles.values}>
                        <h5>{stats.defence_stab}</h5>
                        <h5>{stats.defence_slash}</h5>
                        <h5>{stats.defence_crush}</h5>
                        <h5>{stats.defence_magic}</h5>
                        <h5>{stats.defence_ranged}</h5>
                    </div>
                </Paper>

                <Paper className={styles.other}>
                    <div className={styles.header}>
                        <p>Other Totals</p>
                    </div>
                    <Divider></Divider>
                    <div className={styles.icons}>
                        <img src={strength_icon} alt="strength icon"/>
                        <img src={ranged_strength_icon} alt="ranged strength icon"/>
                        <img src={magic_damage_icon} alt="magic damage icon"/>
                        <img src={prayer_icon} alt="prayer icon"/>
                    </div>
                    <div className={styles.values}>
                        <h5>{stats.melee_strength}</h5>
                        <h5>{stats.ranged_strength}</h5>
                        <h5>{stats.magic_damage}</h5>
                        <h5>{stats.prayer}</h5>
                    </div>
                </Paper>
            </div>
        );
}
export default StatTotals;