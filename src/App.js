import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import { fetchItemsForSlot } from './api';
import { EquipmentTree, EquipmentPicker, StatTotals } from './components';
import styles from './App.module.css';

class App extends React.Component {

    initialGear  = {
        head:null,
        cape:null,
        neck:null,
        ammo:null,
        weapon:null,
        body:null,
        shield:null,
        legs:null, 
        hands:null,
        feet:null,
        ring:null,
    };

    
    constructor(props) {
        super(props);
        this.state = {
            gear: this.initialGear,
            selected:null,
            savedGear: localStorage.getItem("savedGear") ? JSON.parse(localStorage.getItem("savedGear")) : [],
        }
      }

    async componentDidMount() {
        //
    }

    handleSlotSelection = async(slot) => {
        const fetchedData = await fetchItemsForSlot(slot);
        this.setState({selected:slot,data:fetchedData});
        console.log(this.state);
    }

    handleSaveGear = (name) => {
        this.state.savedGear.push({name, gear:this.state.gear});
        localStorage.setItem('savedGear', JSON.stringify(this.state.savedGear));
    }

    handleLoadGear = (id) => {
        console.log(id);
        if(Number.isInteger(id)) {
            this.setState({
                gear: this.state.savedGear[id].gear,
                selected:null,
                data:null,
            });
        } else {
            this.setState({gear: this.initialGear});
        }
    }

    handleEquipItem = (item) => {
        switch (this.state.selected){
            case "head":
                this.setState({gear: { ...this.state.gear , head:item}});
                break;
            case "cape":
                this.setState({gear: { ...this.state.gear , cape:item}});
                break;
            case "neck":
                this.setState({gear: { ...this.state.gear , neck:item}});
                break;
            case "ammo":
                this.setState({gear: { ...this.state.gear , ammo:item}});
                break;
            case "weapon":
                this.setState({gear: { ...this.state.gear , weapon:item}});
                break;
            case "body":
                this.setState({gear: { ...this.state.gear , body:item}});
                break;
            case "shield":
                this.setState({gear: { ...this.state.gear , shield:item}});
                break;
            case "legs":
                this.setState({gear: { ...this.state.gear , legs:item}});
                break;
            case "hands":
                this.setState({gear: { ...this.state.gear , hands:item}});
                break;
            case "feet":
                this.setState({gear: { ...this.state.gear , feet:item}});
                break;
            case "ring":
                this.setState({gear: { ...this.state.gear , ring:item}});
                break;
            default:
                break;
        }
    }
    
    render() {
        const { gear,selected,data,open,savedGear } = this.state;
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

                    <div className={styles.top}>
                        <EquipmentTree gear={gear} selected={selected} handleSlotSelection={this.handleSlotSelection} handleSaveGear={this.handleSaveGear} handleLoadGear={this.handleLoadGear} savedGear={savedGear} />
                        <EquipmentPicker gear={gear} data={data} handleEquipItem={this.handleEquipItem}/>                        
                    </div>
                    <Divider></Divider>
                    <div className={styles.bottom}>
                        <StatTotals gear={gear}></StatTotals>
                    </div>


                </main>
            </div>
        )
    }
}

export default App;