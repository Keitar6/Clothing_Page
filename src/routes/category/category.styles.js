import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
export const CategoryTitle = styled("h1")`
  font-size: 35px;
  margin-bottom: 25px;
  text-align: center;
  border-bottom: 1px solid rgb(209, 208, 208);
`;
