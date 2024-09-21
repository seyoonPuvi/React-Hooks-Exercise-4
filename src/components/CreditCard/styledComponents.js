// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: whitesmoke;
  display: flex;
`

export const LeftContainer = styled.div`
  width: 50%;
  background-color: #3b4b69;
  height: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:2rem 3rem;

  row-gap:25rem;
`

export const Heading = styled.h1`
  font-size: 3rem;
  color: white;
  border-bottom: 3px solid #ffd773;
  text-align: center;
  padding-bottom: 5px;
  font-weight: bold;
`

export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-position: center;
  height: 28rem;
  width: 42rem;
  border-radius: 10%;
  padding: 2rem 2rem;
  display:flex;
  flex-direction:column;
  justify-content:space-around;


`

export const CardNumber = styled.p`
  font-size: 3rem;
  color: white;
  height:3rem;
  word-break:break-all;
`

export const NameContainer = styled.div`
display:flex;
flex-direction:column;
row-gap:1.5rem;
height:6rem;
`

export const Text = styled(CardNumber)`
  font-size: 1.5rem;
  font-weight:400;
`

export const Name = styled.p`
  font-size: 1.6rem;
  color: white;
   word-wrap:break;
`

export const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items:center;
  row-gap: 2.5rem;
  width: 30rem;
  height:20rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const SubHeading = styled.h1`
  font-size: 1.8rem;
  color: darkblue;
  font-weight: bold;
  text-align:center;
`

export const Input = styled.input`
  height: 4rem;
  width: 90%;
  border: 0.5px solid grey;
  outline: none;
  color: grey;
  padding-left:2rem;

`
