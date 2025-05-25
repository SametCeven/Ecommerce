import BestsellerProducts from "../components/BestsellerProducts";
import Carousel from "../components/Carousel";
import Container from "../components/Container";
import EditorsPick from "../components/EditorsPick";

const imagesCarousel1 = [
    "https://images.placeholders.dev/400x750",
    "https://images.placeholders.dev/400x750",
    "https://images.placeholders.dev/400x750",
];
const imagesCarousel2 = [
    "https://images.placeholders.dev/400x1200",
    "https://images.placeholders.dev/400x1200",
    "https://images.placeholders.dev/400x1200",
];
const buttonCarousel1 = "SHOP NOW"
const buttonCarousel2 = "ADD TO CART"
const buttonAlignmentCarousel1 = "bottom"
const buttonAlignmentCarousel2 = "mid"

export default function HomePage(){


    return(
        <div className="py-20 flex flex-col gap-40">
            <Carousel images={imagesCarousel1} button={buttonCarousel1} buttonAlignment={buttonAlignmentCarousel1}></Carousel>
            <EditorsPick></EditorsPick>
            <BestsellerProducts></BestsellerProducts>
            <Carousel images={imagesCarousel2} button={buttonCarousel2} buttonAlignment={buttonAlignmentCarousel2}></Carousel>
            <Container></Container>
        </div>
    )
}