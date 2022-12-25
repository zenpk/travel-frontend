<script>
    import FaPlaneDeparture from 'svelte-icons/fa/FaPlaneDeparture.svelte';
    import {HomeIcon, SearchIcon, DatabaseIcon} from 'svelte-feather-icons';
</script>

<header>
    <nav class="navbar navbar-expand-md mb-4 px-2 py-2 navbar-my">
        <div class="container-fluid navbar-brand">
            <div class="icon-navbar me-3">
                <FaPlaneDeparture/>
            </div>
            <div class="fw-bold fs-3 me-5">
                旅游比价系统
            </div>
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item me-2">
                    <a class="nav-link active" href="/">
                        <HomeIcon/>
                        主页
                    </a>
                </li>
                <li class="nav-item me-2">
                    <a class="nav-link active" href="/">
                        <SearchIcon/>
                        路线查询
                    </a>
                </li>
                <li class="nav-item me-2">
                    <a class="nav-link active" href="/">
                        <DatabaseIcon/>
                        数据日志
                    </a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-success" type="submit">搜索</button>
            </form>
        </div>
    </nav>
</header>

<style>
    .icon-navbar {
        height: 32px;
        width: 32px;
        color: black;
    }

    .navbar-my {
        background-color: #f5f5f5;
        box-shadow: 0 2px 5px 0 #aaaaaa;
    }
</style>
