import { Play } from 'lucide-react';

export default function VideoCard() {

    return (
        <div className="">
            <div className='relative'>
                <img className='rounded-2xl' src="https://images.placeholders.dev/300x300" alt="" />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border-primary bg-primary'>
                    <Play color='white' fill='white'></Play>
                </div>
            </div>
        </div>
    )
}