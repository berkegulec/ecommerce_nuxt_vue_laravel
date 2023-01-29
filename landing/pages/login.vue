<template>
    <PageContent>
        <div class="section-padding">
            <div class="section-container p-l-r">
                <div class="page-login-register">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-6 col-md-6 col-sm-12 sm-m-b-50">
                            <div class="box-form-login">
                                <h2>Login</h2>
                                <div class="box-content">
                                    <div class="form-login">
                                        <form method="post" class="login">
                                            <div class="username">
                                                <label>Username or email address <span class="required">*</span></label>
                                                <input type="text" class="input-text" name="username" id="username">
                                            </div>
                                            <div class="password">
                                                <label for="password">Password <span class="required">*</span></label>
                                                <input class="input-text" type="password" name="password">
                                            </div>
                                            <div class="rememberme-lost">
                                                <div class="remember-me">
                                                    <input name="rememberme" type="checkbox" value="forever">
                                                    <label class="inline">Remember me</label>
                                                </div>
                                                <div class="lost-password">
                                                    <NuxtLink to="/forgot-password">Lost your password?</NuxtLink>
                                                </div>
                                            </div>
                                            <div class="button-login">
                                                <input type="submit" class="button" name="login" value="Login">
                                            </div>
                                            <div class="button-register">
                                                <NuxtLink to="/register">Create An Account</NuxtLink>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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