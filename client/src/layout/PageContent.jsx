import Carousel from "../components/Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function PageContent({ children }) {

    return (
        <div className="py-5 flex flex-col gap-5">
            <Header></Header>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}