import { Link } from "react-router-dom/cjs/react-router-dom"
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function TeamMember(props) {

    const {index, teamMember } = props

    return (
        <div className='flex flex-col gap-5 xl1440:w-[30%]' key={index}>
            <img src={teamMember.url} alt={teamMember.url} />
            <h5 className='text-text'> {teamMember.name} </h5>
            <h6 className='text-secondText'> {teamMember.title} </h6>
            <div className='flex justify-center gap-5'>
                <Link to={teamMember.facebookUrl}>
                    <Facebook color='#335BF5'></Facebook>
                </Link>
                <Link to={teamMember.instagramUrl}>
                    <Instagram color='#E51F5A'></Instagram>
                </Link>
                <Link to={teamMember.twitterUrl}>
                    <Twitter color='#21A6DF'></Twitter>
                </Link>
            </div>
        </div>


    )
}