# Мои Code Review

[[toc]]

## 21.01.2022

`src\modules\Profile\ProfileService.ts`

1. Наименования методов должны нести максимальную лексическую нагрузку 
   и не вводить в заблуждение, например,
   `getUserCart` - читается как получить корзину пользователя, а в теле метода утснавляивается состояние 
   метод д.б. `updateUserCartState`  
  
2. Методы, геттеры, сетеры, наименования переменных и аргументов д.б. в `camelCase`
   - **Неверно**: `async AddToCart (product_id:number) {}`
   - **Верено**:  `async addToCart (productId:number) {}` 

3. Для установки переменной (или иного случая, например запись в куку) 
   следует использовать единообразие или же два метода (`getUserHash` и `setUserHash`),
   или же пара геттер - сеттер `get userHash ()` и `set userHash(hash:string)`  

4. Для первоначального обновления состояния корзины, вынес в плагин, отвечающий за инициализацию приложения
   `src\plugins\app-init.ts`  вызов метода для наполнения сторе.
   Соотвественно в компонента хидера уже не нужны вызовы

5. Для подсчета суммы (агрегация) более читаемо использовать reduce 
   - **Не очень**
   ```ts
   let price = 0;
   this.cartItems.forEach((el) => {
      if (el.product.price) {
        price = el.product.price * el.count + price;
      }
   });
   return price;
   ```

   - **Более читаемо**
  ```ts
  get cartPrice() {
    return this.cartItems.reduce((sum, iterCart) => sum + (iterCart.product.price || 0) * iterCart.count, 0);
  }
  ```

  6. Для "читаемого" вида необходимо форматировать числа `sum.toLocaleString("ru-RU");`