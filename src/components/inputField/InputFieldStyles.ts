import { styled } from "styled-components"
import { Theme } from "../../styles/Theme"

const InputField = styled.div`
    position: relative;
`

const Label = styled.label`
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

export const S = {
    InputField,
    Label,
    Field,
}