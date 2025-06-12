import { useForm } from "react-hook-form"
import FormInput from "../FromComponents/FormInput"
import { useDispatch, useSelector } from "react-redux"
import { editAddress } from "../../store/actions/clientActions"


const initialFormData = {
    city: "",
    district: "",
    neighborhood: "",
    phone: "",
    name: "",
    surname: "",
    address: "",
    id: null,
    title: "",
}

export default function AddressEditForm(props) {

    const { edit, setEdit, address } = props
    const dispatch = useDispatch()
    const { user } = useSelector((store) => store.client)


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: initialFormData,
        mode: "all"
    })


    async function formSubmit(formData) {
        const finalFormData = { ...formData, id: address.id }
        setEdit(false)
        dispatch(editAddress(finalFormData,user.token))
    }


    return (
        <div>
            <form className="w-full flex flex-col gap-1" onSubmit={handleSubmit(formSubmit)}>


                <div className="flex flex-col gap-1 border border-secondText rounded-md p-5 w-full bg-lightGray2">
                    <div className="flex flex-col gap-1">
                        <span> City : {address.city} </span>
                        <FormInput
                            type="text"
                            labelText=""
                            placeholderText="New City"
                            register={register}
                            registerName="city"
                            rules={{}}
                            error={""}
                        ></FormInput>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span> District : {address.district} </span>
                        <FormInput
                            type="text"
                            labelText=""
                            placeholderText="New District"
                            register={register}
                            registerName="district"
                            rules={{}}
                            error={""}
                        ></FormInput>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span> Neighborhood : {address.neighborhood} </span>
                        <FormInput
                            type="text"
                            labelText=""
                            placeholderText="New Neighborhood"
                            register={register}
                            registerName="neighborhood"
                            rules={{}}
                            error={""}
                        ></FormInput>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span> Phone : {address.phone} </span>
                        <FormInput
                            type="text"
                            labelText=""
                            placeholderText="New Phone"
                            register={register}
                            registerName="phone"
                            rules={{}}
                            error={""}
                        ></FormInput>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span> Name : {address.name} </span>
                        <FormInput
                            type="text"
                            labelText=""
                            placeholderText="New Name"
                            register={register}
                            registerName="name"
                            rules={{}}
                            error={""}
                        ></FormInput>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span> Surname : {address.surname} </span>
                        <FormInput
                            type="text"
                            labelText=""
                            placeholderText="New Surname"
                            register={register}
                            registerName="surname"
                            rules={{}}
                            error={""}
                        ></FormInput>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span> Address : {address.address} </span>
                        <FormInput
                            type="text"
                            labelText=""
                            placeholderText="New Address"
                            register={register}
                            registerName="address"
                            rules={{}}
                            error={""}
                        ></FormInput>
                    </div>
                </div>






                <button
                    className="btn-primary hover:cursor-pointer w-full">
                    Confirm Edit
                </button>


            </form>

            <button
                className="btn-primary-reverse hover:cursor-pointer w-full"
                onClick={() => setEdit(false)}>
                Close Edit
            </button>

        </div>
    )
}