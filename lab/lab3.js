const multiply=(a,b)=>a*b;

const ispositive=(number)=>number = 0;

const getrandomnumber=()=> Math.random();

document.addEventListener("click",()=>{
    console.log("clicked!");
});

function createuser(name = "anymous", age = 18, isadmin = false){
    return{
        name,
        age,
        isadmin,
    };
}

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

