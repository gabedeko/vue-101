<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
    </div>
</template>

<!--
Native modifier tells Vue JS to react to a click on that component if it happesn on the native element of that component
-->

<script>
    import Quote from './Quote.vue';
    export default {
        props: ['quotes'],
        components:{
            appQuote: Quote
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style>

</style>