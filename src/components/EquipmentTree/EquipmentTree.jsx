import React from 'react';

import { Button, TextField, FormControl,InputLabel,Select,MenuItem}  from '@material-ui/core';


import EquipmentTreeImage from '../../images/Equipment_tree.png';
import styles from './EquipmentTree.module.css';
import EquipmentTreeItem from './EquipmentTreeItem';


class EquipmentTree extends React.Component {
        state = {
            gear: this.props.gear,
            selected: this.props.selected,
            handleSlotSelection: this.props.handleSlotSelection,
            handleSaveGear: this.props.handleSaveGear,
            handleLoadGear: this.props.handleLoadGear,
            savedGear: this.props.savedGear,
            name: '',
            saveSelected: '',
        };
        componentDidUpdate(prevProps, prevState) {
            console.log("savedGear is: ",this.state.savedGear);
            if (prevProps !== this.props) {
              this.setState({
                    gear: this.props.gear,
                    selected: this.props.selected,
                    handleSlotSelection: this.props.handleSlotSelection,
                    handleSaveGear: this.props.handleSaveGear,
                    handleLoadGear: this.props.handleLoadGear,
                    savedGear: this.props.savedGear,
                });
            }
          }

        handleLoadGear(id) {
            this.setState({saveSelected:id});
            this.state.handleLoadGear(id);
            
        }

          saveGear = () => {
            var nameCheck = this.state.savedGear.filter(gear => (gear.name === this.state.name));
            if(nameCheck.length === 0){
                this.state.handleSaveGear(this.state.name)
                this.setState({name: ''})
            } else {
                console.log('That name already exists');
            }

          }
        
        render() {
            const { gear,selected,handleSlotSelection,name, saveSelected, savedGear} = this.state;
            const {head,cape,neck,ammo,weapon,body,shield,legs,hands,feet,ring} = gear; 

            return (

                <div className={styles.content}>
                    <div className={styles.loadoutPickerContainer}>
                        <FormControl variant="filled" className={styles.loadoutPicker}>
                            <InputLabel>Load Previous Saves</InputLabel>
                            <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={saveSelected}
                            onChange={(e) => this.handleLoadGear(e.target.value)}
                            >
                            <MenuItem value={''}><em>None</em></MenuItem>
                            {savedGear.map(({name},i) => <MenuItem key={i} value={i}>{name}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </div>
                    
                    
                    <div className={styles.equipmentTree}>
                        <img src={EquipmentTreeImage} alt="Equipment Tree" className={styles.equipmentTreeBase}/>
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
                    
                    <div className={styles.nameInput}>
                        <TextField id="nameInput" label="Name" variant="outlined" value={name} onChange={(e) =>{this.setState({name:e.target.value})}} />
                    </div>
                    <div className={styles.saveButton}>
                        <Button variant="contained" color="inherit" text={'save'} 
                            onClick={() => { this.saveGear()}} >Save gear</Button>
                    </div>

                </div>
            )
        };
}

export default EquipmentTree;