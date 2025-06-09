import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/actions/shoppingCartActions';

export default function ProductDetailsCard(props) {

    const { selectedProduct } = props
    const dispatch = useDispatch()
    const { cart } = useSelector(store=>store.shoppingCart)

    let i = 1
    let stars = []
    while (i <= 5) {
        stars.push(i)
        i++
    }


    function handleCart(e){
        dispatch(addToCart(selectedProduct))
    } 


    return (
        <div className="flex flex-col px-5 gap-5 w-full">

            <h4 className="text-text"> {selectedProduct.name} </h4>

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
                <h6 className="text-secondText"> {selectedProduct.sell_count} Reviews </h6>
            </div>

            <div>
                <span className="text-text text-[32px] font-bold"> ${(Math.round(selectedProduct.price * 100) / 100).toFixed(2)} </span>
                <div className="flex gap-5">
                    <h6 className="text"> Availability : </h6>
                    <h6 className={`${selectedProduct.stock ? "text-primary" : "text-danger"}`}> {selectedProduct.stock ? "In Stock" : "Out of Stock"} </h6>
                </div>
            </div>

            <p className="text-secondText border-b-2 border-muted py-4"> {selectedProduct.description} </p>

            {!selectedProduct.colorChart ? "" :
                <div className="flex gap-2">
                    {selectedProduct.colorChart.map((color) =>
                        <span className={`p-4 border rounded-full`} style={{ backgroundColor: color, borderColor: color }} key={color}></span>
                    )}
                </div>
            }

            <div className="flex items-center gap-3 py-10 text-text">
                <button className="btn-primary-small"> Select Options </button>
                <div className="border border-muted rounded-full p-2 bg-white">
                    <Heart size={20}></Heart>
                </div>
                <button className="border border-muted rounded-full p-2 bg-white hover:cursor-pointer active:bg-primary active:text-white transition-colors duration-100" onClick={handleCart}>
                    <ShoppingCart size={20}></ShoppingCart>
                </button>
                <div className="border border-muted rounded-full p-2 bg-white">
                    <Eye size={20}></Eye>
                </div>
            </div>

        </div>
    )
}