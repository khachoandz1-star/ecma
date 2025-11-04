function tinhBmi (chieucao,cannang){
 const bmi = cannang/(chieucao * chieucao);

 const ketqua = 
 bmi < 18.5 ? "Thieu can":
 bmi < 25 ? "Binh thuong":
 bmi < 30 ? "Thua can":
 "Beo Phi";

 return `BMI cua ban la ${bmi} (${ketqua})` ;

}
console.log(tinhBmi(1.76,92));
hideijwdfeieofeefprủ