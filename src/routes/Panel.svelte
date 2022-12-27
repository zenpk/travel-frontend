<script>
    import FaSearch from "svelte-icons/fa/FaSearch.svelte";
    import {onMount} from "svelte";
    import {mode, data} from "./data.js";
    import {sleep} from "./sleep.js";

    onMount(() => {
        function getDateString(now) {
            const offset = now.getTimezoneOffset()
            const newDate = new Date(now.getTime() - (offset * 60 * 1000))
            return newDate.toISOString().split("T")[0];
        }

        const now = new Date();
        const time1 = document.getElementById("time1");
        time1.value = getDateString(now);
        const time2 = document.getElementById("time2");
        now.setDate(now.getDate() + 1);
        time2.value = getDateString(now);
    });

    async function readData() {
        mode.set(1);
        await sleep(2500);
        const destination = document.getElementById("destination");
        if (destination.value === "重庆") {
            data.read1();
        } else {
            data.read2();
        }
        mode.set(2);
    }

</script>

<form class="row g-1 justify-content-center mt-5">
    <div class="col-auto form-floating">
        <input type="text" class="form-control no-round" id="departure" placeholder="出发地" list="province"
               autocomplete="off">
        <label for="departure">出发地</label>
        <datalist id="province">
            <option value="北京">
            <option value="上海">
            <option value="天津">
            <option value="重庆">
            <option value="河北">
            <option value="山西">
            <option value="辽宁">
            <option value="吉林">
            <option value="黑龙江">
            <option value="江苏">
            <option value="浙江">
            <option value="安徽">
            <option value="福建">
            <option value="江西">
            <option value="山东">
            <option value="河南">
            <option value="湖北">
            <option value="湖南">
            <option value="广东">
            <option value="海南">
            <option value="四川">
            <option value="贵州">
            <option value="云南">
            <option value="陕西">
            <option value="甘肃">
            <option value="青海">
            <option value="内蒙古">
            <option value="广西">
            <option value="西藏">
            <option value="宁夏">
            <option value="新疆">
            <option value="香港">
            <option value="澳门">
            <option value="台湾">
        </datalist>
    </div>
    <div class="col-auto form-floating">
        <input type="text" class="form-control no-round" id="destination" placeholder="目的地" list="province"
               autocomplete="off">
        <label for="destination">目的地</label>
    </div>
    <div class="col-auto form-floating">
        <input type="date" class="form-control no-round" id="time1">
        <label for="time1">出发日期</label>
    </div>
    <div class="col-auto form-floating">
        <input type="date" class="form-control no-round" id="time2">
        <label for="time2">返回日期</label>
    </div>
    <div class="col-auto form-floating">
        <input type="number" class="form-control no-round" id="number" placeholder="目的地">
        <label for="number">出行人数</label>
    </div>
    <div class="col-auto">
        <button type="submit" class="btn btn-primary no-round button-search" on:click={readData}>
            <div class="icon-search">
                <FaSearch/>
            </div>
        </button>
    </div>
</form>

<style>
    .button-search {
        height: 58px;
        width: 58px;
    }

    .icon-search {
        height: 24px;
        width: 24px;
        margin: auto;
        color: white;
    }

    .no-round {
        display: inline-block !important;
        border-radius: 0 !important;
    }
</style>
