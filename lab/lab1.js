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


function taoSach(tieude, tacgia, namxuatban, gia) {
  const tenPhuongThuc = "tinhGiamGia"; 

  const sach = {
    tieude,
    tacgia,
    namxuatban,
    gia,

    layThongTin() {
      return ` ${this.tieude} - Tác giả: ${this.tacgia}, Năm: ${this.namxuatban}, Giá: ${this.gia}đ`;
    },

    [tenPhuongThuc](phanTram) {
      const giaMoi = this.gia - (this.gia * phanTram) / 100;
      return `Giá sau giảm ${phanTram}% là: ${giaMoi}đ`;
    },
  };

  return sach;
}

const sach1 = taoSach("Tiếng Anh", "Hoàn", 2023, 600000);

console.log(sach1.layThongTin());
console.log(sach1.tinhGiamGia(10));
