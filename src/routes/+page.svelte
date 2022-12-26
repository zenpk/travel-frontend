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
                    {#each $data.plans as plan}
                        <div class="row mb-5 card g-0">
                            <div class="col-2">
                                <img class="crop" src={plan[0]} alt="img"/>
                            </div>
                            <div class="col-10">{plan[1]}</div>
                        </div>
                    {/each}
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

    .page-width {
        height: 30px;
        width: 10px;
    }

    .blue {
        background-image: linear-gradient(#d1e4ff, #bbcdff);
    }
</style>
