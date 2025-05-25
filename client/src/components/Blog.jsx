import { AlarmClock, ChartLine, ChevronRight } from 'lucide-react';

export default function Blog(props) {

    const { image, tags, title, description, date, comments } = props

    return (
        <div className="flex flex-col w-80">
            <img src={image} alt={title} />
            <div className='flex flex-col gap-5 py-8 px-8 border border-muted shadow-xl'>
                <div className="flex gap-5">
                    {tags.map((tag, index) =>
                        <span className="text-[12px] text-secondText" key={index}> {tag} </span>
                    )}
                </div>
                <h4> {title} </h4>
                <p className="text-[#737373] "> {description} </p>
                <div className='flex justify-between py-5'>
                    <div className='flex items-center gap-1 text-primary'>
                        <AlarmClock></AlarmClock>
                        <span className='text-secondText text-[12px]'> {date} </span>
                    </div>
                    <div className='flex items-center gap-1 text-seconday1'>
                        <ChartLine></ChartLine>
                        <span className='text-secondText text-[12px]' > {comments} comments </span>
                    </div>
                </div>
                <div className='flex text-primary'>
                    <h6 className='text-secondText'> Learn More </h6>
                    <ChevronRight></ChevronRight>
                </div>
            </div>

        </div>
    )
}