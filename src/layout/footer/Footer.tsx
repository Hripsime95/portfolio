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
                    <Name>Svetlana</Name>
                    <SocialList>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon iconId={"instagram"}/>
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon iconId={"telegram"}/>
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon iconId={"vk"}/>
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon iconId={"linkedin"}/>
                            </SocialIconLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright>@esim inch</Copyright>
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
    
`
const SocialList = styled.ul`
    display: flex;
`

const SocialItem = styled.li`
    
`

const SocialIconLink = styled.a`

`

const Copyright = styled.small`

`