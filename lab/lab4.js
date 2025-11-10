function getFirstLast(array) {
  const [first]=array;
  const last=array[array.length-1];
  return[first,last];
}

console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]


function swapElements(arr) {
  let [a =1,b=2,c=3,d=4,e=5]=arr;
  [a,b,c,d,e]=[a,d,c,b,e];
  return [a,b,c,d,e];
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]

const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  const info = user.personalInfo;
  const name=info.name;
  const email=info.contact.email;
  return{info,name,email};
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }

