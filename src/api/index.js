import axios from 'axios';

const url = 'https://www.osrsbox.com/osrsbox-db';
const iconURL = "https://www.osrsbox.com/osrsbox-db/items-icons/";


export const fetchItemsForSlot = async (slot) => {
    try {
        const data = await axios.get(`${url}/items-json-slot/items-${slot.toLowerCase()}.json`);
        
        //const modifiedData = JSON.parse(data);
        const modifiedData = [];
        console.log( [1,1,1,1,2,1,1].includes(2));
        for (let  key  in data.data) {
            if (!data.data[key].duplicate) {
                modifiedData.push({
                    id: data.data[key].id,
                    name: data.data[key].wiki_name,
                    equipment: data.data[key].equipment,
                    image: iconURL+data.data[key].id+'.png',
                })
            }
        }
        
        return modifiedData; 
    } catch (error) {
        console.log(error);
    }
}
