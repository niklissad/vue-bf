<template>
    <div id="add-form">
        <ad-input></ad-input>

        <ad-select></ad-select>

    </div>
</template>

<script>
    import AdInput from './components/AdInput.vue'
    import AdSelect from './components/AdSelect.vue'

    export default {
        components: {
            'ad-input': AdInput,
            'ad-select': AdSelect
        },
        methods: {

        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
    label {
        display: block;
    }
</style>
