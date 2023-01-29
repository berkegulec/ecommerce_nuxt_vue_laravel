<template>
    <div class="billing-fields">
        <h3>Billing details</h3>
        <div class="billing-fields-wrapper">
            <p class="form-row form-row-first validate-required">
                <label>First name <span class="required" title="required">*</span></label>
                <span class="input-wrapper"><input type="text" class="input-text" name="billing_first_name"
                        value=""></span>
            </p>
            <p class="form-row form-row-last validate-required">
                <label>Last name <span class="required" title="required">*</span></label>
                <span class="input-wrapper"><input type="text" class="input-text" name="billing_last_name"
                        value=""></span>
            </p>
            <p class="form-row form-row-wide">
                <label>Company name <span class="optional">(optional)</span></label>
                <span class="input-wrapper"><input type="text" class="input-text" name="billing_company"
                        value=""></span>
            </p>
            <p class="form-row form-row-wide validate-required">
                <label>Country / Region <span class="required" title="required">*</span></label>
                <span class="input-wrapper">
                    <select name="billing_country" class="country-select custom-select">
                        <option value="">Select a country / region…</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Åland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                    </select>
                </span>
            </p>
            <p class="form-row address-field validate-required form-row-wide">
                <label>Street address <span class="required" title="required">*</span></label>
                <span class="input-wrapper">
                    <input type="text" class="input-text" name="billing_address_1"
                        placeholder="House number and street name" value="">
                </span>
            </p>
            <p class="form-row address-field form-row-wide">
                <label>Apartment, suite, unit, etc.&nbsp;<span class="optional">(optional)</span></label>
                <span class="input-wrapper">
                    <input type="text" class="input-text" name="billing_address_2"
                        placeholder="Apartment, suite, unit, etc. (optional)" value="">
                </span>
            </p>
            <p class="form-row address-field validate-required form-row-wide">
                <label for="billing_city" class="">Town / City <span class="required" title="required">*</span></label>
                <span class="input-wrapper">
                    <input type="text" class="input-text" name="billing_city" value="">
                </span>
            </p>
            <p class="form-row address-field validate-required validate-state form-row-wide">
                <label>State / County <span class="required" title="required">*</span></label>
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
                    <input type="text" class="input-text" name="billing_postcode" value="">
                </span>
            </p>
            <p class="form-row form-row-wide validate-required validate-phone">
                <label>Phone <span class="required" title="required">*</span></label>
                <span class="input-wrapper">
                    <input type="tel" class="input-text" name="billing_phone" value="">
                </span>
            </p>
            <p class="form-row form-row-wide validate-required validate-email">
                <label>Email address <span class="required" title="required">*</span></label>
                <span class="input-wrapper">
                    <input type="email" class="input-text" name="billing_email" value="" autocomplete="off">
                </span>
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>