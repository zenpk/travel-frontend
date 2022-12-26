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
    ["https://dimg04.c-ctrip.com/images/0301n120009v8bxl2D266_C_200_150.jpg","上海3日2晚自由行","2","3"],
    ["1","2","3"]
]}
`
