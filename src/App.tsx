import React, { Children, useContext, useState } from "react";
import { CounterContext } from "./Context";
import { Counter } from "./Counter";
const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <CounterContext.Provider value={{ count, setCount }}>
               <Counter/>
            </CounterContext.Provider>
        </div>
    );
}
export default App