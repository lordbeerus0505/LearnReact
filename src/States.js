import { useState } from "react"; // With regards to hooks

export const ButtonStateHandler = () => {
    // var age = 0; This wont help with updates, need useState
    const [age, setAge] = useState(0) // setAge is some function; 0 is the default value

    // const increaseAge = () => {
    //     age += 1;
    //     console.log(age)
    // }

    const increaseAge = () => {
        setAge(age+1)
    }
    return (
        <div>
            <h1>Hello {age}</h1> 
            {/* age doesnt change on its own. React generates the value only once, so React doesnt know it has changed.
            States can be used to update this value. */}
            <button onClick={increaseAge}>Increase Age</button>
        </div>
       
    )
  }

  export const TextStateHandler = () => {
    const [text, updateText] = useState('') // similar to buttonStateHandler
    const textReflect = (event) => {
        updateText(event.target.value) // This is important
    }

    return (
        <div>
            <h1>Reflect contents of this text box</h1>
            <input onChange={textReflect} placeholder="type here" type="text"/>
            <p>The contents are : <br/> {text}</p>
        </div>
    )
  }

