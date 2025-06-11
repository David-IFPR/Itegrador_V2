import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const TelaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f3f3;
`;

const Card = styled.div`
  background-color: white;
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 350px;
  position: relative;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin: 10px 0 20px;
  font-size: 22px;
  font-weight: bold;
  color: #007bff;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;

const TopText = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 12px;
  color: #ccc;
`;

export default function Esqueceu_senha() {
    return (
        <TelaStyled>
            <TopText>Enviar código</TopText>
            <Card>
                <BackLink to="/">
                    <FiArrowLeft size={15} />
                    Voltar início
                </BackLink>
                <Title>ENVIAR CÓDIGO</Title>
                <Label>Digite seu e-mail</Label>
                <Input type="email" placeholder="Digite seu e-mail" />
                <Button>Enviar link de recuperação</Button>
            </Card>
        </TelaStyled>
    );
}
