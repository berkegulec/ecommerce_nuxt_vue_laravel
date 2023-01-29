<template>
    <PageContent title="My Account">
        <div class="section-padding">
            <div class="section-container p-l-r">
                <div class="page-my-account">
                    <div class="my-account-wrap clearfix">
                        <nav class="my-account-navigation">
                            <ul class="nav nav-tabs">
                                <li class="nav-item" v-for="(item, index) in customerSideMenu" :key="index">
                                    <NuxtLink class="nav-link cursor-pointer"
                                        :to="item.redir ? `/customer/${item.redir}` : undefined"
                                        @click="item.click ? item.click() : undefined" active-class="active">
                                        {{ item.name }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </nav>
                        <div class="my-account-content tab-content">
                            <div class="tab-pane fade active show" role="tabpanel">
                                <NuxtPage />
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
definePageMeta({ middleware: 'auth' })

const customerSideMenu = ref([
    {
        redir: "dashboard",
        name: "Dashboard"
    },
    {
        redir: "orders",
        name: "Orders",
    },
    {
        redir: "addresses",
        name: "Addresses",
    },
    {
        redir: "account-details",
        name: "Account details",
    },
    {
        name: "Logout",
        click: function () {
            console.log("logout")
        },
    }
]);
</script>

<style lang="scss" scoped>

</style>