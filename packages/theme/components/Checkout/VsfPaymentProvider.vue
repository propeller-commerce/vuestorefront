<template>
  <div>
    <p>
      <b>222Please implement vendor-specific VsfPaymentProvider component in the 'components/Checkout' directory</b>
    </p>

    <SfRadio
      v-e2e="'payment-method'"
      v-for="method in shippingMethods"
      :key="method.value" :label="method.label"
      :value="method.value"
      :description="method.description"
      :selected="selectedMethod" name="shippingMethod"
      class="form__radio shipping"
      @change="selectMethod(method.value)">
      <div class="shipping__label">
        {{ method.label }}
      </div>
    </SfRadio>
  </div>
</template>

<script>
import { SfButton, SfRadio } from '@storefront-ui/vue';
import { ref, useContext } from '@nuxtjs/composition-api';
import { useCart } from '@propeller-commerce/propeller';

const SHIPPING_METHODS = [
  { label: 'Visa Debit', value: 'visa_debit' },
  { label: 'MasterCard', value: 'master_card' },
  { label: 'VisaElectron', value: 'visa_electron' },
  { label: 'Cash on delivery', value: 'cash' },
  { label: 'Check', value: 'check' },
  { label: 'IDEAL', value: 'IDEAL' },
];

export default {
  name: 'VsfPaymentProvider',

  components: {
    SfButton,
    SfRadio,
  },

  setup(props, { emit }) {
    const selectedMethod = ref(null);
    const context = useContext();
    const { cart, load } = useCart();

    const selectMethod = (method) => {
      const cartId = cart.value.cartId;
      const cartUpdateData = {
        cartId,
        paymentData: {
          method,
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
      const cartUpdate = context.$vsf.$propeller.api.cartUpdate(cartUpdateData);

      selectedMethod.value = method;
      emit('status');
    };

    return {
      shippingMethods: SHIPPING_METHODS,
      selectedMethod,
      selectMethod,
      cart,
      load,
    };
  },
};
</script>

<style lang="scss" scoped>
.shipping {
  &__label {
    display: flex;
    justify-content: space-between;
  }

  &__description {
    --radio-description-margin: 0;
    --radio-description-font-size: var(--font-xs);
  }
}
</style>
