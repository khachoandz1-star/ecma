import Header from "../components/Header";  
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Button from "../components/Button";

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Heading title="Giới thiệu về chúng tôi" />
      <Header />

      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-orange-600 mb-8">
            Chào mừng đến với Công ty Du lịch 
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Chúng tôi chuyên tổ chức các tour du lịch trong và ngoài nước với giá tốt nhất,
            dịch vụ chất lượng cao và hướng dẫn viên nhiệt tình.
          </p>
          <p className="mt-6 text-lg">
            Hotline: 0909 123 456
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;