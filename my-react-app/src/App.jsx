import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const tour = [
    { id: 1, title: "Du lịch Việt Nam", image: "https://igotravel.vn/wwwroot/resources/upload/tong-hop-cac-hinh-thuc-du-lich-pho-bien-nhat-tai-viet-nam.png" },
    { id: 2, title: "Du lịch Nhật Bản", image: "https://igotravel.vn/wwwroot/resources/upload/tong-hop-cac-hinh-thuc-du-lich-pho-bien-nhat-tai-viet-nam.png" },
    { id: 3, title: "Du lịch Trung Quốc", image: "https://igotravel.vn/wwwroot/resources/upload/tong-hop-cac-hinh-thuc-du-lich-pho-bien-nhat-tai-viet-nam.png" },
  ];

  return (
    // ← 3 class này là bắt buộc để full màn hình
    <div className="min-h-screen flex flex-col bg-white">

      {/* Header */}
      <Header />

      {/* Phần giữa - chiếm hết chỗ còn lại */}
      <div className="flex-1 p-8">
        <h1 className="text-center text-3xl font-bold mb-8 text-orange-600">
          Các Tour Du Lịch
        </h1>

        {/* 3 ô tour */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tour.map(item => (
            <div key={item.id} className="border rounded-lg text-center">
              <img src={item.image} alt="" className="w-full h-64 object-cover rounded-t-lg" />
              <h2 className="text-xl font-bold py-4">{item.title}</h2>
              <button className="bg-orange-500 text-white px-6 py-2 mb-4 rounded">
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer luôn ở đáy */}
      <Footer />
    </div>
  );
}

export default App;