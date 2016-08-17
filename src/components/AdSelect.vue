<template>
    <label>
        Selected: {{select}}<br>
        <select v-model="select">
            <option value="0" disabled selected>none</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </label>

</template>

<script>
    export default {
        data () {
            return {
                // Note: modifying `msg` below will not cause changes to occur with
                // hot-reload. As reloaded components preserve their initial state,
                // modifying these values will have no effect.
                select: this.select,
            }
        }
    }
</script>
