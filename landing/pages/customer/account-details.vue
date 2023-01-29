<template>
    <div class="my-account-account-details">
        <form class="edit-account" action="" method="post">
            <p class="form-row">
                <label for="account_first_name">First name <span class="required">*</span></label>
                <input type="text" class="input-text" name="account_first_name">
            </p>
            <p class="form-row">
                <label>Last name <span class="required">*</span></label>
                <input type="text" class="input-text" name="account_last_name">
            </p>
            <div class="clear"></div>
            <p class="form-row">
                <label>Display name <span class="required">*</span></label>
                <input type="text" class="input-text" name="account_display_name">
                <span><em>This will be how your name will be displayed in the account section and in reviews</em></span>
            </p>
            <div class="clear"></div>
            <p class="form-row">
                <label>Email address <span class="required">*</span></label>
                <input type="email" class="input-text" name="account_email">
            </p>
            <fieldset>
                <legend>Password change</legend>
                <p class="form-row">
                    <label>Current password (leave blank to leave unchanged)</label>
                    <input type="password" class="input-text" name="password_current" autocomplete="off">
                </p>
                <p class="form-row">
                    <label>New password (leave blank to leave unchanged)</label>
                    <input type="password" class="input-text" name="password_1" autocomplete="off">
                </p>
                <p class="form-row">
                    <label>Confirm new password</label>
                    <input type="password" class="input-text" name="password_2" autocomplete="off">
                </p>
            </fieldset>
            <div class="clear"></div>
            <p class="form-row">
                <button type="submit" class="button" name="save_account_details" value="Save changes">Save
                    changes</button>
            </p>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>