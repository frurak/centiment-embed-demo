<template>
    <Base>
        <div :data-embed-element="_id"></div>
    </Base>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Base from '@/components/Base.vue';

const _id = "BIl6MDI8nXGq";

onMounted(() => {
    const existing = document.querySelector(`script[src="https://embed.centiment.co/index.js"][data-embed="${_id}"]`);
    if (!existing) {
        requestAnimationFrame(() => {
            const script = document.createElement("script");
            script.src = "https://embed.centiment.co/index.js";
            script.async = true;
            script.dataset.embed = _id;
            document.body.appendChild(script);
        });
    }
});
</script>
