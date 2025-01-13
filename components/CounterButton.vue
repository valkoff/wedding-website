<template>
    <button type="button" class="h-8 px-3 text-white bg-primary hover:bg-opacity-90">
        {{ content }}
    </button>
</template>

<script lang="ts" setup>
defineProps({
    content: String
})
</script>
