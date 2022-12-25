/* 3 Lifecycle stages are
mounting
updating
unmounting
 */
import { useEffect, useState } from "react"

export const Lifecycle = () => {
    const [text, setText] = useState("");

    useEffect(() => { // Called every single time there is a state change when no [] provided as second param
        console.log("Component mounted");
        return () => {
            console.log("Unmounted") // only renders during unmount. Note, these make a lot more sense when using 2 components not just 1
        }
    }, [text]) // whenever text changes, we will log component mounted.

    return (
        <div>
            <input onChange={(event) => {
                setText(event.target.value);
            }}
            />
            <h1>{text}</h1>
        </div>
    )
}