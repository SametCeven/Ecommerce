export default function FormSelectInput(props) {

    const { labelText, register, registerName, options, optionValueKey, optionTextKey } = props

    return (

        <label className="input-label">
            {labelText}
            <select
                className="input-input"
                {...register(registerName)}
            >
                {options &&
                    options.map((option, index) =>
                        <option value={option[optionValueKey]} key={index}> {option[optionTextKey]} </option>
                    )
                }

            </select>
        </label>
    )
}