import React, { useContext } from "react";
import { CounterContext } from "./Context";
export const Counter = () => {
    const { count, setCount } = useContext(CounterContext);
    return (

        <div className="text-center">
            <h3 className="text-2xl">Count is: {count}</h3>
            <button
                onClick={() => setCount(count + 1)}
                className="bg-pink-600 p-2 rounded text-white"
            >
                Increase Count
            </button>
        </div>
    )
}