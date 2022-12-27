// 0: logo, 1: loading, 2: data1, 3: data2
import {writable} from "svelte/store";

export const mode = writable(0); // 0: map; 1: loading; 2: display data; 3: partially loading

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
                let n1 = Number(p1[6].substring(1, p1[6].length - 1));
                let n2 = Number(p2[6].substring(1, p2[6].length - 1));
                return (n1 > n2) ? 1 : ((n2 > n1) ? -1 : 0);
            });
            return temp;
        }),
        priceHigh: () => update(temp => {
            temp.plans.sort((p1, p2) => {
                let n1 = Number(p1[6].substring(1, p1[6].length - 1));
                let n2 = Number(p2[6].substring(1, p2[6].length - 1));
                return (n1 < n2) ? 1 : ((n2 < n1) ? -1 : 0);
            });
            return temp;
        }),
        rate: () => update(temp => {
            temp.plans.sort((p1, p2) => {
                let n1 = Number(p1[7].substring(0, p1[7].length - 1));
                let n2 = Number(p2[7].substring(0, p2[7].length - 1));
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
    ["https://m.tuniucdn.com/fb2/t1/G5/M00/AA/8C/Cii-tFyUhzSAPVLIAi5TQ2BJuH8017_w500_h280_c1_t0.jpg","重庆+武隆+仙女山4日游","飞机","武隆山景城度假酒店","4日3晚","途牛","￥2849起","4.9分"],
    ["https://dimg03.c-ctrip.com/images/100k10000000p4vo315BD_C_200_150.jpg","成都+重庆3-10日自由行","高铁","西门智选假日酒店","3-10日","携程","￥1850起","4.7分"],
    ["https://dimg03.c-ctrip.com/images/100o0h0000008s8cw4DFB_C_200_150.jpg","重庆4日自由行","飞机","重庆JW万豪酒店","4日3晚","去哪儿","￥1499起","4.6分"],
    ["https://dimg04.c-ctrip.com/images/0302z120008iml07n88CC_C_200_150.jpg","重庆3日2晚跟团游","飞机","豪源两江酒店","3日2晚","携程","￥1562起","5.0分"],
    ["https://pic3.40017.cn/gny/line/2016/02/03/10/H4gW6T_568x360_00.jpg","重庆+桔子水晶【解放碑】双飞4日自由行","飞机","桔子水晶来福士酒店","4日3晚","同程","￥1975起","5.0分"],
    ["https://dimg04.c-ctrip.com/images/03070120008n3o15l0F31_C_200_150.png","重庆+武隆区5日4晚跟团游","飞机","丽呈東谷酒店","5日4晚","携程","￥2781起","4.9分"],
    ["https://dimg04.c-ctrip.com/images/0303q1200086ziyk37B44_C_200_150.png","重庆+成都+九寨沟+黄龙风景名胜区6日5晚跟团游","飞机","星程酒店","6日5晚","携程","￥2488起","4.9分"],
    ["https://pic5.40017.cn/01/000/e6/79/rBANC1sAM_yAFA2iAAJf3lxxTMg065_568x360_00.jpg","重庆经典渣滓洞+磁器口+长江索道+网红鹅岭二厂+弹子石老街+武隆天生三桥+乌江观景台","飞机","桔子水晶来福士酒店","4日3晚","同程","￥3060起","5.0分"],
    ["https://m.tuniucdn.com/fb2/t1/G2/M00/35/79/Cii-T1i-eS2IM2vSACYSCghEcNkAAIMGgAAAAAAJhIi666_w500_h280_c1_t0.jpg","重庆解放碑商圈酒店集结双飞3日自由行","飞机","红璞假日酒店","3日2晚","途牛","￥1469起","4.8分"],
    ["https://pic4.40017.cn/gny/line/2016/06/20/15/PZkq5g_568x360_00.jpg","【元旦节】经济游重庆双飞4日自由行","飞机","经济型自选酒店","4日3晚","同程","￥1573起","4.5分"]
]}
`

const data2 = `
{"plans":[
    ["https://s.tuniu.net/qn/image/f2/04323dca1b82bd062ef30e9ce8689bfe/86b0d2a9-f3e2-4eab-89c9-a3cfcf7a5292.jpg?imageView2/1/w/500/h/280","上海市区全季连锁酒店双飞3-7日自由行","飞机","全季酒店","3日2晚","途牛","￥1271起","4.8分"],
    ["https://dimg04.c-ctrip.com/images/0301n120009v8bxl2D266_C_200_150.jpg","上海3日2晚自由行","自驾游","上海紫竹万怡酒店","3日2晚","携程","￥999起","5.0分"],
    ["https://m.tuniucdn.com/fb2/t1/G2/M00/0D/40/Cii-TlgukyiISL2FABCPC72pTC8AAEh4ADIiqcAEI8j854_w500_h280_c1_t0.jpg","上海迪士尼玩具总动员酒店2-3日自驾游","自驾游","玩具总动员酒店","3日2晚","途牛","￥2276起","4.5分"],
    ["https://dimg03.c-ctrip.com/images/100h0t000000iq5q708C5_C_200_150.jpg","上海迪士尼（Disney）2-5日自由行","高铁","上海迪堡王国酒店","2-5日","携程","￥1367起","4.5分"],
    ["https://dimg03.c-ctrip.com/images/200n1f000001gpelzBEED_C_200_150.jpg","上海+迪士尼（Disney）3日2晚私家团","飞机","上海迪士尼乐园酒店","3日2晚","去哪儿","￥5221起","4.8分"],
    ["https://dimg03.c-ctrip.com/images/100b10000000o5lsb6DF8_C_200_150.jpg","上海2-10日自由行","高铁","上海浦东喜来登由由大酒店","2-10日","携程","￥1463起","4.6分"],
    ["https://pic4.40017.cn/gny/line/2016/05/06/20/Q2mmKd_568x360_00.jpg","上海+苏州+杭州+乌镇双飞4日跟团游","飞机","上海复旦皇冠假日酒店","4日3晚","同程","￥2890起","4.7分"],
    ["https://s.tuniu.net/qn/image/f2/ba125369df19a8698935cb06ded9cfe9/f74a7f82-6223-4286-ac21-ee0a08af4bbd.jpeg?imageView2/1/w/500/h/280","上海迪士尼+上海君澜度假酒店2日自驾游","自驾游","上海君澜度假酒店","3日2晚","途牛","￥2291起","4.7分"],
    ["https://pic5.40017.cn/02/001/f9/cd/rBLkCVog5z2AZ7kkAAKE8yecYDc115_568x360_00.jpg","苏州+杭州+上海+乌镇西栅双飞4日跟团游","飞机","上海浦津酒店","4日3晚","同程","￥2809起","4.9分"],
    ["https://dimg03.c-ctrip.com/images/fd/tg/g2/M07/8B/4D/Cghzf1Ww4EKAIJf0AA-a5kIApP4409_C_200_150.jpg","华东5市+乌镇5日4晚跟团游","飞机","上海浦东绿地铂骊酒店","5日4晚","携程","￥2283起","4.9分"]
]}
`
