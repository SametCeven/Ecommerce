import { useForm } from "react-hook-form"
import FormInput from "../FromComponents/FormInput"
import { useDispatch, useSelector } from "react-redux"
import { creatorActionUser, login } from "../../store/actions/clientActions"
import Spinner from "../Spinner"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { toast } from "react-toastify"
import { useState } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"


const initialFormData = {
    email: "",
    password: "",
}

const errorMessages = {
    email: {
        required: "Email is required.",
        pattern: "Not a valid email.",
    },
    password: {
        required: "Password is required."
    }
}

const validationRules = {
    email: {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
}

export default function LoginForm() {

    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(store => store.client.user)
    const userLoginLoading = useSelector(store => store.client.loginLoading)
    const userLoginError = useSelector(store => store.client.loginError)
    const [token, setToken] = useLocalStorage("USER_TOKEN", "")
    const [rememberMe, setRememberMe] = useState(false)

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
        try{
            const data = await dispatch(login(formData))
            if(data.token && rememberMe){
                setToken(data.token)
            }
            history.goBack()
        }catch(error){
            toast.error("Error Logging In ... " , {
                autoClose: 1500,
            })
        }
    }

    function handleLogout(){
        dispatch(creatorActionUser({}))   
        setToken("") 
    }

    function handleRememberMe(){
        setRememberMe(!rememberMe)
    }


    
    if(user.name){
        return(
            <div className="flex flex-col gap-10">
                <p> Already Logged In ... </p>
                <button className="btn-primary" onClick={handleLogout}> Logout </button>
            </div>
        )
    }

    return (
        <form className="flex flex-col gap-10" onSubmit={handleSubmit(formSubmit)}>

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
                    required: { value: true, message: errorMessages.password.required }
                }}
                error={errors.password}
            ></FormInput>

            <label className="flex gap-2">
                <input 
                    className="" 
                    type="checkbox" 
                    value={rememberMe} 
                    onClick={handleRememberMe} />
                Remember Me
            </label>

            {isValid &&
                <div>
                    <button className="btn-primary flex gap-10 text-center" disabled={userLoginLoading}>
                        {userLoginLoading ? <Spinner></Spinner> : ""}
                        {userLoginLoading ? "Logging in ..." : "Login"}
                    </button>
                </div>
            }

            {userLoginError &&
                <p className="input-error"> Error with logging in try again.. </p>
            }

        </form>
    )
}