import {useState} from "react";
function MyComponent() {
    const [name,setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Jehan");
    }

    const toggleEmployeeStatus = ()=>{
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Update Name</button>
            <p>Age: {age}</p>

            <button onClick={()=>{
                setAge(age + 1)
                }
            }>Increment</button>

            <button onClick={()=>{
                setAge( 0)
                }
            }>Reset</button>

            <button onClick={()=>{
                    setAge(age - 1)
            }}>Decrease</button>

            <p>Employed: {isEmployed ? "YES" : "No"}</p>
            <button onClick={toggleEmployeeStatus}>Toggle</button>
        </div>
    );
}
export default MyComponent