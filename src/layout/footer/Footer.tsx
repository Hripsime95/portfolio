import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "./FooterStyles";

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction="column" align="center">
                    <S.Name>My social links</S.Name>
                    <S.SocialList>
                        <S.SocialItem>
                            <S.SocialIconLink href="https://www.instagram.com/hip_madoyan/" target="_blank">
                                <Icon iconId={"instagram"}/>
                            </S.SocialIconLink>
                        </S.SocialItem>
                        <S.SocialItem>
                            <S.SocialIconLink href="https://t.me/hripsime_madoyan" target="_blank">
                                <Icon iconId={"telegram"}/>
                            </S.SocialIconLink>
                        </S.SocialItem>
                        <S.SocialItem>
                            <S.SocialIconLink href="" target="_blank">
                                <Icon iconId={"github"}/>
                            </S.SocialIconLink>
                        </S.SocialItem>
                        <S.SocialItem>
                            <S.SocialIconLink href="https:/google.com" target="_blank">
                                <Icon iconId={"linkedin"}/>
                            </S.SocialIconLink>
                        </S.SocialItem>
                    </S.SocialList>
                    <S.Copyright>@2025 Ripsime Madoyan</S.Copyright>

                </FlexWrapper>
            </Container>            
        </S.Footer>
    )
}