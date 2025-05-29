import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import axiosInstance from "../services/api"
import Spinner from "./Spinner"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import FormInput from "./FromComponents/FormInput"
import FormSelectInput from "./FromComponents/FormSelectInput"

const initialFormData = {
    name: "",
    email: "",
    password: "",
    passwordValidation: "",
    role_id: "",
    store: {
        name: "",
        phone: "",
        tax_no: "",
        bank_account: "",
    }
}

const errorMessages = {
    name: {
        required: "Name is required.",
        minLength: "Name should be at least 3 characters.",
    },
    email: {
        required: "Email is required.",
        pattern: "Not a valid email.",
    },
    password: {
        required: "Password is required.",
        pattern: [
            "Not a valid password.",
            "At least 8 characters",
            "At least 1 lowercase letter",
            "At least 1 uppercase letter",
            "At least 1 digit",
            "At least 1 special character(e.g. !@#$%^&*)"
        ],
    },
    passwordValidation: {
        required: "Password is required",
        match: "Passwords do not match."
    },
    storeName: {
        required: "Store Name is required.",
        minLength: "Store Name should be at least 3 characters.",
    },
    storePhone: {
        required: "Store Phone Number is required",
        tr: "Phone Number should be Türkiye phone number with 10 digits and starting with +90."
    },
    storeTax: {
        required: "Store Tax ID is required.",
        validate: "Pattern should match TXXXXVXXXXXX where X can be any number."
    },
    storeBankAccount: {
        required: "Store Bank Account is required.",
        validate: "It should be a valid IBAN address",
    }
}

const validationRules = {
    name: {
        minLength: 3,
    },
    email: {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password: {
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/
    },
    storeName: {
        minLength: 3,
    },
    storePhone: {
        pattern: /^\+90\d{10}$/
    },
    storeTax: {
        pattern: /^T\d{4}V\d{6}$/
    },
    storeBank: {
        pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/
    }

}

import { useSelector, useDispatch } from "react-redux"
import { fetchRoles } from "../store/actions/clientActions"


export default function SignupForm() {

    /* const rolesRedux = useSelector(store => store.client.roles)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRoles())
    },[])
    console.log(rolesRedux) */

    const history = useHistory()
    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const [errorSubmit, setErrorSubmit] = useState(false)

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
        const { passwordValidation, ...cleanFormData } = formData
        setLoadingSubmit(true)
        setErrorSubmit(false)

        try {
            const res = await axiosInstance.post("/signup", cleanFormData)
            history.goBack()
            console.log(res)
        } catch (error) {
            console.log(error)
            setErrorSubmit(error)
        } finally {
            setLoadingSubmit(false)
        }
    }

    const [roles, setRoles] = useState();
    const [defaultRoleId, setDefaultRoleId] = useState("")
    const roleId = watch("role_id")
    const password = watch("password")


    useEffect(() => {
        axiosInstance
            .get("/roles")
            .then((res) => {
                setRoles(res.data)
                const defaultRole = res.data.find(role => role.code === "customer")
                if (defaultRole) setDefaultRoleId(defaultRole.id)
            })
    }, [])

    useEffect(() => {
        if (defaultRoleId) {
            reset({
                ...initialFormData,
                role_id: defaultRoleId.toString(),
            })
        }
    }, [defaultRoleId])


    return (
        <form className="flex flex-col gap-10" onSubmit={handleSubmit(formSubmit)}>

            <FormInput
                type="text"
                labelText="Name *"
                placeholderText="Name"
                register={register}
                registerName="name"
                rules={{
                    required: { value: true, message: errorMessages.name.required },
                    minLength: { value: validationRules.name.minLength, message: errorMessages.name.minLength }
                }}
                error={errors.name}
            ></FormInput>

            <FormInput
                type="email"
                labelText="Email *"
                placeholderText="Email"
                register={register}
                registerName="email"
                rules={{
                    required: { value: true, message: errorMessages.email.required },
                    pattern: { value: validationRules.email.pattern, message: errorMessages.email.pattern }
                }}
                error={errors.email}
            ></FormInput>

            <FormInput
                type="password"
                labelText="Password *"
                placeholderText="Password"
                register={register}
                registerName="password"
                rules={{
                    required: { value: true, message: errorMessages.password.required },
                    pattern: { value: validationRules.password.pattern, message: errorMessages.password.pattern }
                }}
                error={errors.password}
            ></FormInput>

            <FormInput
                type="text"
                labelText="Password Validation *"
                placeholderText="Password Validation"
                register={register}
                registerName="passwordValidation"
                rules={{
                    required: { value: true, message: errorMessages.passwordValidation.required },
                    validate: (value) => value === password || errorMessages.passwordValidation.match
                }}
                error={errors.passwordValidation}
            ></FormInput>

            <FormSelectInput
                labelText="Role *"
                register={register}
                registerName="role_id"
                options={roles}
                optionValueKey="id"
                optionTextKey="name"
            ></FormSelectInput>

            {roleId === "2" ?
                <div className="flex flex-col gap-10">

                    <FormInput
                        type="text"
                        labelText="Store Name *"
                        placeholderText="Store Name"
                        register={register}
                        registerName="store.name"
                        rules={{
                            required: { value: true, message: errorMessages.storeName.required },
                            minLength: {
                                value: validationRules.storeName.minLength, message: errorMessages.storeName.minLength
                            }
                        }}
                        error={errors.store?.name}
                    ></FormInput>

                    <FormInput
                        type="tel"
                        labelText="Store Phone Number *"
                        placeholderText="+90 "
                        register={register}
                        registerName="store.phone"
                        rules={{
                            required: { value: true, message: errorMessages.storePhone.required },
                            pattern: {
                                value: validationRules.storePhone.pattern, message: errorMessages.storePhone.tr
                            }
                        }}
                        error={errors.store?.phone}
                    ></FormInput>

                    <FormInput
                        type="text"
                        labelText="Store Tax ID *"
                        placeholderText="TXXXXVXXXXXX"
                        register={register}
                        registerName="store.tax_no"
                        rules={{
                            required: {
                                value: true, message: errorMessages.storeTax.required
                            },
                            pattern: {
                                value: validationRules.storeTax.pattern, message: errorMessages.storeTax.validate
                            }
                        }}
                        error={errors.store?.tax_no}
                    ></FormInput>

                    <FormInput
                        type="text"
                        labelText="Store Bank Account *"
                        placeholderText="Store Bank Account"
                        register={register}
                        registerName="store.bank_account"
                        rules={{
                            required: {
                                value: true, message: errorMessages.storeBankAccount.required
                            },
                            pattern: {
                                value: validationRules.storeBank.pattern, message: errorMessages.storeBankAccount.validate
                            }
                        }}
                        error={errors.store?.bank_account}
                    ></FormInput>

                </div>
                : ""}

            {isValid &&
                <div>
                    <button className="btn-primary" disabled={loadingSubmit}>
                        {loadingSubmit ? <Spinner></Spinner> : "Submit"}
                        {loadingSubmit ? "Submitting..." : "Submit"}
                    </button>
                </div>
            }

            {errorSubmit &&
                <p> Error with signup try again.. </p>
            }

        </form>
    )

}