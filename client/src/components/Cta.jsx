import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Cta() {

    return (
        <div className="flex flex-col items-center gap-10 px-10 pt-20">
            <h2 className="text-text"> Start your 14 days free trial </h2>
            <p className="text-secondText xl1440:w-100"> Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent. </p>
            <button className="btn-primary w-60"> Try it free now </button>
            <div className='flex justify-center gap-5'>
                <Link to={""}>
                    <Facebook color='#335BF5' size={32}></Facebook>
                </Link>
                <Link to={""}>
                    <Instagram color='#E51F5A' size={32}></Instagram>
                </Link>
                <Link to={""}>
                    <Twitter color='#21A6DF' size={32}></Twitter>
                </Link>
                <Link>
                    <Linkedin color='#0A66C2' size={32}></Linkedin>
                </Link>
            </div>
        </div>
    )
}