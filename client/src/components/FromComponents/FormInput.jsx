export default function FormInput(props) {

    const { type, labelText, placeholderText, register, registerName, error, rules } = props

    return (
        <label className="input-label">

            {labelText}

            <input
                className="input-input"
                type={type}
                placeholder={placeholderText}
                {...register(registerName, rules)}
            />

            {error && typeof(error.message) === "object" && error.message.length > 1 &&
                <div>
                    {error.message.map((msg) =>
                        <p key={msg} className="input-error"> {msg} </p>)
                    }
                </div>
            }
            
            {error && typeof (error.message) === "string" &&
                <p className="input-error"> {error.message} </p>
            }

        </label >
    )
}