<template>
    <div class="base">
        <div class="base__nav">
            <div class="base__nav__logo">
                Logo
            </div>

            <div class="base__nav__items">
                <p>Home</p>
                <p>Blog</p>
                <p>About</p>
            </div>
        </div>

        <div class="base__content">
            <h1>This is sample article for demo purpose</h1>
            <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nisl nunc. In molestie
                et ante ac aliquam. Pellentesque sagittis massa non nibh aliquam, non commodo tellus
                rhoncus. In nec condimentum risus. Donec porta lobortis lacus. Cras interdum urna at diam
                vulputate placerat.
            </h4>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nisl nunc. In molestie
                et ante ac aliquam. Pellentesque sagittis massa non nibh aliquam, non commodo tellus
                rhoncus. In nec condimentum risus. Donec porta lobortis lacus. Cras interdum urna at diam
                vulputate placerat. Sed pellentesque mattis risus eget semper. Nullam non molestie odio.
                Nullam tempus ex quis libero blandit, eget vestibulum lectus tempus. Sed mollis lacinia nibh
                quis consectetur. Vivamus rhoncus orci ut porttitor varius. Duis nec diam semper, venenatis
                sapien sed, auctor elit. Sed mattis blandit nisi nec gravida. Praesent malesuada augue et
                sem tincidunt, vel rutrum nulla dignissim.
            </p>

            <p>
                Ut non tempor risus, eget bibendum est. Cras id posuere massa, sed sodales odio. Aenean
                cursus turpis non massa dictum dictum. In mollis mollis ligula, at viverra enim convallis
                vel. Nam sollicitudin erat sit amet lorem rhoncus, eget facilisis erat porta. Phasellus a
                sem at sapien tempor iaculis sed sit amet erat. Vivamus dapibus posuere arcu, at finibus
                nulla. Nulla facilisi. Mauris egestas nulla et laoreet mollis. Curabitur quis commodo felis.
                Nam iaculis condimentum lacinia.
            </p>

            <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sample">

            <p>
                Vivamus id gravida dui. Donec ac imperdiet urna. Donec commodo, lorem sed ultrices luctus,
                dui metus iaculis mi, quis cursus tellus neque id magna. Cras condimentum, libero sit amet
                varius ullamcorper, lorem quam placerat massa, quis pulvinar justo leo nec ligula. Donec
                pellentesque augue sed tellus congue finibus. Proin ut tortor et lacus faucibus vestibulum a
                vel arcu. Aenean tincidunt eros non metus dapibus pulvinar. Mauris sodales faucibus leo
                cursus hendrerit. Nam eu elit non nulla pellentesque iaculis sed sed leo. Proin laoreet leo
                ipsum, at volutpat sem convallis nec.
            </p>

            <div class="base__embed">
                <p>This is where the <i>Inline</i> / <i>Popup</i> embeds go:</p>

                <slot />
            </div>

            <p>
                Phasellus tempus dolor risus, id aliquam dolor auctor a. Proin scelerisque convallis risus a
                posuere. Nulla congue neque vestibulum urna maximus, non varius urna eleifend. Proin laoreet
                blandit ligula in rhoncus. Ut facilisis elementum sagittis. Phasellus nisi arcu, eleifend
                vitae nisl nec, venenatis blandit leo. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus facilisis euismod urna molestie dapibus. Morbi felis velit, semper in tortor
                ut, tempus consectetur quam. Curabitur vel suscipit lectus, vel convallis massa. Maecenas
                fermentum hendrerit facilisis. Pellentesque porta ullamcorper egestas. Aliquam tincidunt
                egestas laoreet. Integer varius imperdiet dui, in accumsan quam scelerisque eu. Suspendisse
                aliquam tortor velit, at blandit ex ultrices id.
            </p>

            <p>
                Vivamus quis odio eget lectus iaculis porttitor. Cras iaculis quis est non fermentum. Sed
                vitae turpis condimentum, porta arcu volutpat, laoreet dui. Nulla tempor maximus mi ac
                dictum. Morbi at augue tellus. Maecenas maximus ultrices justo vel interdum. Donec ut tellus
                finibus, mattis nulla ut, pharetra sem. In vehicula porta blandit. Suspendisse potenti.
                Morbi facilisis molestie consectetur. Maecenas at risus eu quam commodo pellentesque ac a
                metus. Vivamus mauris sapien, tincidunt vitae ipsum et, porttitor gravida enim.
            </p>

            <p>
                Vivamus quis odio eget lectus iaculis porttitor. Cras iaculis quis est non fermentum. Sed
                vitae turpis condimentum, porta arcu volutpat, laoreet dui. Nulla tempor maximus mi ac
                dictum. Morbi at augue tellus. Maecenas maximus ultrices justo vel interdum. Donec ut tellus
                finibus, mattis nulla ut, pharetra sem. In vehicula porta blandit. Suspendisse potenti.
                Morbi facilisis molestie consectetur. Maecenas at risus eu quam commodo pellentesque ac a
                metus. Vivamus mauris sapien, tincidunt vitae ipsum et, porttitor gravida enim.
            </p>

            <p>
                Vivamus quis odio eget lectus iaculis porttitor. Cras iaculis quis est non fermentum. Sed
                vitae turpis condimentum, porta arcu volutpat, laoreet dui. Nulla tempor maximus mi ac
                dictum. Morbi at augue tellus. Maecenas maximus ultrices justo vel interdum. Donec ut tellus
                finibus, mattis nulla ut, pharetra sem. In vehicula porta blandit. Suspendisse potenti.
                Morbi facilisis molestie consectetur. Maecenas at risus eu quam commodo pellentesque ac a
                metus. Vivamus mauris sapien, tincidunt vitae ipsum et, porttitor gravida enim.
            </p>

            <p>
                Vivamus quis odio eget lectus iaculis porttitor. Cras iaculis quis est non fermentum. Sed
                vitae turpis condimentum, porta arcu volutpat, laoreet dui. Nulla tempor maximus mi ac
                dictum. Morbi at augue tellus. Maecenas maximus ultrices justo vel interdum. Donec ut tellus
                finibus, mattis nulla ut, pharetra sem. In vehicula porta blandit. Suspendisse potenti.
                Morbi facilisis molestie consectetur. Maecenas at risus eu quam commodo pellentesque ac a
                metus. Vivamus mauris sapien, tincidunt vitae ipsum et, porttitor gravida enim.
            </p>

            <p>
                Vivamus quis odio eget lectus iaculis porttitor. Cras iaculis quis est non fermentum. Sed
                vitae turpis condimentum, porta arcu volutpat, laoreet dui. Nulla tempor maximus mi ac
                dictum. Morbi at augue tellus. Maecenas maximus ultrices justo vel interdum. Donec ut tellus
                finibus, mattis nulla ut, pharetra sem. In vehicula porta blandit. Suspendisse potenti.
                Morbi facilisis molestie consectetur. Maecenas at risus eu quam commodo pellentesque ac a
                metus. Vivamus mauris sapien, tincidunt vitae ipsum et, porttitor gravida enim.
            </p>
        </div>
    </div>
</template>

<style scoped>
.base {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    max-width: 800px;
    margin: 0 auto;
}

.base__nav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: calc(100% - 128px);
    height: 64px;
    background: #FFFFFF;
    border-bottom: 1px solid #000000;
    padding: 0 64px;
}

.base__nav__logo {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.base__nav__items {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
}

.base__nav__items p {
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.base__content {
    padding: 80px 16px;
}

.base__content h1 {
    font-size: 36px;
    font-weight: 700;
    margin: 24px 0;
}

.base__content h4 {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    margin: 24px 0;
    color: #3446a8;
}

.base__content img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
}

.base__embed {
    width: 100%;

    > div {
        width: 100%;
    }
}

.base__embed p, .base__embed p i {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    color: #3446a8;
    margin-bottom: 12px;
}

@media (max-width: 900px) {
    .base__nav {
        width: calc(100% - 32px);
        padding: 0 16px;
    }
}
</style>
<script setup lang="ts">
</script>
