// import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { ButtonLink } from "../../../components/ButtonLink";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import { InputField } from "../../../components/inputField/InputField";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <InputField id="name" label="Your Name:"/>
                    <InputField id="email" label="Your Email Address:"/>
                    <InputField id="message" type="textarea" label="Tell about the project..."/>
                    <ButtonLink type="submit">Send message</ButtonLink>
                </StyledForm>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    min-height: 50vh;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`