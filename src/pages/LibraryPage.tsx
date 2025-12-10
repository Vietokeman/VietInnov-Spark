import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularGallery from "../components/CircularGallery/CircularGallery";
import DomeGallery from "../components/DomeGallery/DomeGallery";
import { FaArrowLeft, FaImages, FaCube } from "react-icons/fa";

export default function LibraryPage() {
  const [mode, setMode] = useState<"dome" | "circular">("dome");
  const navigate = useNavigate();

  useEffect(() => {
    // Smooth scroll to top on mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const ethnicImages = [
    {
      image: "/img/b1.jpg",
      text: "Tương lai thành phố bay",
    },
    {
      image: "/img/b2.jpg",
      text: "Tàu cao tốc trên mây",
    },
    {
      image: "/img/b3.jpg",
      text: "Cầu nối tương lai",
    },
    {
      image: "/img/b4.jpg",
      text: "Cổng thời gian",
    },
    {
      image: "/img/b5.jpg",
      text: "Thành phố xanh",
    },
    {
      image: "/img/b6.jpg",
      text: "Công nghệ bền vững",
    },
    {
      image: "/img/b7.jpg",
      text: "Thành phố mơ ước",
    },
    {
      image: "/img/b8.jpg",
      text: "Cộng đồng hiện đại",
    },
  ];

  // Transform ethnicImages to DomeGallery format
  const domeImages = ethnicImages.map((img) => ({
    src: img.image,
    alt: img.text,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#071122] to-[#112240] text-[#e6f1ff] overflow-hidden">
      {/* Header Controls */}
      <div className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-6 bg-[rgba(17,34,64,0.95)] backdrop-blur-[10px] border-b-2 border-[rgba(100,181,246,0.2)] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        <button
          className="flex items-center gap-3 px-6 py-3 text-base font-semibold text-[#64b5f6] bg-transparent border-2 border-[#64b5f6] rounded-md cursor-pointer transition-all duration-300 hover:border-[#4fc3f7] hover:bg-[rgba(100,181,246,0.1)] hover:-translate-x-1 hover:shadow-[0_0_15px_rgba(100,181,246,0.3)]"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft className="text-xl" />
          <span>Trang Chủ</span>
        </button>

        <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#64b5f6] text-center uppercase tracking-wider shadow-[0_2px_10px_rgba(100,181,246,0.3)] max-md:hidden">
          Phòng Triển Lãm Ảnh Công nghệ 3D AI
        </h1>

        <div className="flex gap-2 bg-[rgba(17,34,64,0.5)] p-1 rounded-full border border-[rgba(100,181,246,0.2)]">
          <button
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-full border-none cursor-pointer transition-all duration-300 ${
              mode === "dome"
                ? "bg-[#ff4757] text-[#e6f1ff] shadow-[0_4px_12px_rgba(255,71,87,0.4)]"
                : "bg-transparent text-[#e6f1ff] hover:bg-[rgba(100,181,246,0.1)] hover:text-[#64b5f6]"
            } max-[480px]:[&>span]:hidden`}
            onClick={() => setMode("dome")}
          >
            <FaCube className="text-lg" />
            <span>Tròn</span>
          </button>
          <button
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-full border-none cursor-pointer transition-all duration-300 ${
              mode === "circular"
                ? "bg-[#ff4757] text-[#e6f1ff] shadow-[0_4px_12px_rgba(255,71,87,0.4)]"
                : "bg-transparent text-[#e6f1ff] hover:bg-[rgba(100,181,246,0.1)] hover:text-[#64b5f6]"
            } max-[480px]:[&>span]:hidden`}
            onClick={() => setMode("circular")}
          >
            <FaImages className="text-lg" />
            <span>Ngang</span>
          </button>
        </div>
      </div>

      {/* Gallery Container */}
      <div className="fixed top-20 left-0 right-0 bottom-32 overflow-hidden max-md:top-[70px] max-md:bottom-24">
        {mode === "dome" ? (
          <div className="w-full h-full relative">
            <DomeGallery
              images={domeImages}
              fit={0.65}
              fitBasis="auto"
              minRadius={400}
              maxRadius={900}
              dragSensitivity={20}
              enlargeTransitionMs={300}
              segments={20}
              dragDampening={1.5}
              openedImageWidth="500px"
              openedImageHeight="500px"
              imageBorderRadius="15px"
              openedImageBorderRadius="25px"
              grayscale={false}
            />
          </div>
        ) : (
          <div className="w-full h-full relative bg-transparent">
            <CircularGallery
              items={ethnicImages}
              bend={3}
              textColor="#d4af37"
              borderRadius={0.08}
              font="bold 28px 'Playfair Display', serif"
              scrollSpeed={2.5}
              scrollEase={0.08}
            />
          </div>
        )}
      </div>
    </div>
  );
}
