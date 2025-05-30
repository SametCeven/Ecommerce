import Clients from "../components/Clients"
import TeamMember from "../components/TeamMember"
import VideoCard from "../components/VideoCard"

const stats = [
    { stat: "15K", description: "Happy Customers" },
    { stat: "150K", description: "Monthly Visitors" },
    { stat: "15", description: "Countries Worldwide" },
    { stat: "100+", description: "Top Partners" },
]

const teamMembers = [
    { url: "https://images.placeholders.dev/300x200", name: "Samet Çeven", title: "Full Stack Developer", facebookUrl: "", instagramUrl: "", twitterUrl: "" },
    { url: "https://images.placeholders.dev/300x200", name: "Username", title: "Title", facebookUrl: "", instagramUrl: "", twitterUrl: "" },
    { url: "https://images.placeholders.dev/300x200", name: "Username", title: "Title", facebookUrl: "", instagramUrl: "", twitterUrl: "" }
]

export default function AboutUsPage() {

    return (
        <div className="flex flex-col gap-40 py-40 items-center text-center xl1440:text-left xl1440:py-0">

            <div className="flex flex-col gap-10 items-center xl1440:flex-row xl1440:px-40">
                <div className="flex flex-col gap-10 items-center px-16 xl1440:items-baseline">
                    <h5 className="hidden text-text xl1440:block"> ABOUT COMPANY </h5>
                    <h2 className="text-text"> ABOUT US </h2>
                    <h4 className="text-secondText"> We know how large objects will act, but things on a small scale just do not act that way. </h4>
                    <button className="btn-primary"> Get Quote Now </button>
                </div>
                <img className="py-20 w-full xl1440:py-0" src="https://images.placeholders.dev/350x400" alt="" />
            </div>

            <div className="flex flex-col gap-5 items-center px-16 xl1440:flex-row xl1440:justify-center xl1440:gap-20 xl1440:px-40">
                <div className="flex flex-col gap-5 items-center xl1440:items-baseline xl1440:w-140">
                    <p className="text-danger"> Problems trying </p>
                    <h3 className="text-text"> Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. </h3>
                </div>
                <p className="text-secondText py-20 text-left">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>

            <div className="flex flex-col gap-20 items-center xl1440:flex-row xl1440:gap-40 xl1440:px-40">
                {stats.map((stat, index) =>
                    <div className="flex flex-col gap-5 items-center" key={index}>
                        <h1 className="text-text" key={stat.stat}> {stat.stat} </h1>
                        <h5 className="text-secondText" key={stat.description}> {stat.description} </h5>
                    </div>
                )}
            </div>

            <div className="py-20 xl1440:px-40">
                <VideoCard></VideoCard>
            </div>

            <div className='flex flex-col gap-5 items-center py-10 px-5 text-center xl1440:px-40'>
                <h2 className='text-text'> Meet Our Team </h2>
                <p className="text-secondText pb-5 w-80 xl1440:w-120">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                <div className='flex flex-col justify-center gap-10 xl1440:flex-row'>
                    {teamMembers.map((teamMember, index) =>
                        <TeamMember index={index} teamMember={teamMember} key={index}></TeamMember>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-center gap-5 text-center xl1440:px-40">
                <h2 className="text-text w-80 xl1440:w-120"> Big Companies Are Here </h2>
                <p className="text-secondText w-80 xl1440:w-120"> Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                <Clients></Clients>
            </div>

            <div className="w-full xl1440:flex xl1440:flex-row xl1440:justify-center">
                <div className="flex flex-col gap-10 items-center bg-hover text-lightText w-full py-20 xl1440:justify-center xl1440:items-baseline xl1440:px-20">
                    <h5 className="w-80"> WORK WITH US </h5>
                    <h2 className="w-80"> Now Let’s grow Yours </h2>
                    <p className="w-80">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                    <button className="btn-white"> Button </button>
                </div>
                <img className="hidden xl1440:block w-full" src="https://images.placeholders.dev/350x400" alt="" />
            </div>



        </div>
    )
}