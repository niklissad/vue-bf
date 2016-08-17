<template>
    <label>
        Label of {{input}}<br>
        <input type="text" v-model="input">
    </label>

</template>

<script>
    export default {
        data () {
            return {
                // Note: modifying `msg` below will not cause changes to occur with
                // hot-reload. As reloaded components preserve their initial state,
                // modifying these values will have no effect.
                input: this.input
            }
        }
    }
</script>
