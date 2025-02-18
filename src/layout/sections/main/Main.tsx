import React from "react";
import avatar from "../../../assets/img/avatar.jpeg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./MainStyles";

export const Main: React.FC = () => {
    return (
        <S.Main id="home">
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap="wrap" gap="20px">
                    <S.TextWrapper>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Ripsime Madoyan</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </S.TextWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={avatar} alt="MyPhoto"/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

