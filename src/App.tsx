import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Input} from "./Input";


function App() {
    const [value, setValue] = useState<number | string>(0)
    const [maxValueCounter, setMaxValueCounter] = useState(0)
    const [startValueCounter, setStartValueCounter] = useState(0)

    useEffect(() => {
        let valueLocalStorage = localStorage.getItem("valueKeyStart")
        if (valueLocalStorage) {
            setStartValueCounter(JSON.parse(valueLocalStorage))
            setValue(JSON.parse(valueLocalStorage))
        }
        let valueLocalStorageMaxValue = localStorage.getItem("valueKeyMax")
        if (valueLocalStorageMaxValue) {
            setMaxValueCounter(JSON.parse(valueLocalStorageMaxValue))
        }
    }, [])
    useEffect(() => {
        if (startValueCounter < 0) {
            setValue("incorrect value")
        }
        if (startValueCounter >= 0) {
            setValue(0)
        }
        if (maxValueCounter <= startValueCounter) {
            setValue("incorrect value")
        }
        if (startValueCounter >= 0) {
            localStorage.setItem("valueKeyStart", JSON.stringify(startValueCounter))
        }
        if (maxValueCounter) {
            localStorage.setItem("valueKeyMax", JSON.stringify(maxValueCounter))
        }
    }, [startValueCounter, maxValueCounter])

    const countInc = () => {
        if (maxValueCounter > value) setValue(+value + 1)
    }

    const countRest = () => {
        setValue(startValueCounter)
    }

    function startValue(e: React.ChangeEvent<HTMLInputElement>) {
        const startValue = e.currentTarget.value
        if (startValue) {
            setStartValueCounter(JSON.parse(startValue))
        }
        return startValue
    }

    function maxValue(e: React.ChangeEvent<HTMLInputElement>) {
        const maxValue = e.currentTarget.value
        if (maxValue) {
            setMaxValueCounter(JSON.parse(maxValue))
        }
        return maxValue
    }

    const setValueInSpan = () => {
        setValue(startValueCounter)
    }

    let classValueSpan
    if (value === "incorrect value") {
        classValueSpan = "span-error"
    }
    if (value === maxValueCounter) {
        classValueSpan = "max-span"
    }

    return (
        <div className="App">
            <div className={"counter-box"}>
                <div className="count-left">
                    <div className={"input-box"}>
                        <div className={"input-div-max-value"}>
                            <div>Max value:</div>
                            <Input
                                type={"number"}
                                onChange={maxValue}
                                value={maxValueCounter}
                                maxValueCounter={maxValueCounter}
                                startValueCounter={startValueCounter}
                            />
                        </div>
                        <div className={"input-div-start-value"}>
                            <div>Start value:</div>
                            <Input
                                type={"number"}
                                onChange={startValue}
                                value={startValueCounter}
                                maxValueCounter={maxValueCounter}
                                startValueCounter={startValueCounter}
                            />
                        </div>
                    </div>
                    <div className={"button-box"}>
                        <Button title={"set"} onClick={setValueInSpan} value={value} maxValueCounter={maxValueCounter}
                                startValueCounter={startValueCounter}/>
                    </div>
                </div>
                <div className="count-right">
                    <span className={`span ${classValueSpan}`}>{value}</span>
                    <div>
                        <Button title={"inc"} onClick={countInc} value={value} maxValueCounter={maxValueCounter}
                                startValueCounter={startValueCounter}/>
                        <Button title={"reset"} onClick={countRest} value={value} maxValueCounter={maxValueCounter}
                                startValueCounter={startValueCounter}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;


