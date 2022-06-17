import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    title: string
    onClick: () => void
    value: number | string
    maxValueCounter: number
    startValueCounter: number
}

export const Button = (props: ButtonPropsType) => {
    let buttonDisabledInc = props.title === "inc" && props.value === props.maxValueCounter
    let buttonDisabledReset = props.title === "reset" && props.value === props.startValueCounter
    let classButtonOpacity = buttonDisabledInc || buttonDisabledReset ? s.button_opacity : ""

    return (
        <button className={s.button + " " + classButtonOpacity} onClick={props.onClick}
                disabled={buttonDisabledInc || buttonDisabledReset}>{props.title}</button>
    )
}