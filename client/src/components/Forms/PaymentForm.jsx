import { useForm } from "react-hook-form"
import FormInput from "../FromComponents/FormInput"
import { useDispatch, useSelector } from "react-redux"
import { addCard } from "../../store/actions/clientActions"


const initialFormData = {
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
}


export default function PaymentForm(props) {

    const { setAddPaymentSelected } = props

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
        dispatch(addCard(formData, user.token))
        setAddPaymentSelected(false)
    }



    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(formSubmit)}>


            <FormInput
                type="text"
                labelText="Card No"
                placeholderText="Card No"
                register={register}
                registerName="card_no"
                rules={{}}
                error={""}
            ></FormInput>

            <FormInput
                type="text"
                labelText="Expire Month"
                placeholderText="Expire Month"
                register={register}
                registerName="expire_month"
                rules={{}}
                error={""}
            ></FormInput>

            <FormInput
                type="text"
                labelText="Expire Year"
                placeholderText="Expire Year"
                register={register}
                registerName="expire_year"
                rules={{}}
                error={""}
            ></FormInput>

            <FormInput
                type="text"
                labelText="Name On Card"
                placeholderText="Name On Card"
                register={register}
                registerName="name_on_card"
                rules={{}}
                error={""}
            ></FormInput>

            {isValid &&
                <button className="btn-primary hover:cursor-pointer"> Submit Payment Information </button>
            }

            <button
                className="btn-primary-reverse hover:cursor-pointer"
                onClick={() => setAddPaymentSelected(false)}>
                Close
            </button>

        </form>
    )
}