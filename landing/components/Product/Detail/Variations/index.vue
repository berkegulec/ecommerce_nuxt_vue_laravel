<template>
    <div class="variations">
        <table cellspacing="0">
            <tbody>
                <tr>
                    <td class="label">Size</td>
                    <td class="attributes">
                        <ul class="text">
                            <li><span>L</span></li>
                            <li><span>M</span></li>
                            <li><span>S</span></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td class="label">Color</td>
                    <td class="attributes">
                        <ul class="colors">
                            <li><span class="color-1"></span></li>
                            <li><span class="color-2"></span></li>
                            <li><span class="color-3"></span></li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps(['product_id']);
</script>

<style lang="scss" scoped>

</style>