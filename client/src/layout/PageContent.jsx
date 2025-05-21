import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function PageContent({ children }) {

    return (
        <div className="py-5 px-10 flex flex-col gap-10">
            <Header></Header>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}