const calculateValueOfBasket = (arr) => {
  const valueOfProductsArr = arr.map(function (element) {
    const valueOfProducts = element.price * element.quantity;
    return valueOfProducts;
  });
  const valueOfAllProducts = valueOfProductsArr.reduce(function (a, b) {
    return a + b;
  }, 0);

  return valueOfAllProducts;
};

export default calculateValueOfBasket;
