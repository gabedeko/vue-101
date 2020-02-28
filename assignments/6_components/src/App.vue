<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <servers></servers>
            <app-servers-detail></app-servers-detail>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue'
    import Servers from './components//server/Servers.vue'
    import ServersDetail from './components/server/ServersDetail.vue'
    import Footer from './components/shared/Footer.vue'

    export default {
        components: {
            appHeader: Header,
            Servers,
            'app-servers-detail': ServersDetail,
            'app-footer': Footer,
        }
    }
</script>

<style>

</style>
