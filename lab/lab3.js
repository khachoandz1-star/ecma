//bai1
const multiply=(a,b)=>a*b;

const ispositive=(number)=>number = 0;

const getrandomnumber=()=> Math.random();

document.addEventListener("click",()=>{
    console.log("clicked!");
});
//bai2
function createuser(name = "anymous", age = 18, isadmin = false){
    return{
        name,
        age,
        isadmin,
    };
}
//bai4

const shoppingCart = function(customerName) {
  const products = [];
  for (let i = 1; i < arguments.length; i++) {
    products.push(arguments[i]);
  }

  if (!customerName) customerName = "Khách hàng chưa xác định";

  const order = {
    customer: customerName,
    items: products,
    totalItems: products.length
  };

  return order;
};

console.log(shoppingCart("Hoàn", "Áo thun", "Quần jean", "Giày thể thao"));
console.log(shoppingCart("Linh", "Bánh", "Nước ngọt"));
console.log(shoppingCart());



//bai 3
const mergeArrays = function() {
  const result = [];
  for (let i = 0; i < arguments.length; i++) {
    const currentArray = arguments[i];
    if (Array.isArray(currentArray)) {
      for (let j = 0; j < currentArray.length; j++) {
        result.push(currentArray[j]);
      }
    }
  }
  return result;
};

const sumAll = function() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    const number = Number(arguments[i]);
    if (!isNaN(number)) total += number;
  }
  return total;
};

const createProduct = function(name, price, category) {
  if (!name) name = "Sản phẩm mới";
  if (!price) price = 0;
  if (!category) category = "Chưa phân loại";

  return {
    name: name,
    price: price,
    category: category
  };
};

console.log(mergeArrays([1, 2], [3], [4, 5]));
console.log(sumAll(1, 2, 3, 4));
console.log(createProduct("Áo thun", 150000, "Thời trang"));
console.log(createProduct());

