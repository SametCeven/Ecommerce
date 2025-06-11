import { useEffect, useState } from "react"
import OrderSummary from "../components/OrderSummary"
import { useDispatch, useSelector } from "react-redux"
import { deleteAddress, getAddress } from "../store/actions/clientActions"
import Spinner from "../components/Spinner"
import { creatorActionAddress } from "../store/actions/shoppingCartActions"
import { Plus } from 'lucide-react';
import AddressForm from "../components/Forms/AddressForm"
import AddressEditForm from "../components/Forms/AddressEditForm"

const optionsMap = {
    address: "address",
    payment: "payment",
}



export default function CreateOrderPage() {

    const dispatch = useDispatch()
    const [option, setOption] = useState(optionsMap.address)
    const [edit, setEdit] = useState(false)
    const [editAddressId, setEditAddressId] = useState()
    const [addressSelected, setAddressSelected] = useState(false)
    const { deliveryAmount, discountAmount, totalAmount, totalAmountFinal, address: addressCart } = useSelector(store => store.shoppingCart)
    const { user, addressList, addressLoading } = useSelector(store => store.client)





    function handleOption(e) {
        setOption(e.target.value)
    }

    function handleAddressSelection(e) {
        dispatch(creatorActionAddress(e.target.value))
    }

    useEffect(() => {
        dispatch(getAddress(user.token))
    }, [])






    return (
        <div className="flex flex-col gap-20 px-5">

            <div className="flex justify-between items-center gap-5 font-bold text-text">
                <button
                    className="px-5 py-3 border rounded-md border-text hover:cursor-pointer hover:bg-primary hover:text-white"
                    value={optionsMap.address}
                    onClick={handleOption}>
                    Address Information
                </button>
                <button
                    className="px-5 py-3 border rounded-md border-text hover:cursor-pointer hover:bg-primary hover:text-white"
                    value={optionsMap.payment}
                    onClick={handleOption}>
                    Payment Information
                </button>
            </div>


            {option === optionsMap.address &&
                <div className="flex flex-col gap-20">
                    <button
                        className="flex justify-center gap-3 border border-secondText rounded-md p-5 bg-lightGray2 hover:cursor-pointer w-full"
                        onClick={() => setAddressSelected(true)}>
                        Add Address
                        <Plus></Plus>
                    </button>

                    {addressSelected &&
                        <AddressForm setAddressSelected={setAddressSelected}></AddressForm>
                    }

                    {addressLoading ? <Spinner></Spinner> : (
                        (addressList || []).length > 0 ?
                            <div className="flex flex-col gap-5 w-full">

                                {addressList.map((address, index) =>
                                    <div className="flex flex-col gap-3 items-baseline w-full" key={index}>

                                        <div className="flex justify-between w-full" key={index}>
                                            <label className="flex gap-3" key={index}>
                                                <input
                                                    type="radio"
                                                    className="scale-150"
                                                    value={address.id}
                                                    onChange={handleAddressSelection}
                                                    name={optionsMap.address}
                                                    checked={address.id === Number(addressCart)}
                                                />
                                                {address.title}
                                            </label>
                                            <div className="flex gap-3">
                                                <button
                                                    className="underline hover:cursor-pointer"
                                                    onClick={() => {
                                                        setEdit(!edit)
                                                        setEditAddressId(address.id)
                                                    }
                                                    }
                                                    value={editAddressId}>
                                                    Edit
                                                </button>
                                                <button
                                                    className="underline hover:cursor-pointer text-alert"
                                                    onClick={() => dispatch(deleteAddress(address.id, user.token))}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>

                                        {edit && address.id === editAddressId ?
                                            <AddressEditForm
                                                address={address}
                                                edit={edit}
                                                setEdit={setEdit}
                                            ></AddressEditForm>
                                            :

                                            <div className="flex flex-col gap-1 border border-secondText rounded-md p-5 w-full bg-lightGray2">
                                                <span> City : {address.city} </span>
                                                <span> District : {address.district} </span>
                                                <span> Neighborhood : {address.neighborhood} </span>
                                                <span> Phone : {address.phone} </span>
                                                <span> Name : {address.name} </span>
                                                <span> Surname : {address.surname} </span>
                                                <span> Address : {address.address} </span>
                                            </div>
                                        }



                                    </div>
                                )}

                            </div>
                            : <p> No address found </p>


                    )}



                </div>
            }


            {option === optionsMap.payment &&

                <div>
                    payment
                </div>

            }



            <OrderSummary
                totalAmount={totalAmount}
                deliveryAmount={deliveryAmount}
                discountAmount={discountAmount}
                totalAmountFinal={totalAmountFinal}
            ></OrderSummary>




        </div>
    )
}