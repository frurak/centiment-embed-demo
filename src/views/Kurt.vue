<template>
    <Base>
        <div data-embed-element="xuO1wUyrRaX4"></div>
    </Base>
</template>

<script setup lang="ts">
import Base from '@/components/Base.vue';

const createScript = () => {
    const script = document.createElement("script");
    script.src = "https://embed.centiment.co/index.js";
    script.setAttribute("data-embed", "xuO1wUyrRaX4");
    document.body.append(script);
};

createScript();
</script>
