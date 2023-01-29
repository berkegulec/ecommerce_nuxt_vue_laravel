<template>
    <div class="account-fields">
        <p class="form-row form-row-wide">
            <label class="checkbox">
                <input class="input-checkbox" type="checkbox" name="createaccount" value="1">
                <span>Create an account?</span>
            </label>
        </p>
        <div class="create-account">
            <p class="form-row validate-required">
                <label>Create account password <span class="required" title="required">*</span></label>
                <span class="input-wrapper password-input">
                    <input type="password" class="input-text" name="account_password" value="" autocomplete="off">
                    <span class="show-password-input"></span>
                </span>
            </p>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>