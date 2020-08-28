import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import { fetchItemsForSlot } from './api';
import { EquipmentTree } from './components';
import styles from './App.module.css';

const apiURL = "https://www.osrsbox.com/osrsbox-db/items-icons/";

class App extends React.Component {
    state = {
        itemId: 839,
        gear: {
            Head:null,
            Cape:null,
            Neck:null,
            Ammo:null,
            Weapon:null,
            Body:null,
            Shield:null,
            Legs:null, 
            Hands:null,
            Feet:null,
            Ring:null},
        selected:null,
    }

    async componentDidMount() {
        const fetchedData = await fetchItemsForSlot("2h");

        console.log(fetchedData);
    }

    handleSlotSelection = async(slot) => {
        console.log("Picked: "+slot);
        this.setState({selected:slot});
    }
    
    render() {
        const { itemId,gear,selected,open } = this.state;
        const itemURL = `${apiURL}${itemId}.png`;
        gear.Head = itemURL;
        gear.Ammo = itemURL;
        return (
            <div>
                <Drawer
                    className={styles.drawer}
                    variant="permanent"
                    anchor="left"
                    open={open}
                >
                    <Divider />
                    
                    <List>
                        <ListItem button key={"text"}>
                            <ListItemText primary={"text"} />
                        </ListItem>
                    </List> 
                    <Divider />
                </Drawer>
                <main className={styles.content}>
                    <div>
                        <EquipmentTree gear={gear} selected={selected} handleSlotSelection={this.handleSlotSelection}/>
                    </div>
                    
                </main>
            </div>
        )
    }
}

export default App