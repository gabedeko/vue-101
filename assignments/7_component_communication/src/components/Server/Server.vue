<template>
    <li
        class="list-group-item"
        @click="serverSelected"
    >
        <p>Server #{{ server.id }}</p>
    </li>
</template>

<script>
 import { eventBus } from '../../main';

 export default {
     props: ['server'],
     methods: {
         serverSelected() {
             eventBus.$emit('serverSelected', this.server);
         }
     }
 }
</script>

<style scoped>
.list-group-item {
cursor: pointer;
}
</style>
