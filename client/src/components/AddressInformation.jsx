import { useDispatch } from "react-redux";
import AddressEditForm from "./Forms/AddressEditForm";
import AddressForm from "./Forms/AddressForm";
import Spinner from "./Spinner"
import { Plus } from 'lucide-react';
import { deleteAddress } from "../store/actions/clientActions";
import { useState } from "react";
import { creatorActionAddress } from "../store/actions/shoppingCartActions";



export default function AddressInformation(props) {

    const { addressLoading, addressList, optionsMap, addressCart, user } = props

    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [editAddressId, setEditAddressId] = useState()
    const [addAddressSelected, setAddAddressSelected] = useState(false)

    function handleAddressSelection(e) {
        dispatch(creatorActionAddress(e.target.value))
    }


    return (
        <div className="flex flex-col gap-20">
            <button
                className="flex justify-center gap-3 border border-secondText rounded-md p-5 bg-lightGray2 hover:cursor-pointer w-full"
                onClick={() => setAddAddressSelected(true)}>
                Add Address
                <Plus></Plus>
            </button>

            {addAddressSelected &&
                <AddressForm setAddAddressSelected={setAddAddressSelected}></AddressForm>
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
    )
}


