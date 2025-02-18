// import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { ButtonLink } from "../../../components/ButtonLink";
import { Container } from "../../../components/Container";
import { InputField } from "../../../components/inputField/InputField";
import emailjs from '@emailjs/browser';
import { useRef } from "react";


export const Contacts = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

    if(!form.current) return;   
    
    const formData = new FormData(form.current);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    emailjs
      .sendForm('service_uuv3ou5', 'template_wxmaecp', form.current, {
        publicKey: 'GFqYW5uGyJwSrOR_0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <InputField id="name" label="Your Name:" name="name"/>
                    <InputField id="email" label="Your Email Address:" name="email"/>
                    <InputField id="message" type="textarea" label="Tell about the project..." name="message"/>
                    <ButtonLink as="button" type="submit">Send message</ButtonLink>
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