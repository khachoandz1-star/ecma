import Header from "./components/Header";
import Footer from "./components/Footer";
import Heading from "./components/Heading";   
import Button from "./components/Button";       

function App() {
  const tour = [
    { id: 1, title: "Du lịch Việt Nam", image: "https://igotravel.vn/wwwroot/resources/upload/tong-hop-cac-hinh-thuc-du-lich-pho-bien-nhat-tai-viet-nam.png" },
    { id: 2, title: "Du lịch Nhật Bản", image: "https://igotravel.vn/wwwroot/resources/upload/tong-hop-cac-hinh-thuc-du-lich-pho-bien-nhat-tai-viet-nam.png" },
    { id: 3, title: "Du lịch Trung Quốc", image: "https://igotravel.vn/wwwroot/resources/upload/tong-hop-cac-hinh-thuc-du-lich-pho-bien-nhat-tai-viet-nam.png" },
  ];

  return (
   
    <div className="min-h-screen flex flex-col bg-white">
        <Heading title="Tour trong nước"/>

    
      <Header />

     
      <div className="flex-1 p-8">
        <h1 className="text-center text-3xl font-bold mb-8 text-orange-600">
          Các Tour Du Lịch
        </h1>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tour.map(item => (
            <div key={item.id} className="border rounded-lg text-center">
              <img src={item.image} alt="" className="w-full h-64 object-cover rounded-t-lg" />
              <h2 className="text-xl font-bold py-4 gap-2">{item.title}</h2>
             <div className="flex gap-4 justify-center pb-6">
            <Button label="Xem chi tiết"/>

              <Button label="Đặt tour"/>
              </div>
              
              
            </div>
          ))}
        </div>
      </div>

    
      <Footer />
    </div>
  );
}

export default App;