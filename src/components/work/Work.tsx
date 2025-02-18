import React from "react";
import { ButtonLink } from "../ButtonLink";
import { S } from "./Workstyles";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work: React.FC<WorkPropsType> = (props:WorkPropsType) => {
    return (
        <S.Work>
            <S.Image src={props.src} alt="project image" />
            <S.ContentWrapper>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <ButtonLink href="#">Look it up</ButtonLink>
            </S.ContentWrapper>
            
        </S.Work>
    )
}