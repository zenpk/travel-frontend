<script>
    import Panel from './Panel.svelte'
    import Filter from "./Filter.svelte";
    import {mode, data} from './data.js'
    import {Stretch} from 'svelte-loading-spinners';
</script>

<svelte:head>
    <title>旅游比价系统</title>
    <meta name="description" content="travel-frontend"/>
</svelte:head>

<section>
    <div class="container">
        <Panel/>
        {#if $mode === 2}
            <Filter/>
        {/if}
        <div class="row justify-content-center mt-5">
            <div class="col-auto">
                {#if $mode === 1}
                    <div class="wait fs-5">
                        <Stretch/>
                        &nbsp;&nbsp;正在查询，请稍候...
                    </div>
                {:else if $mode !== 0}
                    <div class="row g-0">
                        <div class="col">
                            <div class="card table-responsive">
                                <table class="table table-borderless m-0">
                                    <thead class="blue">
                                    <tr>
                                        <th>参考图片</th>
                                        <th>名称</th>
                                        <th>出行方式</th>
                                        <th>酒店</th>
                                        <th>出游天数</th>
                                        <th>价格</th>
                                        <th>评分</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {#each $data.plans as plan}
                                        <tr class="border-bottom">
                                            <td>
                                                <img class="crop" src={plan[0]} alt="img"/>
                                            </td>
                                            <td class="fw-bold">{plan[1]}</td>
                                            <td>{plan[2]}</td>
                                            <td>{plan[3]}</td>
                                            <td>{plan[4]}</td>
                                            <td>{plan[5]}</td>
                                            <td>{plan[6]}</td>
                                        </tr>
                                    {/each}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0 justify-content-center mt-2 mb-5">
                        <div class="col-auto">
                            1&nbsp;&nbsp;
                            <a href="/">2</a>
                            &nbsp;&nbsp;
                            <a href="/">3</a>
                            &nbsp;&nbsp;
                            <a href="/">4</a>
                            &nbsp;&nbsp;
                            ...
                            &nbsp;&nbsp;
                            <a href="/">15</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            跳转到
                            <div class="d-inline-block">
                                <input type="number" class="form-control page-width">
                            </div>
                            页
                        </div>
                    </div>
                {:else}
                    <img src="/map.png" alt="map" class="mt-5">
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    .wait {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card {
        border-radius: 0;
        border: 0;
        box-shadow: -2px 2px 5px #dddddd;
        width: 1135px;
    }

    .crop {
        width: 240px;
        height: 180px;
        object-fit: cover;
    }

    td {
        vertical-align: text-top;
    }

    .page-width {
        height: 30px;
        width: 10px;
    }

    .blue {
        background-image: linear-gradient(#eef3ff, #dae6ff);
    }
</style>
