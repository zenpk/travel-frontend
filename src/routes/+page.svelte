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
    <Panel/>
    {#if $mode !== 1}
        <!--<Filter/>-->
    {/if}
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-auto">
                {#if $mode === 1}
                    <div class="wait fs-5">
                        <Stretch/>
                        &nbsp;&nbsp;正在查询，请稍候...
                    </div>
                {:else if $mode !== 0}
                    {$data.plans}
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
</style>
