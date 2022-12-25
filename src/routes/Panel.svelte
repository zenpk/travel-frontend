<script>
    import FaSearch from "svelte-icons/fa/FaSearch.svelte";
    import {onMount} from "svelte";
    import {mode, data} from "./data.js";

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
        mode.set(1); // loading
        await sleep(2000);
        const departure = document.getElementById("departure");
        if (departure.value === "北京") {
            data.read1();
        } else {
            data.read2();
        }
        mode.set(2); // display data
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
</script>

<panel>
    <div class="container mt-5">
        <form class="row g-1 justify-content-center">
            <div class="col-auto form-floating">
                <input type="text" class="form-control no-round" id="departure" placeholder="出发地">
                <label for="departure">出发地</label>
            </div>
            <div class="col-auto form-floating">
                <input type="text" class="form-control no-round" id="destination" placeholder="目的地">
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
    </div>
</panel>

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
