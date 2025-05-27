import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function ContactPage(){

    return(
        <div className="flex flex-col items-center justify-center gap-10 text-center px-10 xl1440:px-40 xl1440:w-240 xl1440:mt-20">
            <h2 className="text-text"> Get answers to all your questions </h2>
            <h4 className="text-secondText"> Problems trying to resolve the conflict between the two major realms of Classical physics </h4>
            <button className="btn-primary"> CONTACT OUR COMPANY </button>
            <div className='flex gap-5 text-muted'>
                <Twitter size={32}></Twitter>
                <Facebook size={32}></Facebook>
                <Instagram size={32}></Instagram>
                <Linkedin size={32}></Linkedin>
            </div>
        </div>
    )
}