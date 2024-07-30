import React, {ChangeEvent, useState} from "react";

type Car = {
    year:number,
    brand:string,
    model:string,
}
function Update_object_state() {
    const [car,setCar] = useState<Car>({year: 2024,
                                                                                    brand:"Ford",
                                                                                    model:"mustang"})
    function handleYearChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCar(c => ({...c, year: Number(event.target.value)}));
    }
    function handleBrandChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCar(c => ({...c,brand: event.target.value}))
    }
    function handleModelChange(event:ChangeEvent<HTMLInputElement>) {
        setCar(c => ({...c,model: event.target.value}))
    }

    return(
        <div>
            <p>Your favorite car is Year: {car.year} Brand: {car.brand} Model : {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.brand} onChange={handleBrandChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    )
}
export default Update_object_state