import { useState } from "react";
import { ChevronRight, ChevronLeft } from 'lucide-react';

const images = [
    "https://images.placeholders.dev/400x750",
    "https://images.placeholders.dev/400x750",
    "https://images.placeholders.dev/400x750",
];

export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0)

    function prevSlide() {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    function nextSlide() {
        setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
    }

    return (
        <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full h-full">

                <div
                    className="flex transition-transform duration-500 h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
                >
                    <ChevronLeft size={32} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
                >
                    <ChevronRight size={32} />
                </button>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-13 h-2 rounded-sm border border-gray-300 transition ${index === currentIndex ? "bg-black" : "bg-white/50"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    )
}