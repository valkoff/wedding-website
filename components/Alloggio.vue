<template>
    <div class="space-y-2">
        <h1 class="text-2xl tracking-widest text-primary">{{ title }}</h1>
        <p class="text-lg font-bold">{{ subtitle }}</p>
        <p>{{ description }}</p>
        <p class="font-italic">{{ elapsed_time }}</p>
        <div class="text-xl font-bold text-primary">
            <a :href="indication_link" target="_blank">Indicazioni</a>
        </div>
    </div>

</template>

<script lang="ts" setup>

defineProps({
    title: String,
    subtitle: String,
    description: String,
    elapsed_time: String,
    indication_link: String
})
</script>