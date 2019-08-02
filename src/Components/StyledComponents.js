import styled from "styled-components";


export const CopyrightButtonContainer = styled.div`
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
  color: #112D32;
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 50px;
  text-align: justify;
  text-justify: inter-word;
  padding-bottom: 30px;
  font-size: 1.3rem;
  color: #112D32;
  @media (max-width: 500px) {
    width: 90%;
  }
`;