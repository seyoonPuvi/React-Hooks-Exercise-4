// Write your code here
import {useState} from 'react'
import {
  Container,
  LeftContainer,
  RightContainer,
  Heading,
  CreditCardContainer,
  CardNumber,
  NameContainer,
  Name,
  InputContainer,
  SubHeading,
  Input,
  Text,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setNumber] = useState('')
  const [cardName, setName] = useState('')

  const onSetCardNumber = event => setNumber(event.target.value)
  const onSetCardName = event => setName(event.target.value)

  return (
    <Container>
      <LeftContainer>
        <Heading>CREDIT CARD</Heading>
        <CreditCardContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <NameContainer>
            <Text>CARDHOLDER NAME</Text>
            <Name>{cardName.toUpperCase()}</Name>
          </NameContainer>
        </CreditCardContainer>
      </LeftContainer>
      <RightContainer>
        <InputContainer>
          <SubHeading>Payment Method</SubHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onSetCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onSetCardName}
          />
        </InputContainer>
      </RightContainer>
    </Container>
  )
}

export default CreditCard
