import { styled } from "styled-components";
import { Theme } from "../../styles/Theme";
import React from "react";

type InputFieldType = {
    type?: "text" | "password" | "textarea";
    label: string;
    id: string;
    name?: string;
}

export const InputField: React.FC<InputFieldType> = (props: InputFieldType) => {
    if(props.type && props.type == "textarea"){
        return (
            <StyledInputField>
            <Field as="textarea" type={props.type || 'text'} id={props.id} placeholder={props.label} name={props.name}/>
            <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
        </StyledInputField>
        )
    }
    return (
        <StyledInputField>
            <Field type={props.type || 'text'} id={props.id} placeholder={props.label} name={props.name}/>
            <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
        </StyledInputField>
    );
}

const StyledInputField = styled.div`
    position: relative;
`

const StyledLabel = styled.label`
    content: "";
    position: absolute;
    left: 0;
    transition: 0.2s;
`

const Field = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    padding: 0;
    margin-bottom: 30px;
    border-bottom: 2px solid ${Theme.colors.accent};
    font-size: 16px;
    line-height: 2em;
    background-color: transparent;
    color: ${Theme.colors.font};
    outline: none;
    overflow: hidden;

    &:focus-visible{
        border-bottom: 1px solid white;
    }

    &:focus-visible + label,
    &:not(:placeholder-shown) + label {
        transform: translateY(-20px);
    }

    &::placeholder{
        opacity: 0;
    }

    &::selection{
        color: white;
        background-color: ${Theme.colors.accent};
    }
`