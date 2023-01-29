<template>
    <PageContent title="Forgot Password">
        <div class="section-padding" >
            <div class="section-container p-l-r">
                <div class="page-forget-password">
                    <form method="post" class="reset-password">
                        <p>Lost your password? Please enter your username or email address. You will receive a link to
                            create a new password via email.</p>
                        <p class="form-row form-row-first">
                            <label>Username or email</label>
                            <input class="input-text" type="text" name="user_login" autocomplete="username">
                        </p>
                        <div class="clear"></div>
                        <p class="form-row">
                            <button type="submit" class="button" value="Reset password">Reset password</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </PageContent>
</template>

<script setup>
import PageContent from '~~/components/Template/PageContent.vue';


</script>

<style lang="scss" scoped>

</style>