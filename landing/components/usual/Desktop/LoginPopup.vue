<template>
    <div class="form-login-register active" @click="handleExit">
        <div class="box-form-login">
            <div class="active-login"></div>
            <div class="box-content">
                <div class="form-login" :class="{ 'active': isLogin }">
                    <form id="login_ajax" method="post" class="login">
                        <h2>Sign in</h2>
                        <p class="status"></p>
                        <div class="content">
                            <div class="username">
                                <input type="text" required="required" class="input-text" name="username" id="username"
                                    placeholder="Your name" />
                            </div>
                            <div class="password">
                                <input class="input-text" required="required" type="password" name="password"
                                    id="password" placeholder="Password" />
                            </div>
                            <div class="rememberme-lost">
                                <div class="rememberme">
                                    <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                                    <label for="rememberme" class="inline">Remember me</label>
                                </div>
                                <div class="lost_password">
                                    <NuxtLink to="/forgot-password">Lost your password?</NuxtLink>
                                </div>
                            </div>
                            <div class="button-login">
                                <input type="submit" class="button" name="login" value="Login" />
                            </div>
                            <div class="button-next-reregister" @click="switchTab(tabTypes.register)">
                                Create An Account
                            </div>
                        </div>
                    </form>
                </div>
                <div class="form-register" :class="{ 'active': !isLogin }">
                    <form method="post" class="register">
                        <h2>REGISTER</h2>
                        <div class="content">
                            <div class="email">
                                <input type="email" class="input-text" placeholder="Email" name="email" id="reg_email"
                                    value="" />
                            </div>
                            <div class="password">
                                <input type="password" class="input-text" placeholder="Password" name="password"
                                    id="reg_password" />
                            </div>
                            <div class="button-register">
                                <input type="submit" class="button" name="register" value="Register" />
                            </div>
                            <div class="button-next-login" @click="switchTab(tabTypes.login)">Already has an account
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const emits = defineEmits(["closeTrigger"]);

const tabTypes = {
    login: "login",
    register: "register"
};

const activeTab = ref(tabTypes.login);
const isLogin = computed(() => activeTab.value === tabTypes.login);


const switchTab = (tab) => activeTab.value = tab;

const handleExit = (e) => {
    let needToExitClassNames = ["form-login-register", "active-login"];
    let el = e.target;
    if (needToExitClassNames.some(className => el.classList.contains(className))) closePopup();
};

const closePopup = () => {
    emits("closeTrigger");
}
</script>

<style lang="scss" scoped>

</style>