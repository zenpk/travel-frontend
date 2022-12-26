// 0: logo, 1: loading, 2: data1, 3: data2
import {writable} from "svelte/store";

export const mode = writable(0);

function createData() {
    const {subscribe, set, update} = writable(null);

    return {
        subscribe,
        read1: () => {
            const dataJSON = JSON.parse(data1);
            set(dataJSON);
        },
        read2: () => {
            const dataJSON = JSON.parse(data2);
            set(dataJSON);
        },
        priceLow: () => update(temp => {
            temp.plans.sort((p1, p2) => {
                let n1 = Number(p1[5].substring(1, p1[5].length - 1));
                let n2 = Number(p2[5].substring(1, p2[5].length - 1));
                return (n1 > n2) ? 1 : ((n2 > n1) ? -1 : 0);
            });
            return temp;
        }),
        priceHigh: () => update(temp => {
            temp.plans.sort((p1, p2) => {
                let n1 = Number(p1[5].substring(1, p1[5].length - 1));
                let n2 = Number(p2[5].substring(1, p2[5].length - 1));
                return (n1 < n2) ? 1 : ((n2 < n1) ? -1 : 0);
            });
            return temp;
        }),
        rate: () => update(temp => {
            temp.plans.sort((p1, p2) => {
                let n1 = Number(p1[6].substring(0, p1[6].length - 1));
                let n2 = Number(p2[6].substring(0, p2[6].length - 1));
                return (n1 < n2) ? 1 : ((n2 < n1) ? -1 : 0);
            });
            return temp;
        }),
        randomize: () => update(temp => {
            temp.plans.sort((p1, p2) => {
                return Math.floor(Math.random() * 2) - 1;
            });
            return temp;
        }),
    };
}

export const data = createData();

const data1 = `
{"plans":[
    ["https://dimg04.c-ctrip.com/images/0303q1200086ziyk37B44_C_200_150.png","重庆+成都+九寨沟+黄龙风景名胜区6日5晚跟团游","飞机","星程酒店","6日5晚","￥2488起","4.9分"],
    ["https://dimg04.c-ctrip.com/images/03070120008n3o15l0F31_C_200_150.png","重庆+武隆区5日4晚跟团游","飞机","丽呈東谷酒店","5日4晚","￥2781起","4.9分"],
    ["https://dimg04.c-ctrip.com/images/0302z120008iml07n88CC_C_200_150.jpg","重庆3日2晚跟团游","飞机","豪源两江酒店","3日2晚","￥1562起","5.0分"],
    ["https://dimg03.c-ctrip.com/images/100o0h0000008s8cw4DFB_C_200_150.jpg","重庆4日自由行","飞机","重庆JW万豪酒店","4日3晚","￥1499起","4.6分"],
    ["https://dimg03.c-ctrip.com/images/100k10000000p4vo315BD_C_200_150.jpg","成都+重庆3-10日自由行","高铁","西门智选假日酒店","3-10日","￥1850起","4.7分"]
]}
`

const data2 = `
{"plans":[
    ["https://dimg04.c-ctrip.com/images/0301n120009v8bxl2D266_C_200_150.jpg","上海3日2晚自由行","自由行","上海紫竹万怡酒店","3日2晚","￥999起","5.0分"],
    ["https://dimg03.c-ctrip.com/images/100b10000000o5lsb6DF8_C_200_150.jpg","上海2-10日自由行","高铁","上海浦东喜来登由由大酒店","2-10日","￥1463起","4.7分"],
    ["https://dimg03.c-ctrip.com/images/100h0t000000iq5q708C5_C_200_150.jpg","上海迪士尼（Disney）2-5日自由行","高铁","上海迪堡王国酒店","2-5日","￥1367起","4.5分"],
    ["https://dimg03.c-ctrip.com/images/fd/tg/g2/M07/8B/4D/Cghzf1Ww4EKAIJf0AA-a5kIApP4409_C_200_150.jpg","华东5市+乌镇5日4晚跟团游","飞机","上海浦东绿地铂骊酒店","5日4晚","￥2283起","4.9分"],
    ["https://dimg03.c-ctrip.com/images/200n1f000001gpelzBEED_C_200_150.jpg","上海+迪士尼（Disney）3日2晚私家团","专车接送","上海迪士尼乐园酒店","3日2晚","￥5221起","4.8分"]
]}
`
