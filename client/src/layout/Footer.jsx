import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from "react-router-dom"

export default function Footer() {

    return (
        <footer>
            <span className="text-[24px] text-text font-bold"> Bandage </span>

            <div className='flex gap-5 mt-5 text-primary'>
                <Facebook />
                <Instagram />
                <Twitter />
            </div>

            <div className='flex flex-col gap-10 mt-20'>
                <div className='flex flex-col gap-2 link-text'>
                    <h3 className='pb-2 text-text'> Company Info </h3>
                    <Link> About Us </Link>
                    <Link> Career </Link>
                    <Link> We are hiring </Link>
                    <Link> Blog </Link>
                </div>
                <div className='flex flex-col gap-2 link-text'>
                    <h3 className='pb-2 text-text'> Legal </h3>
                    <Link> About Us </Link>
                    <Link> Career </Link>
                    <Link> We are hiring </Link>
                    <Link> Blog </Link>
                </div>
                <div className='flex flex-col gap-2 link-text'>
                    <h3 className='pb-2 text-text'> Features </h3>
                    <Link> Business Marketing </Link>
                    <Link> User Analytics </Link>
                    <Link> Live Chat </Link>
                    <Link> Unlimited Support </Link>
                </div>
                <div className='flex flex-col gap-2 link-text'>
                    <h3 className='pb-2 text-text'> Resources </h3>
                    <Link> IOS & Android </Link>
                    <Link> Watch a Demo </Link>
                    <Link> Customers </Link>
                    <Link> API </Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='pb-2 text-text'> Get in Touch </h3>
                    <form className='flex'>
                        <label className='bg-[#F9F9F9] border border-[#E6E6E6] rounded-lg p-5 font-bold w-50'>
                            <input className='w-40' type="text" placeholder='Your Email' />
                        </label>
                        <button className='bg-primary text-lightText border rounded-md p-5 text-center'> Subscribe </button>
                    </form>
                    <span className='text-secondText'> Lore imp sum dolor Amit </span>
                </div>
            </div>

            <div className='flex flex-col items-center text-[14px] font-bold text-secondText mt-30'>
                <span> Made With Love By</span>
                <span> Finland All Right Reserved </span>
            </div>


        </footer>
    )
}