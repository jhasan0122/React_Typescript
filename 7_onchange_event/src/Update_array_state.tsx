import {useState} from "react";

function Update_array_state() {
    const [foods,setFoods] = useState<string[]>(["Apple","Orange","banana"])

    function handleAddFood() {
        const newFood = (document.getElementById("foodInput") as HTMLInputElement).value;
        (document.getElementById('foodInput') as HTMLInputElement).value = "";
        // setFoods(f => [...f,newFood]);
        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index:number) {
        setFoods(foods.filter((_,i) => i!=index))
    }

    return(
        <div>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food,index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                )}
            </ul>

            <input type="text" id={"foodInput"} placeholder={"Enter food name"}/>
            <button onClick={handleAddFood}>Add</button>
        </div>
    )
}
export default  Update_array_state