import { useState } from 'react'

//* toggles element of state on and off
function useToggleState() {
    //set default of element isOn to false
    const [isOn, setIsOn] = useState(false)
    //will toggle to opposite of isOn when toggled
    const handleToggle = () => {
        setIsOn(!isOn)
    }
    //useState arguments to be exported
    return [isOn, handleToggle]
}

export default useToggleState
