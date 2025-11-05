for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}



const student = {
  name: "ThuyTien",
  age: 20,
};

student.grade = "A";
student.age = 21;
console.log(student);

const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

const emailTemplate = `Tên tôi là ${user.firstName}${user.lastName}.Tôi đã đặt mua sản phẩm ${user.product} với giá ${user.price} vào ngày ${user.orderDate}. Vui lòng xác nhận đơn hàng của tôi.`;
console.log(emailTemplate);




const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};


const finalPrice = product.price * (1 -product.discount / 100);


const productCard = `
<h2>${product.name}</h2>
<p>Giá gốc: ${product.price} VND</p>
<p>Giá sau giảm: ${finalPrice} VND</p>
<p>${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
`; 

console.log(productCard);


const width = 100;
const height = 200;
const color = "red";


const  rectangle = {
  width,
  height,
  color,

  calculateArea(){
    return rectangle.width * rectangle.height;
  },

  describe(){
    return `Rectangle ${rectangle.width}x${rectangle.height},color:${rectangle.color}`
  }
}

