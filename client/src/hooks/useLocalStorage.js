import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {

    function initialValue() {
        try {
            const item = localStorage.getItem(key)
            if (item === null) {
                localStorage.setItem(key, typeof defaultValue === "string" ? defaultValue : JSON.stringify(defaultValue))
                return defaultValue
            }
            if(typeof defaultValue === "string"){
                return item
            }
            return JSON.parse(item)
        }
        catch (err) {
            console.error("Failed to parse localStorage item", err)
            return defaultValue
        }

    }

    const [value, setValue] = useState(initialValue())

    function setLocalStorageValue(newValue) {
        try {
            localStorage.setItem(key, typeof newValue ==="string" ? newValue: JSON.stringify(newValue))
            setValue(newValue)
        }
        catch (err) {
            console.error("Failed to set localStorage item", err)
        }
    }


    return [value, setLocalStorageValue]
}