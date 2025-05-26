import { ChevronRight } from 'lucide-react';
import Categories from '../components/Categories';

export default function ShopPage() {

    return (
        <div className="flex flex-col items-center justify-center gap-40">
            <div className='flex flex-col items-center gap-20'>
                <h3> Shop </h3>
                <div className="flex gap-5">
                    <h6>Home</h6>
                    <ChevronRight></ChevronRight>
                    <span className="link-text">Shop</span>
                </div>
            </div>

            <Categories></Categories>



        </div>
    )
}