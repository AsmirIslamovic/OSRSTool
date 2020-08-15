import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import { fetchItemsForSlot } from './api';
import styles from './App.module.css';

// const apiURL = "https://www.osrsbox.com/osrsbox-db/items-icons/";

class App extends React.Component {
    state = {
        itemId: 200,
    }

    async componentDidMount() {
        const fetchedData = await fetchItemsForSlot("2h");

        console.log(fetchedData);
    }
    
    render() {
        const { itemId,open } = this.state;
        console.log(itemId);
        // const itemURL = `${apiURL}${itemId}.png`
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
                        <img src="./images/Equipment_tree.png" alt="poop"/>
                        <p>
                            Hi
                        </p>
                    </div>
                    
                </main>
            </div>
        )
    }
}

export default App