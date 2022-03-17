<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <SfHeading
      v-e2e="'billing-heading'"
      :level="3"
      :title="$t('Billing')"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <form @submit.prevent="handleSubmit(handleFormSubmit)">
      <div class="form">
        <ValidationProvider name="company" rules="" v-slot="{ errors }" slim>
          <SfInput
            v-e2e="'shipping-company'"
            v-model="form.company"
            label="Company"
            name="company"
            class="form__element"
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider
          name="gender"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <SfSelect
            v-e2e="'shipping-gender'"
            v-model="form.gender"
            label="Gender"
            name="gender"
            class="form__element form__select sf-select--underlined"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          >
            <SfSelectOption
              v-for="genderOptions in genders"
              :key="genderOptions.key"
              :value="genderOptions.key"
            >
              {{ genderOptions.label }}
            </SfSelectOption>
          </SfSelect>
        </ValidationProvider>

        <ValidationProvider
          name="firstName"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'shipping-firstName'"
            v-model="form.firstName"
            label="First name"
            name="firstName"
            class="form__element"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider
          name="middleName"
          rules="min:2"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'shipping-middleName'"
            v-model="form.middleName"
            label="Middle name"
            name="middleName"
            class="form__element"
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider
          name="lastName"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'shipping-lastName'"
            v-model="form.lastName"
            label="Last name"
            name="lastName"
            class="form__element -even"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider
          name="street"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'shipping-street'"
            v-model="form.street"
            label="Street"
            name="street"
            class="form__element"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider
          name="number"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'shipping-number'"
            v-model="form.number"
            label="Number"
            name="number"
            class="form__element"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider name="numberExtension" v-slot="{ errors }" slim>
          <SfInput
            v-e2e="'shipping-numberExtension'"
            v-model="form.numberExtension"
            label="Number extension"
            name="numberExtension"
            class="form__element"
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider
          name="postalCode"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'shipping-postalCode'"
            v-model="form.postalCode"
            label="postalCode"
            name="postalCode"
            class="form__element"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider
          name="city"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'shipping-city'"
            v-model="form.city"
            label="city"
            name="city"
            class="form__element"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider
          name="country"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfSelect
            v-e2e="'shipping-country'"
            v-model="form.country"
            label="Country"
            name="country"
            class="form__element form__select sf-select--underlined"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          >
            <SfSelectOption
              v-for="countryOption in countries"
              :key="countryOption.key"
              :value="countryOption.key"
            >
              {{ countryOption.label }}
            </SfSelectOption>
          </SfSelect>
        </ValidationProvider>

        <ValidationProvider
          name="phone"
          rules="required|digits:9"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'shipping-phone'"
            v-model="form.phone"
            label="Phone number"
            name="phone"
            class="form__element"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider
          name="email"
          rules="required"
          v-slot="{ errors }"
          slim
        >
          <SfInput
            v-e2e="'shipping-email'"
            v-model="form.email"
            label="Email"
            name="email"
            class="form__element"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
          />
        </ValidationProvider>
      </div>
      <div class="form">
        <div class="form__action">
          <SfButton
            class="sf-button color-secondary form__back-button"
            type="button"
            @click="router.push(localePath({ name: 'shipping' }))"
          >
            {{ $t('Go back') }}
          </SfButton>
          <SfButton
            v-e2e="'continue-to-payment'"
            class="form__action-button"
            type="submit"
          >
            {{ $t('Continue to payment') }}
          </SfButton>
        </div>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import {
  SfHeading,
  SfInput,
  SfButton,
  SfSelect,
  SfRadio,
  SfCheckbox,
} from '@storefront-ui/vue';
import { ref, useRouter } from '@nuxtjs/composition-api';
import { onSSR } from '@vue-storefront/core';
import { useBilling } from '@propeller-commerce/propeller';
import { required, min, digits } from 'vee-validate/dist/rules';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';

const COUNTRIES = [
  { key: 'US', label: 'United States' },
  { key: 'UK', label: 'United Kingdom' },
  { key: 'IT', label: 'Italy' },
  { key: 'PL', label: 'Poland' },
];

const GENDERS = [
  { key: 'M', label: 'Male' },
  { key: 'F', label: 'Female' },
  { key: 'U', label: 'Undefined' },
];

extend('required', {
  ...required,
  message: 'This field is required',
});
extend('min', {
  ...min,
  message: 'The field should have at least {length} characters',
});
extend('digits', {
  ...digits,
  message: 'Please provide a valid phone number',
});

export default {
  name: 'Billing',
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    SfRadio,
    SfCheckbox,
    ValidationProvider,
    ValidationObserver,
  },
  setup(props, context) {
    const router = useRouter();
    const { load, save } = useBilling();

    const form = ref({
      company: '',
      firstName: '',
      middleName: '',
      lastName: '',
      street: '',
      number: '',
      numberExtension: '',
      postalCode: '',
      city: '',
      country: '',
      phone: null,
      email: '',
    });

    const handleFormSubmit = async () => {
      await save({ billingDetails: form.value });
      router.push(context.root.localePath({ name: 'payment' }));
    };

    onSSR(async () => {
      await load();
    });

    return {
      router,
      form,
      countries: COUNTRIES,
      genders: GENDERS,
      handleFormSubmit,
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  margin: var(--spacer-xl) 0 var(--spacer-base) 0;
}
.form {
  &__select {
    display: flex;
    align-items: center;
    --select-option-font-size: var(--font-size--lg);
    ::v-deep .sf-select__dropdown {
      font-size: var(--font-size--lg);
      margin: 0;
      color: var(--c-text);
      font-family: var(--font-family--secondary);
      font-weight: var(--font-weight--normal);
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__element {
    margin: 0 0 var(--spacer-xl) 0;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding: 0 0 0 var(--spacer-xl);
        }
      }
    }
  }
  &__group {
    display: flex;
    align-items: center;
  }
  &__action {
    @include for-desktop {
      flex: 0 0 100%;
      display: flex;
    }
  }
  &__action-button,
  &__back-button {
    --button-width: 100%;
    @include for-desktop {
      --button-width: auto;
    }
  }
  &__action-button {
    &--secondary {
      @include for-desktop {
        order: -1;
        --button-margin: 0;
        text-align: left;
      }
    }
    &--add-address {
      width: 100%;
      margin: 0;
      @include for-desktop {
        margin: 0 0 var(--spacer-lg) 0;
        width: auto;
      }
    }
  }
  &__back-button {
    margin: var(--spacer-xl) 0 var(--spacer-sm);
    &:hover {
      color: white;
    }
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
  &__back-button {
    margin: 0 0 var(--spacer-sm) 0;
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
}
.payment-methods {
  @include for-desktop {
    display: flex;
    padding: var(--spacer-lg) 0;
    border: 1px solid var(--c-light);
    border-width: 1px 0;
  }
}
.payment-method {
  --radio-container-align-items: center;
  --ratio-content-margin: 0 0 0 var(--spacer-base);
  --radio-label-font-size: var(--font-base);
  --radio-background: transparent;
  white-space: nowrap;
  border: 1px solid var(--c-light);
  border-width: 1px 0 0 0;
  &:last-child {
    border-width: 1px 0;
  }
  --radio-background: transparent;
  @include for-desktop {
    border: 0;
    --radio-border-radius: 4px;
  }
}
</style>
