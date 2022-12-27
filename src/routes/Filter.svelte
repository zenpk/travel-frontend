<script>
    import {mode, data} from "./data.js";
    import {sleep} from "./sleep.js";

    async function handlePriceLowHigh() {
        mode.set(3);
        await sleep(1500);
        data.priceLow();
        mode.set(2);
    }

    async function handlePriceHighLow() {
        mode.set(3);
        await sleep(1500);
        data.priceHigh();
        mode.set(2);
    }

    async function handleRand() {
        mode.set(3);
        await sleep(1500);
        data.randomize();
        mode.set(2);
    }

    async function handleRate() {
        mode.set(3);
        await sleep(1500);
        data.rate();
        mode.set(2);
    }
</script>

<div class="row justify-content-center mt-5">
    <div class="col-auto">
        <div class="my-card table-responsive">
            <table class="table table-borderless m-0">
                <tbody>
                <tr class="bottom">
                    <th class="light-grey align">出行方式</th>
                    <td class="light-light-grey">
                        <a href="/">飞机</a>
                        <a href="/">高铁</a>
                        <a href="/">火车</a>
                        <a href="/">轮船</a>
                        <a href="/">自驾游</a>
                    </td>
                </tr>
                <tr class="bottom">
                    <th class="light-grey align">酒店星级</th>
                    <td class="light-light-grey">
                        <a href="/">五星(钻)级</a>
                        <a href="/">四星(钻)级</a>
                        <a href="/">三星(钻)级</a>
                        <a href="/">二星(钻)级及以下</a>
                    </td>
                </tr>
                <tr>
                    <th class="light-grey align">排序方式</th>
                    <td class="light-light-grey">
                        <a href="/" on:click={handlePriceLowHigh}>价格从低到高</a>
                        <a href="/" on:click={handlePriceHighLow}>价格从高到低</a>
                        <a href="/">时间从短到长</a>
                        <a href="/">时间从长到短</a>
                        <a href="/" on:click={handleRand}>销量排序</a>
                        <a href="/" on:click={handleRate}>评价从高到低</a>
                        <span class="font-in-table">&nbsp;&nbsp;&nbsp;&nbsp;价格范围&nbsp;</span>
                        <div class="d-inline-block">
                            <input type="number" class="form-control price-width" id="price1">
                        </div>
                        &nbsp;~&nbsp;
                        <div class="d-inline-block">
                            <input type="number" class="form-control price-width" id="price2">
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
    .price-width {
        width: 60px;
    }

    .light-grey {
        background-color: #e8f4ff;
    }

    .light-light-grey {
        background-color: #fbfbfb;
    }

    .my-card {
        border-radius: 0;
        border: 0;
        box-shadow: -2px 2px 5px #dddddd;
        width: 1135px;
    }

    .bottom {
        border-bottom: 1px solid #cccccc !important;
    }

    .align {
        vertical-align: text-top !important;
    }

    a {
        font-size: 0.8rem;
        display: inline-block;
        text-decoration: none;
        padding: 5px;
        margin-right: 5px;
        color: #333333;
        background-color: #eff3ff;
    }

    a:focus{
        background-color: #abb3bb;
    }

    a:hover{
        transition:background-color 200ms ease-in-out;
        background-color: #abb3bb;
    }

    .font-in-table {
        font-size: 0.8rem;
    }
</style>
