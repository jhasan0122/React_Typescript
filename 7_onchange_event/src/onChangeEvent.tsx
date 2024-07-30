import { useState, ChangeEvent } from "react";

function OnChangeEvent() {
    const [name, setName] = useState<string>("Guest");
    const [quantity, setQuantity] = useState<number>(0);
    const [comment, setComment] = useState<string>("");
    const [payment, setPayment] = useState<string>("");
    const [shipping, setShipping] = useState<string>("Delivery");

    function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleQuantityChange(event: ChangeEvent<HTMLInputElement>) {
        setQuantity(Number(event.target.value));
    }

    function handleCommentChange(event: ChangeEvent<HTMLInputElement>) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event: ChangeEvent<HTMLSelectElement>) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event: ChangeEvent<HTMLInputElement>) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <input type="text" value={comment} onChange={handleCommentChange} />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="paypal">Paypal</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input
                    type="radio"
                    value="pick_up"
                    checked={shipping === "Pick up"}
                    onChange={handleShippingChange}
                />
                Pick Up
            </label>
            <label>
                <input
                    type="radio"
                    value="delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}
                />
                Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </div>
    );
}

export default OnChangeEvent;
