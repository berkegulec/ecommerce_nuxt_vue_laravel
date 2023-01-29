<template>
    <div class="shipping-address">
        <p class="form-row form-row-first validate-required">
            <label>First name <span class="required" title="required">*</span></label>
            <span class="input-wrapper">
                <input type="text" class="input-text" name="shipping_first_name" value="">
            </span>
        </p>
        <p class="form-row form-row-last validate-required">
            <label>Last name <span class="required" title="required">*</span></label>
            <span class="input-wrapper">
                <input type="text" class="input-text" name="shipping_last_name" value="">
            </span>
        </p>
        <p class="form-row form-row-wide">
            <label>Company name <span class="optional">(optional)</span></label>
            <span class="input-wrapper">
                <input type="text" class="input-text" name="shipping_company" value="">
            </span>
        </p>
        <p class="form-row form-row-wide address-field validate-required">
            <label for="shipping_country" class="">Country / Region <span class="required"
                    title="required">*</span></label>
            <span class="input-wrapper">
                <select name="billing_state" class="state-select custom-select">
                    <option value="">Select a country / region…</option>
                    <option value="VN">Vinnytsia Oblast</option>
                    <option value="VL">Volyn Oblast</option>
                    <option value="DP">Dnipropetrovsk Oblast</option>
                    <option value="DT">Donetsk Oblast</option>
                    <option value="ZT">Zhytomyr Oblast</option>
                </select>
            </span>
        </p>
        <p class="form-row address-field validate-required form-row-wide">
            <label>Street address <span class="required" title="required">*</span></label>
            <span class="input-wrapper">
                <input type="text" class="input-text" name="shipping_address_1"
                    placeholder="House number and street name" value="">
            </span>
        </p>
        <p class="form-row address-field form-row-wide">
            <label>Apartment, suite, unit, etc. <span class="optional">(optional)</span></label>
            <span class="input-wrapper">
                <input type="text" class="input-text" name="shipping_address_2"
                    placeholder="Apartment, suite, unit, etc. (optional)" value="">
            </span>
        </p>
        <p class="form-row address-field validate-required form-row-wide">
            <label>Town / City <span class="required" title="required">*</span></label>
            <span class="input-wrapper"><input type="text" class="input-text" name="shipping_city" value=""></span>
        </p>
        <p class="form-row address-field validate-required validate-state form-row-wide">
            <label for="shipping_state" class="">State / County <span class="required" title="required">*</span></label>
            <span class="input-wrapper">
                <select name="billing_state" class="state-select custom-select">
                    <option value="">Select a state / county…</option>
                    <option value="VN">Vinnytsia Oblast</option>
                    <option value="VL">Volyn Oblast</option>
                    <option value="DP">Dnipropetrovsk Oblast</option>
                    <option value="DT">Donetsk Oblast</option>
                    <option value="ZT">Zhytomyr Oblast</option>
                </select>
            </span>
        </p>
        <p class="form-row address-field validate-required validate-postcode form-row-wide">
            <label>Postcode / ZIP <span class="required" title="required">*</span></label>
            <span class="input-wrapper">
                <input type="text" class="input-text" name="shipping_postcode" value="">
            </span>
        </p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>