import React from "react";
import s from './Input.module.css'

type InputPropsType = {
    type: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => string
    value: number | string
    maxValueCounter: number
    startValueCounter: number
}

export const Input = (props: InputPropsType) => {
    let classNameInputMaxValue = props.value === props.maxValueCounter ? props.maxValueCounter === props.startValueCounter || props.maxValueCounter < 0 || props.maxValueCounter < props.startValueCounter ? s.input_error : "" : ""
    let classNameInputStartValue = props.value === props.startValueCounter ?props.maxValueCounter === props.startValueCounter || props.maxValueCounter < 0 || props.maxValueCounter < props.startValueCounter ? s.input_error : "" : ""

    // let classNameInputStartValue = props.value === props.startValueCounter ? props.startValueCounter < 0 ? s.input_error : "" : ""

    return (
        <input
            className={s.input + " " + classNameInputMaxValue + " " + classNameInputStartValue}
            type={props.type}
            onChange={props.onChange}
            value={props.value}
        />
    )
}