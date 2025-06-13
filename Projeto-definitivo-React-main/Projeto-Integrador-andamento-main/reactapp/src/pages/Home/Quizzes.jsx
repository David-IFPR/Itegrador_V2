import styled from "styled-components";
import { FaFilter, FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: #007bff;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SidebarTitle = styled.h3`
  color: white;
  margin-bottom: 30px;
`;

const SidebarButton = styled.button`
  background-color: ${(props) => (props.active ? "#e6f4ff" : "#0056b3")};
  border: ${(props) => (props.active ? "2px solid #00ccff" : "none")};
  color: ${(props) => (props.active ? "#007bff" : "white")};
  border-radius: 10px;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #3399ff;
  }
`;

const Content = styled.div`
  flex: 1;
  background-color: #f7f7f7;
  padding: 30px;
`;

const Title = styled.h2`
  color: #007bff;
`;

const SubTitle = styled.h4`
  margin-top: 10px;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const QuizButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const TableHead = styled.thead`
  background-color: #00aaff;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f0f0f0;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

export default function QuizzesPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Sidebar>
        <SidebarTitle>DevQuiz Adm</SidebarTitle>
        <SidebarButton onClick={() => navigate("/home/Tela")}>Home</SidebarButton>
        <SidebarButton active onClick={() => navigate("##LOL##")}>Quizzes</SidebarButton>
        <SidebarButton onClick={() => navigate("/home/Certificados")}>Certificados</SidebarButton>
        <SidebarButton onClick={() => navigate("/home/Ranking")}>Ranking</SidebarButton>
        <SidebarButton onClick={() => navigate("/home/Perfil")}>Perfil</SidebarButton>
      </Sidebar>
      <Content>
        <Title>Meus quizzes</Title>
        <ActionBar>
          <QuizButton>
            <FaClipboardList /> Realizar Quiz
          </QuizButton>
          <FilterSection>
            <span>Filtrar por:</span>
            <FaFilter />
            <Select>
              <option>Pontuação</option>
              <option>Nível</option>
            </Select>
          </FilterSection>
        </ActionBar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Disciplina/Categoria</TableCell>
              <TableCell>Pontuação</TableCell>
              <TableCell>Nível</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Des. Web II - Básico</TableCell>
              <TableCell>Desenvolvimento Web</TableCell>
              <TableCell>200</TableCell>
              <TableCell>Iniciante</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Prog. Web I</TableCell>
              <TableCell>Desenvolvimento Web</TableCell>
              <TableCell>400</TableCell>
              <TableCell>Mediano</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
