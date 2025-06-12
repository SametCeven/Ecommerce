import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { editCard } from "../../store/actions/clientActions"
import FormInput from "../FromComponents/FormInput"


const initialFormData = {
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
}



export default function PaymentEditForm(props) {

    const { card, edit, setEdit } = props
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
        const finalFormData = { ...formData, id: card.id }
        setEdit(false)
        dispatch(editCard(finalFormData, user.token))
    }



    return (
        <div>
            <form className="w-full flex flex-col gap-1" onSubmit={handleSubmit(formSubmit)}>


                <div className="flex flex-col gap-1 border border-secondText rounded-md p-5 w-full bg-lightGray2">
                    <div className="flex flex-col gap-1">
                        <span> Card No : {card.card_no} </span>
                        <FormInput
                            type="text"
                            labelText=""
                            placeholderText="New Card No"
                            register={register}
                            registerName="card_no"
                            rules={{}}
                            error={""}
                        ></FormInput>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span> District : {card.expire_month} </span>
                        <FormInput
                            type="text"
                            labelText=""
                            placeholderText="New Expire Month"
                            register={register}
                            registerName="expire_month"
                            rules={{}}
                            error={""}
                        ></FormInput>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span> Neighborhood : {card.expire_year} </span>
                        <FormInput
                            type="text"
                            labelText=""
                            placeholderText="New Expire Year"
                            register={register}
                            registerName="expire_year"
                            rules={{}}
                            error={""}
                        ></FormInput>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span> Phone : {card.name_on_card} </span>
                        <FormInput
                            type="text"
                            labelText=""
                            placeholderText="New Name On Card"
                            register={register}
                            registerName="name_on_Card"
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