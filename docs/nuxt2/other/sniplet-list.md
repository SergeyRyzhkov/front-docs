# Сниплеты и всякие мелочи

**RadioButton**

`src\components\forms\BaseRadioButton.vue`

>Небольшой "сахар" 
>1. В качестве модели (v-model) передается исходное значение
>2. RadioButton будет чекнут, если значение из `v-model` === `value`
>3. При чеке в `v-model` передано значение из `value`

```vue
 <div class="mt-52">
    <h2>Способ доставки</h2>
    <div class="mt-30">
        <div v-for="iter in deliveryMethods" :key="iter.id" class="mb-16">
            <BaseRadioButton v-model="order.delivery_method_id" :label="iter.title" :value="iter.id" />
            <div class="del-info pl-30 mt-9">{{ getDeliveryMethodPrice(iter) }}, 14-16 декабря</div>
        </div>
    </div>
</div>
```

**Для подсчета суммы (агрегация reduce)**
```ts
get cartPrice() {
     return this.cartItems.reduce((sum, iterCart) => sum + (iterCart.product.price || 0) * iterCart.count, 0);
}
```