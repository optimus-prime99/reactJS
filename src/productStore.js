const productsArray = [
  {
    id: "1",
    name: "MacBook",
    price: 1400,
    image: "https://picsum.photos/id/180/2400/1600",
  },
  {
    id: "2",
    name: "Old Car",
    price: 2400,
    image: "https://picsum.photos/id/111/4400/2656",
  },
  {
    id: "3",
    name: "W Shoes",
    price: 1000,
    image: "https://picsum.photos/id/21/3008/2008",
  },
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
