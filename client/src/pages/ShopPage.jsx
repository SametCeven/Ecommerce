import { ChevronDown, ChevronRight, LayoutGrid, List } from 'lucide-react';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Pagination from '../components/Pagination';
import { useState } from 'react';

const products = [
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] }
]

export default function ShopPage() {

    return (
        <div className="flex flex-col items-center justify-center gap-20">
            <div className='flex flex-col items-center gap-20'>
                <h3> Shop </h3>
                <div className="flex gap-5">
                    <h6>Home</h6>
                    <ChevronRight></ChevronRight>
                    <span className="link-text">Shop</span>
                </div>
            </div>

            <Categories></Categories>

            <div className='flex flex-col items-center justify-center gap-10'>
                <span className='font-bold text-[14px] text-secondText'> Showing all {products.length} results </span>
                <div className='flex items-center gap-5'>
                    <span className='font-bold text-[14px] text-secondText'> Views: </span>
                    <div className='border border-lightGray2 p-2 rounded-md'>
                        <LayoutGrid></LayoutGrid>
                    </div>
                    <div className='border border-lightGray2 p-2 rounded-md'>
                        <List></List>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='flex gap-2 bg-fill border border-border rounded-md px-8 py-4 text-secondText'>
                        <button> Popularity </button>
                        <ChevronDown></ChevronDown>
                    </div>
                    <button className='bg-primary text-white border border-primary rounded-md px-4'> Filter </button>
                </div>
            </div>

            <div className="flex flex-col gap-20 xl1440:px-20 xl1440:flex-row xl1440:justify-between xl1440:flex-wrap">
                {products.map((product, index) =>
                    index >= (products.length % 4) * 4 ? "" :
                        <div className="w-[20%]" key={index}>
                            <Product
                                key={index}
                                url={product.url}
                                title={product.title}
                                description={product.description}
                                price={(Math.round(product.price * 100) / 100).toFixed(2)}
                                discountedPrice={(Math.round(product.discountedPrice * 100) / 100).toFixed(2)}
                                colorChart={product.colorChart}
                            >
                            </Product>
                        </div>
                )}
            </div>

            <Pagination length={products.length} itemsPerPage={4} ></Pagination>




        </div>
    )
}