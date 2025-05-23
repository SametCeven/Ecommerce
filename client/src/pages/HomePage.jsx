import BestsellerProducts from "../components/BestsellerProducts";
import Carousel from "../components/Carousel";
import EditorsPick from "../components/EditorsPick";

export default function HomePage(){

    

    return(
        <div className="py-20 flex flex-col gap-40">
            <EditorsPick></EditorsPick>
            <BestsellerProducts></BestsellerProducts>
        </div>
    )
}