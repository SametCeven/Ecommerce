import { useState } from "react";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function Carousel(props) {

    const { images, button, buttonAlignment, handleButton, data } = props

    const history = useHistory()

    const [currentIndex, setCurrentIndex] = useState(0)

    function prevSlide() {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    function nextSlide() {
        setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
    }

    function handleClick(){
        history.push(`product/${data[currentIndex].name}/${data[currentIndex].id}`)
    }

    return (
        <div className="w-full max-h-[750px] mx-auto overflow-hidden rounded-lg shadow-lg">
            <div className="relative max-h-[750px]">

                <div
                    className="flex transition-transform duration-500 h-[750px]"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-contain object-center flex-shrink-0"
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

                {button ?
                    <button
                        className={`absolute -translate-y-1/2 -translate-x-1/2 btn-success  ${buttonAlignment === "mid" ? "top-1/2 left-1/2" : ""} ${buttonAlignment === "bottom" ? "top-3/4 left-1/2" : ""}`}
                        onClick={handleButton && handleClick}>
                        {button}
                    </button>
                    : ""}

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-13 h-2 rounded-sm border border-gray-300 transition ${index === currentIndex ? "bg-black" : "bg-white/50"
                                }`}
                        >
                        </button>
                    ))}
                </div>

            </div>
        </div>
    )
}