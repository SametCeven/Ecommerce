import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Cta from '../components/Cta';
import TeamMember from '../components/TeamMember';

const images = [
    "https://images.placeholders.dev/350x400",
    "https://images.placeholders.dev/200x260",
    "https://images.placeholders.dev/200x260",
    "https://images.placeholders.dev/200x260",
    "https://images.placeholders.dev/200x260"
]

const teamMembers = [
    { url: "https://images.placeholders.dev/300x200", name: "Samet Çeven", title: "Full Stack Developer", facebookUrl: "", instagramUrl: "", twitterUrl: "" },
    { url: "https://images.placeholders.dev/300x200", name: "Username", title: "Title", facebookUrl: "", instagramUrl: "", twitterUrl: "" },
    { url: "https://images.placeholders.dev/300x200", name: "Username", title: "Title", facebookUrl: "", instagramUrl: "", twitterUrl: "" }
]

export default function TeamPage() {

    return (
        <div className="flex flex-col items-center gap-5 text-center">

            <h5 className="text-secondText"> WHAT WE DO </h5>
            <h2 className="text-text"> Innovation tailored for you </h2>

            <div className='flex flex-col items-center gap-20 justify-between w-full'>
                <div className="flex gap-5">
                    <h6>Home</h6>
                    <ChevronRight></ChevronRight>
                    <span className="link-text">Team</span>
                </div>
            </div>

            <div className='flex flex-col gap-2 xl1440:flex-row w-full'>
                <img className='w-full object-cover' src={images[0]} alt={images[0]} />
                <div className='flex justify-center flex-wrap gap-2 w-full'>
                    {images.slice(1, images.length).map((image, index) =>
                        <img className='w-[48%] object-cover' src={image} alt={image} key={index} />
                    )}
                </div>
            </div>

            <div className='flex flex-col gap-5 items-center py-10 px-10'>
                <h2 className='text-text xl1440:py-10'> Meet Our Team </h2>
                <div className='flex flex-col justify-center gap-10 xl1440:flex-row'>
                    {teamMembers.map((teamMember, index) =>
                        <TeamMember index={index} teamMember={teamMember} key={index}></TeamMember>
                    )}
                </div>
            </div>

            <Cta></Cta>


        </div>
    )
}