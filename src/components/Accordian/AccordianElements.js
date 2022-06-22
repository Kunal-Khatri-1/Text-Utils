import styled from "styled-components";

export const AccordianWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
  padding: 50px 0px;
  height: auto;
  width: 100vw;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    &{
      padding: 40px 0px;
    }    
  }
`;

export const AccordianDiv = styled.div`
  width: 500px;

  @media screen and (max-width: 760px) {
    &{
      max-width: 90vw;
    }

    & h2 {
      font-size: 1rem;
    }

    & p {
      font-size: 0.7rem;
    }
  }
`;

export const Item = styled.div`
  box-shadow: 4px 4px 4px #256ce1;
  background-color: whitesmoke;
  margin-bottom: 15px;
  padding: 20px 20px;
  border-radius: 4px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover h2 {
    color: #256ce1;
  }

  &:hover span {
    color: #256ce1;
  }

  &.show {
    color: #256ce1;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const Content = styled.p`
  &.content {
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }

  &.show {
    height: auto;
    max-height: 9999px;
    margin-top: 20px;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }
`;
