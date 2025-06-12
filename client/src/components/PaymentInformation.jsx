import { Plus } from 'lucide-react';
import { useState } from 'react';
import PaymentForm from './Forms/PaymentForm';
import { creatorActionPayment } from '../store/actions/shoppingCartActions';
import { deleteCard } from '../store/actions/clientActions';
import { useDispatch } from 'react-redux';
import Spinner from './Spinner';
import PaymentEditForm from './Forms/PaymentEditForm';

export default function PaymentInformation(props) {

    const { cardLoading, creditCards, optionsMap, paymentCart, user } = props

    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [editPaymentId, setEditPaymentId] = useState()
    const [addPaymentSelected, setAddPaymentSelected] = useState(false)

    function handlePaymentSelection(e) {
        dispatch(creatorActionPayment(e.target.value))
    }



    return (
        <div className='flex flex-col gap-20'>
            <button
                className="flex justify-center gap-3 border border-secondText rounded-md p-5 bg-lightGray2 hover:cursor-pointer w-full"
                onClick={() => setAddPaymentSelected(true)}>
                Add Payment Information
                <Plus></Plus>
            </button>

            {addPaymentSelected &&
                <PaymentForm setAddPaymentSelected={setAddPaymentSelected}></PaymentForm>
            }


            {cardLoading ? <Spinner></Spinner> : (
                (creditCards || []).length > 0 ?
                    <div className="flex flex-col gap-5 w-full">

                        {creditCards.map((card, index) =>
                            <div className="flex flex-col gap-3 items-baseline w-full" key={index}>

                                <div className="flex justify-between w-full" key={index}>
                                    <label className="flex gap-3" key={index}>
                                        <input
                                            type="radio"
                                            className="scale-150"
                                            value={card.id}
                                            onChange={handlePaymentSelection}
                                            name={optionsMap.payment}
                                            checked={card.id === Number(paymentCart)}
                                        />
                                    </label>
                                    <div className="flex gap-3">
                                        <button
                                            className="underline hover:cursor-pointer"
                                            onClick={() => {
                                                setEdit(!edit)
                                                setEditPaymentId(card.id)
                                            }
                                            }
                                            value={editPaymentId}>
                                            Edit
                                        </button>
                                        <button
                                            className="underline hover:cursor-pointer text-alert"
                                            onClick={() => dispatch(deleteCard(card.id, user.token))}>
                                            Delete
                                        </button>
                                    </div>
                                </div>

                                {edit && card.id === editPaymentId ?
                                    <PaymentEditForm
                                        card={card}
                                        edit={edit}
                                        setEdit={setEdit}
                                    ></PaymentEditForm>
                                    :

                                    <div className="flex flex-col gap-1 border border-secondText rounded-md p-5 w-full bg-lightGray2">
                                        <span> Card No : {card.card_no} </span>
                                        <span> Expire Month : {card.expire_month} </span>
                                        <span> Expire Year : {card.expire_year} </span>
                                        <span> Name On Card : {card.name_on_card} </span>
                                    </div>
                                }



                            </div>
                        )}

                    </div>
                    : <p> No cards found </p>


            )}













        </div>
    )
}