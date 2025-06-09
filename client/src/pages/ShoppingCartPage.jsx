import { useDispatch, useSelector } from "react-redux"
import { addToCart, checkCart, deleteFromCart, removeFromCart } from "../store/actions/shoppingCartActions"
import { Trash2 } from 'lucide-react';

export default function ShoppingCartPage() {

    const dispatch = useDispatch()
    const { cart } = useSelector(store => store.shoppingCart)

    //console.log(cart[0].checked)

    if (cart.length === 0) {
        return (
            <div>
                No item in the shopping cart ...
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full">

            {cart.map((cartItem, index) =>
                <div className="flex gap-5 items-center border-b px-2 py-10 w-full xl1440:gap-20" key={index}>

                    <label className="scale-150">
                        <input
                            className=""
                            type="checkbox"
                            checked={cartItem.checked}
                            onChange={() => dispatch(checkCart(cartItem.product))} />
                    </label>

                    <img className="w-20 h-20 object-cover xl1440:w-40 xl1440:h-40" src={cartItem.product.images[0].url} alt="" />

                    <div className="flex flex-col gap-5 w-full xl1440:flex-row xl1440:items-center xl1440:gap-10">
                        <span className="font-bold"> {cartItem.product.name} </span>

                        <div className="flex items-center justify-between gap-3">
                            <span className="font-semibold"> Quantity : </span>

                            <button
                                className={`btn-primary-small ${cartItem.count<=1 ? "opacity-0" : "hover:cursor-pointer"}`}
                                onClick={() => dispatch(removeFromCart(cartItem.product))}
                                disabled={cartItem.count <= 1}
                            >
                                -
                            </button>


                            <span className="w-5 text-center">{cartItem.count} </span>

                            <button
                                className="btn-primary-small hover:cursor-pointer"
                                onClick={() => dispatch(addToCart(cartItem.product))}
                            >
                                +
                            </button>

                            <Trash2
                                className="hover:cursor-pointer"
                                onClick={() => dispatch(deleteFromCart(cartItem.product))}
                            ></Trash2>
                        </div>

                        <span>
                            <span className="font-semibold">Price :</span>
                            $ {(Math.round(cartItem.product.price * 100) / 100).toFixed(2)}
                        </span>

                    </div>

                </div>
            )}

        </div>
    )
}