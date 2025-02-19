import React from "react";
import { S } from "./InputFieldStyles";

type InputFieldType = {
    type?: "text" | "password" | "textarea";
    label: string;
    id: string;
    name?: string;
}

export const InputField: React.FC<InputFieldType> = (props: InputFieldType) => {
    if(props.type && props.type == "textarea"){
        return (
            <S.InputField>
            <S.Field required as="textarea" type={props.type || 'text'} id={props.id} placeholder={props.label} name={props.name}/>
            <S.Label htmlFor={props.id}>{props.label}</S.Label>
        </S.InputField>
        )
    }
    return (
        <S.InputField>
            <S.Field required type={props.type || 'text'} id={props.id} placeholder={props.label} name={props.name}/>
            <S.Label htmlFor={props.id}>{props.label}</S.Label>
        </S.InputField>
    );
}