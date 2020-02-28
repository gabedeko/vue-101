<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedColor = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedColor = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedColor = 'appRed'">Load Red Template</button>
                <hr>
                <p>You are in the {{ selectedColor }} component</p>
                <hr>
                <keep-alive>
                    <component :is="selectedColor">
                        <h2>The Color</h2>
                    </component>
                </keep-alive>
                <!-- <app-blue>
                    <h2>The Color Blue</h2>
                </app-blue>
                <app-green>
                    <h2>The Color Green</h2>
                </app-green>
                <app-red>
                    <h2>The Color Red</h2>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedColor: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
