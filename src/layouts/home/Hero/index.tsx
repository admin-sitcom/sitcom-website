import Banner from "./Banner";
import Content from "./Content";

export default function Hero() {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute inset-0">
        <Banner />
      </div>
      <div className="relative p-4 sm:p-8 xl:p-16 z-10 min-h-screen bg-black bg-opacity-50 flex items-center">
        <Content />
      </div>
    </div>
  );
}
