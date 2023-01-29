export const useCheckoutStore = defineStore('checkout', () => {
    const paymentMethods = ref([
        {
            id: "bacs",
            name: "Direct bank transfer",
            description: `Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be
            shipped until the funds have cleared in our account`
        },
        {
            id: "cheque",
            name: "Check payments",
            description: `Please send a check to Store Name, Store Street, Store Town,
            Store State / County, Store Postcode.`
        },
        {
            id: "cod",
            name: "Cash on delivery",
            description: `Pay with cash upon delivery.`
        },
        {
            id: "paypal",
            name: "Paypal",
            description: `Pay via PayPal; you can pay with your credit card if you don’t
            have a PayPal account.`
        }
    ]);


    const shippingMethods = ref([
        {
            id: "free_shipping",
            name: "Free shipping",
        },
        {
            id: "flat_rate",
            name: "Flat rate",
        },

    ]);

    const selectedShippingMethod = ref("");

    return { paymentMethods, shippingMethods, selectedShippingMethod }
});