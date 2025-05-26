import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';

export default function ProductDetailsCard(props) {

    const { selectedProduct } = props

    let i = 1
    let stars = []
    while (i <= 5) {
        stars.push(i)
        i++
    }
    
    return (
        <div className="flex flex-col px-5 gap-5 w-full">

            <h4 className="text-text"> {selectedProduct.title} </h4>

            <div className="flex gap-5">
                <div className="flex">
                    {stars.map((star) =>
                        <div className={``} key={star}>
                            <Star
                                fill={`${star <= selectedProduct.rating ? "#F3CD03" : "white"}`}
                                color="#F3CD03"
                            ></Star>
                        </div>
                    )}
                </div>
                <h6 className="text-secondText"> {selectedProduct.reviewNumber} Reviews </h6>
            </div>

            <div>
                <span className="text-text text-[32px] font-bold"> ${selectedProduct.price} </span>
                <div className="flex gap-5">
                    <h6 className="text"> Availability : </h6>
                    <h6 className={`${selectedProduct.availability ? "text-primary" : "text-danger"}`}> {selectedProduct.availability ? "In Stock" : "Out of Stock"} </h6>
                </div>
            </div>

            <p className="text-secondText border-b-2 border-muted py-4"> {selectedProduct.description} </p>

            <div className="flex gap-2">
                {selectedProduct.colorChart.map((color) =>
                    <span className={`p-4 border rounded-full`} style={{ backgroundColor: color, borderColor: color }} key={color}></span>
                )}
            </div>

            <div className="flex items-center gap-3 py-10 text-text">
                <button className="btn-primary-small"> Select Options </button>
                <div className="border border-muted rounded-full p-2 bg-white">
                    <Heart size={20}></Heart>
                </div>
                <div className="border border-muted rounded-full p-2 bg-white">
                    <ShoppingCart size={20}></ShoppingCart>
                </div>
                <div className="border border-muted rounded-full p-2 bg-white">
                    <Eye size={20}></Eye>
                </div>
            </div>

        </div>
    )
}