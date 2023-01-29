<template>
    <PageContent>
        <div class="section-padding">
            <div class="section-container p-l-r">
                <div class="page-login-register">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="box-form-login">
                                <h2 class="register">Register</h2>
                                <div class="box-content">
                                    <div class="form-register">
                                        <form method="post" class="register">
                                            <div class="email">
                                                <label>Email address <span class="required">*</span></label>
                                                <input type="email" class="input-text" name="email" value="">
                                            </div>
                                            <div class="password">
                                                <label>Password <span class="required">*</span></label>
                                                <input type="password" class="input-text" name="password">
                                            </div>
                                            <div class="button-register">
                                                <input type="submit" class="button" name="register" value="Register">
                                            </div>
                                            <div class="button-login">
                                                <NuxtLink to="/login">Already has an account?</NuxtLink>
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