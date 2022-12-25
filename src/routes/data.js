// 0: logo, 1: loading, 2: data1, 3: data2
import {writable} from "svelte/store";

export const mode = writable(0);


function createData() {
    const {subscribe, set} = writable(null);

    return {
        subscribe,
        read1: () => {
            const dataJSON = JSON.parse(data1);
            set(dataJSON);
        },
        read2: () => {
            const dataJSON = JSON.parse(data2);
            set(dataJSON);
        }
    };
}

export const data = createData();

const data1 = `
{"plans":[
    ["a","b","c"],
    ["1","2","3"]
]}
`

const data2 = `
{"plans":[
    ["1","2","3"],
    ["1","2","3"]
]}
`
