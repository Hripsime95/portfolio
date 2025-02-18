import { styled } from "styled-components"

const Contacts = styled.section.attrs((props) => ({
    id: props.id,
  }))`
      min-height: 50vh;
  `
  
const Form = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

export const S = {
    Contacts,
    Form
}