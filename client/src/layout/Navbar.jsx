import {Link} from "react-router-dom"

export default function Navbar(){

    return(
        <nav className="flex flex-col items-center gap-5 text-secondText text-[30px] py-20">
            <Link to="/"> Home </Link>
            <Link> Product </Link>
            <Link> Pricing </Link>
            <Link> Contact </Link>
        </nav>
    )
}