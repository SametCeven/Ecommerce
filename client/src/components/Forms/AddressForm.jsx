import { useForm } from "react-hook-form"
import FormInput from "../FromComponents/FormInput"
import { addAddress } from "../../store/actions/clientActions"
import { useDispatch, useSelector } from "react-redux"

const initialFormData = {
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",

}


export default function AddressForm(props) {

    const { setAddressSelected } = props
    const dispatch = useDispatch()
    const { user } = useSelector(store => store.client)

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
        dispatch(addAddress(formData,user.token))
        setAddressSelected(false)
    }


    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(formSubmit)}>

            <FormInput
                type="text"
                labelText="Address Title"
                placeholderText="Address Title"
                register={register}
                registerName="title"
                rules={{}}
                error={""}
            ></FormInput>

            <FormInput
                type="text"
                labelText="Name"
                placeholderText="Name"
                register={register}
                registerName="name"
                rules={{}}
                error={""}
            ></FormInput>

            <FormInput
                type="text"
                labelText="Surname"
                placeholderText="Surname"
                register={register}
                registerName="surname"
                rules={{}}
                error={""}
            ></FormInput>

            <FormInput
                type="text"
                labelText="Phone"
                placeholderText="Phone"
                register={register}
                registerName="phone"
                rules={{}}
                error={""}
            ></FormInput>

            <FormInput
                type="text"
                labelText="City"
                placeholderText="City"
                register={register}
                registerName="city"
                rules={{}}
                error={""}
            ></FormInput>

            <FormInput
                type="text"
                labelText="District"
                placeholderText="District"
                register={register}
                registerName="district"
                rules={{}}
                error={""}
            ></FormInput>

            <FormInput
                type="text"
                labelText="Neighborhood"
                placeholderText="Neighborhood"
                register={register}
                registerName="neighborhood"
                rules={{}}
                error={""}
            ></FormInput>

            <FormInput
                type="text"
                labelText="Address"
                placeholderText="Address"
                register={register}
                registerName="address"
                rules={{}}
                error={""}
            ></FormInput>

            {isValid &&
                <button className="btn-primary hover:cursor-pointer"> Submit Address </button>
            }

        </form>
    )
}