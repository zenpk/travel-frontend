<script>
</script>

<div class="row justify-content-center mt-5">
    <div class="col-auto">
        <div class="card table-responsive">
            <table class="table table-borderless m-0">
                <tbody>
                <tr class="bottom">
                    <th class="light-grey align">出行方式</th>
                    <td>
                        <a href="/">飞机</a>
                        <a href="/">高铁</a>
                        <a href="/">火车</a>
                        <a href="/">轮船</a>
                        <a href="/">自驾游</a>
                    </td>
                </tr>
                <tr class="bottom">
                    <th class="light-grey">酒店星级</th>
                    <td>
                        <a href="/">五星(钻)级</a>
                        <a href="/">四星(钻)级</a>
                        <a href="/">三星(钻)级</a>
                        <a href="/">二星(钻)级及以下</a>
                    </td>
                </tr>
                <tr>
                    <th class="light-grey">排序方式</th>
                    <td>
                        <a href="/">价格从低到高</a>
                        <a href="/">价格从高到低</a>
                        <a href="/">时间从短到长</a>
                        <a href="/">时间从长到短</a>
                        <a href="/">销量排序</a>
                        <a href="/">评价从高到低</a>
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

    .card {
        border-radius: 0;
        border: 0;
        box-shadow: -2px 2px 5px #dddddd;
        width: 1135px;
    }

    .bottom {
        border-bottom: 1px solid #cccccc !important;
    }

    .align {
        vertical-align: text-top;
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

    .font-in-table {
        font-size: 0.8rem;
    }
</style>
