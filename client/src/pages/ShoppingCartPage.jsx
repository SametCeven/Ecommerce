import { useDispatch, useSelector } from "react-redux"
import { addToCart, checkCart, deleteFromCart, removeFromCart } from "../store/actions/shoppingCartActions"
import { Trash2, ChevronRight } from 'lucide-react';
import { useEffect, useState } from "react";

export default function ShoppingCartPage() {

    const dispatch = useDispatch()
    const { cart } = useSelector(store => store.shoppingCart)
    const deliveryAmount = 20.00
    const discountAmount = 50.00
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalAmountFinal, setTotalAmountFinal] = useState(0)

    useEffect(() => {
        setTotalAmount(cart.reduce((sum, item) => sum + item.count * item.product.price, 0))
        setTotalAmountFinal(totalAmount + deliveryAmount - discountAmount)
    }, [cart])


    if (cart.length === 0) {
        return (
            <div>
                No item in the shopping cart ...
            </div>
        )
    }

    return (
        <div className="flex flex-col xl1440:flex-row gap-20">

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

                            <span className="font-bold xl1440:w-40"> {cartItem.product.name} </span>

                            <div className="flex items-center justify-between gap-1">
                                <span className="font-semibold"> Quantity : </span>

                                <button
                                    className={`btn-primary-small ${cartItem.count <= 1 ? "opacity-0" : "hover:cursor-pointer"}`}
                                    onClick={() => dispatch(removeFromCart(cartItem.product))}
                                    disabled={cartItem.count <= 1}
                                >
                                    -
                                </button>


                                <span className="w-5 text-center">{cartItem.count} </span>

                                <button
                                    className="btn-primary-small hover:cursor-pointer xl1440:mr-5"
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
                                <span className="font-semibold">Price : </span>
                                ${(Math.round(cartItem.product.price * 100) / 100).toFixed(2)}
                            </span>

                        </div>

                    </div>
                )}
                
            </div>

            <div className="w-90 py-20">
                <div className="flex flex-col gap-5 p-5 border border-secondText rounded-md">

                    <h4 className="text-primary mb-5"> Summary Of The Order </h4>

                    <div className="flex justify-between">
                        <h6 className="text-secondText"> Total Amount </h6>
                        <span className="font-semibold"> ${(Math.round(totalAmount * 100) / 100).toFixed(2)} </span>
                    </div>
                    <div className="flex justify-between">
                        <h6 className="text-secondText">Delivery Amount </h6>
                        <span className="font-semibold"> ${(Math.round(deliveryAmount * 100) / 100).toFixed(2)} </span>
                    </div>
                    <div className="flex justify-between mb-5 border-b border-secondText pb-2">
                        <h6 className="text-secondText">Discount Amount </h6>
                        <span className="font-semibold"> -${(Math.round(discountAmount * 100) / 100).toFixed(2)} </span>
                    </div>
                    <div className="flex justify-between">
                        <h6 className="text-secondText"> Total Amount </h6>
                        <span className="font-semibold text-primary"> ${(Math.round(totalAmountFinal * 100) / 100).toFixed(2)} </span>
                    </div>

                    <button className="btn-primary mt-5 flex justify-center items-center gap-1 hover:cursor-pointer"> 
                        Confirm Order 
                        <ChevronRight></ChevronRight> 
                    </button>

                </div>
            </div>

        </div>
    )
}