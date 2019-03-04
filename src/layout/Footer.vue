<template lang="html">
    <footer class="text-center">
        <hr>
        <p>Copyright of application {{date}}</p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            date:new Date().getFullYear()
        }
    }
};
</script>

<style lang="css" scoped>
</style>
