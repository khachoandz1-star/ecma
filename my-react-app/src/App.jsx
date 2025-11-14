import Header from "./components/Header";

function App() {
    const tour = [
        {
            id: 1,
            title: "Du lịch Vn",
            image: "https://igotravel.vn/wwwroot/resources/upload/tong-hop-cac-hinh-thuc-du-lich-pho-bien-nhat-tai-viet-nam.png",
        },
        {
            id: 2,
            title: "Du lịch Tàu",
            image: "https://igotravel.vn/wwwroot/resources/upload/tong-hop-cac-hinh-thuc-du-lich-pho-bien-nhat-tai-viet-nam.png",
        },
        {
            id: 3,
            title: "Du lịch China",
            image: "https://igotravel.vn/wwwroot/resources/upload/tong-hop-cac-hinh-thuc-du-lich-pho-bien-nhat-tai-viet-nam.png",
        },
    ];


    return (
        <div>
     <Header></Header>
      <div className="flex gap-2">
            
            {tour.map(tour => ( 
                <div key={tour.id}>
                    <h2 className="text-3xl font-bold text-orange-500">{tour.title}</h2>
                    
                    <img src={tour.image} width={400} height={300} alt="" />
                </div>
            ))}
        </div>
        </div>
       
    );
}

export default App;