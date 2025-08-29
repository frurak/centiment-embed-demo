<template>
    <Base>
        <div data-centiment-embed="ce_hGc9c72Y"></div>
    </Base>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import Base from '@/components/Base.vue';

onBeforeMount(() => {
    const script = document.createElement("script");
    script.src = "https://embed.centiment.co/index.js";
    script.setAttribute("data-embed", "aSvJysfiBh2N");
    document.body.append(script);
});
</script>
