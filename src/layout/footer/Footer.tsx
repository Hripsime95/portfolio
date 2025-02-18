// import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { Theme } from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction="column" align="center">
                    <Name>My social links</Name>
                    <SocialList>
                        <SocialItem>
                            <SocialIconLink href="" target="_blank">
                                <Icon iconId={"instagram"}/>
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink href="" target="_blank">
                                <Icon iconId={"telegram"}/>
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink href="" target="_blank">
                                <Icon iconId={"github"}/>
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink href="" target="_blank">
                                <Icon iconId={"linkedin"}/>
                            </SocialIconLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright>@2025 Ripsime Madoyan</Copyright>

                </FlexWrapper>
            </Container>            
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    min-height: 20vh;
`

const Name = styled.span`
    font-size: 12px;
    margin: 10px 0;
    color: ${Theme.colors.accent}
`
const SocialList = styled.ul`
    display: flex;
    gap: 5px;
`

const SocialItem = styled.li`
    
`

const SocialIconLink = styled.a`
    /* cursor: pointer; */
`

const Copyright = styled.div`
    font-size: 10px;
    margin: 10px 0;
    color: ${Theme.colors.accent}
`