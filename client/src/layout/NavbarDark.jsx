import { Phone, Mail, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

export default function NavbarDark() {

    return (
        <nav className="flex justify-between items-center bg-darkBg text-lightText h-14 px-10">
            <div className='flex gap-10'>
                <div className='flex items-center gap-3'>
                    <Phone size={16}></Phone>
                    <h6> (225) 255-0118 </h6>
                </div>
                <div className='flex items-center gap-3'>
                    <Mail size={16}></Mail>
                    <h6> michelle.rivera@example.com </h6>
                </div>
            </div>

            <h6> Follow Us  and get a chance to win 80% off </h6>

            <div className='flex items-center gap-3'>
                <h6> Follow Us : </h6>
                <Instagram size={16} ></Instagram >
                <Youtube size={16}></Youtube >
                <Facebook size={16}></Facebook >
                <Twitter size={16}></Twitter >
            </div>

        </nav>
    )
}