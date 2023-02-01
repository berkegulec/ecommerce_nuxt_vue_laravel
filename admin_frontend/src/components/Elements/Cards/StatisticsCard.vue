<template>
    <div class="card card-body text-white has-bg-image" :style="{ backgroundColor: backgroundColor }"
        @click="$emit('cardClicked',$event)">
        <div class="media">
            <div class="mr-3 align-self-center" v-if="iconPosition == 'left'">
                <i class="icon-pointer icon-3x" :style="{ color: iconColor }"></i>
            </div>


            <div class="media-body" :class="{ 'text-right': iconPosition == 'left' }">
                <h3 class="mb-0">{{ numberArea }}</h3>
                <span class="text-uppercase font-size-xs">{{ textContent }}</span>
            </div>

            <div class="ml-3 align-self-center" v-if="iconPosition == 'right'">
                <i class="icon-bubbles4 icon-3x opacity-75"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    numberArea: {
        type: [String, Number]
    },
    iconPosition: {
        type: String,
        default: "right"
    },
    iconColor: String,
    textContent: String,
    backgroundColor: String
});
const emit = defineEmits(['cardClicked']);



</script>

<style lang="scss" scoped>

</style>