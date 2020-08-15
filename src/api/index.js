import axios from 'axios';

const url = 'https://www.osrsbox.com/osrsbox-db';

export const fetchItemsForSlot = async (slot) => {
    try {
        const response = await axios.get(`${url}/items-json-slot/items-${slot}.json`);
        return response; 
    } catch (error) {
        console.log(error);
    }
}
