import { User, Search, ShoppingCart, Menu, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import getGravatarHash from '../utils/getGravatarHash';
import gravatarInstance from '../services/gravatarApi';

const initialCartCount = 0;
const initialFavCount = 0;

export default function Header() {

    const [cartCount, setCartCount] = useState(initialCartCount)
    const [favCount, setFavCount] = useState(initialFavCount)

    const user = useSelector(store => store.client.user)

    const [showNavbarXl, setShowNavbarXl] = useState(window.innerWidth > 1440)

    useEffect(() => {
        function handleResize() {
            setShowNavbarXl(window.innerWidth > 1440)
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const [avatarHash, setAvatarHash] = useState("")
    const [avatarUrl, setAvatarUrl] = useState("")

    useEffect(() => {
        if (!user.email){
            setAvatarHash("")
            setAvatarUrl("")
        }

        async function getHash() {
            const hash = await getGravatarHash(user.email);
            setAvatarHash(hash)
        }
        getHash()
    }, [user])

    useEffect(() => {
        if (!avatarHash) return;

        gravatarInstance.get(`/${avatarHash}`)
            .then((res) => {
                setAvatarUrl(`https://0.gravatar.com/avatar/${res.data.avatar_url}`)
            })
            .catch((err) => {
                setAvatarUrl(`https://0.gravatar.com/avatar/${avatarHash}`)
                //console.error(err)
            })
    }, [avatarHash])

    return (
        <header className=''>
            <div className='flex items-center gap-3 xl1440:gap-8 xl1440:text-primary text-[16px]'>

                <div>
                    <div className='flex items-center gap-1'>
                        <Link to="/login" >
                            {avatarUrl ?
                                <div className={`${showNavbarXl ? "w-10 h-10" : "w-8 h-8"} rounded-full`}>
                                    <img src={avatarUrl} alt="" className='w-full object-cover object-center rounded-full' />
                                </div>
                                :
                                <User size={`${showNavbarXl ? 16 : 24}`} />
                            }
                        </Link>
                        {showNavbarXl ?
                            <div
                                className='text-[14px] font-bold'>
                                <Link to="/login"> {user.token ? user.name : "Login"} </Link>
                                {user.token ? "" : "/"}
                                <Link to="/signup"> {user.token ? "" : "Register"} </Link>
                            </div>
                            : ""}
                    </div>
                </div>

                <Search size={`${showNavbarXl ? 16 : 24}`} />

                <div className='flex items-center gap-1'>
                    <ShoppingCart size={`${showNavbarXl ? 16 : 24}`} />
                    {showNavbarXl ? <span className='text-[12px]'> {cartCount} </span> : ""}
                </div>

                <Menu className='xl1440:hidden' size={`${showNavbarXl ? 16 : 24}`} />

                <div className='flex items-center gap-1'>
                    <Heart className='hidden xl1440:block' size={`${showNavbarXl ? 16 : 24}`}></Heart>
                    {showNavbarXl ? <span className='text-[12px]'> {favCount} </span> : ""}
                </div>



            </div>
        </header>
    )
}