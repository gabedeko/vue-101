<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Count Up</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            counter: 0
        };
    },
    destroye() {
        console.log("Destroyed!");
    }
}
</script>

<style scoped>
</style>