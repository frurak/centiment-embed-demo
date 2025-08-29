<template>
    <Base>
        <div data-embed-element="ce_UD1ZP4sM"></div>
    </Base>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import Base from '@/components/Base.vue';

onBeforeMount(() => {
    const script = document.createElement("script");
    script.src = "https://embed.centiment.co/index.js";
    script.setAttribute("data-embed", "wsSF541xvJaz");
    document.body.append(script);
});
</script>
