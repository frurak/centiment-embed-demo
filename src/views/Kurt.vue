<template>
    <Base>
        <div data-embed-element="Q6RYjTGVKj5Y"></div>
    </Base>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import Base from '@/components/Base.vue';

onBeforeMount(() => {
    const script = document.createElement("script");
    script.src = "https://embed.centiment.co/index.js";
    script.setAttribute("data-embed", "Q6RYjTGVKj5Y");
    document.body.append(script);
});
</script>
