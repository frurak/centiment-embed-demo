<template>
    <Base>
        <div data-embed-element="xuO1wUyrRaX4"></div>
    </Base>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Base from '@/components/Base.vue';

onMounted(() => {
    const script = document.createElement("script");
    script.src = "https://embed.centiment.co/index.js";
    script.async = true;
    script.dataset.embed = "xuO1wUyrRaX4";
    document.body.append(script);
});
</script>
