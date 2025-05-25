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

            <div className="flex justify-between items-center text-text text-[24px] px-5 py-5 xl1440:hidden">
                <span className='font-bold'> Bandage </span>
                <Header></Header>
            </div>

            <div className="xl1440:hidden">
                <Navbar></Navbar>
            </div>

            <div className="xl1440:flex justify-between items-center text-text text-[24px] px-5 py-5 hidden xl1440:block">
                <span className='font-bold'> Bandage </span>
                <Navbar></Navbar>
                <Header></Header>
            </div>

            <main>
                {children}
            </main>

            <Footer></Footer>
        </div>
    )
}