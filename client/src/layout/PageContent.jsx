import Carousel from "../components/Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import NavbarDark from "./NavbarDark";

export default function PageContent({ children }) {

    return (
        <div className="flex flex-col gap-5">
            <div className="hidden xl1440:block">
                <NavbarDark></NavbarDark>
            </div>
            <Header></Header>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}