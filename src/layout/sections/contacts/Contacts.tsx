import React, { useRef } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { ButtonLink } from "../../../components/ButtonLink";
import { Container } from "../../../components/Container";
import { InputField } from "../../../components/inputField/InputField";
import { S } from "./ConstactsStyles";
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {
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
        <S.Contacts id="contact">
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <InputField id="name" label="Your Name:" name="name"/>
                    <InputField id="email" label="Your Email Address:" name="email"/>
                    <InputField id="message" type="textarea" label="Tell about the project..." name="message"/>
                    <ButtonLink as="button" type="submit">Send message</ButtonLink>
                </S.Form>
            </Container>
        </S.Contacts>
    )
}