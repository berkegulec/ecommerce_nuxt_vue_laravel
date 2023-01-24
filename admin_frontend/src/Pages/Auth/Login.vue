<template>
    <div class="page-content">
        <!-- Main content -->
        <div class="content-wrapper">
            <!-- Inner content -->
            <div class="content-inner">
                <!-- Content area -->
                <div class="content d-flex justify-content-center align-items-center">
                    <!-- Login form -->
                    <form class="login-form" @submit="sendForm">
                        <div class="card mb-0">
                            <div class="card-body">
                                <div class="text-center mb-3">
                                    <i
                                        class="icon-reading icon-2x text-secondary border-secondary border-3 rounded-pill p-3 mb-3 mt-1"></i>
                                    <h5 class="mb-0">Login to your account</h5>
                                    <span class="d-block text-muted">Enter your credentials below</span>
                                </div>

                                <div class="form-group form-group-feedback form-group-feedback-left">
                                    <input type="text" class="form-control" placeholder="Email" required
                                        v-model="formData.email" />
                                    <div class="form-control-feedback">
                                        <i class="icon-user text-muted"></i>
                                    </div>
                                </div>

                                <div class="form-group form-group-feedback form-group-feedback-left">
                                    <input type="password" class="form-control" placeholder="Password" required
                                        v-model="formData.password" />
                                    <div class="form-control-feedback">
                                        <i class="icon-lock2 text-muted"></i>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <PageLoader :loading="formSending" />
                    <!-- /login form -->
                </div>
                <!-- /content area -->
            </div>
            <!-- /inner content -->

            <div class="btn-to-top">
                <button type="button" class="btn btn-dark btn-icon rounded-pill">
                    <i class="icon-arrow-up8"></i>
                </button>
            </div>
        </div>
        <!-- /main content -->
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import PageLoader from '../../components/PageLoader.vue';
import { userToken } from '../../utils/userStorage_helper';
import { useRouter } from 'vue-router';
import axios_catcher from '../../utils/axios/catcher';
import axios_requester from '../../utils/axios/requester';
const swal = inject('$swal');
const formSending = ref(false);

const formData = ref({
    'email': 'admin@gmail.com',
    'password': 'demoadmin'
});

const sendForm = async (e) => {
    e.preventDefault();
    formSending.value = true;
    await axios_requester.post('/auth/login', formData.value).then((result) => {
        userToken.setToken(result.data.token);
        swal.fire('Redirecting', 'Login Successful', 'success').then(() => location.href = '/dashboard');
    }).catch((err) => {
        formSending.value = false;
        axios_catcher(err)
    });

    /* userToken.setToken("sdfagkjsadjgsadl");
');
    router.push('/dashboard'); */
}
</script>

<style lang="scss" scoped>

</style>
