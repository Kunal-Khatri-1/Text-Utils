import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 70px);
  width: 100vw;
  justify-content: center;
  align-items: center;
`

export const AccordianDiv = styled.div`
  width: 500px;
`

export const Item = styled.div`
  background-color: #e9e9e9;
  margin-bottom: 10px;
  padding: 20px 20px;
  border-radius: 4px;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover{
    color: #215ab8;
  }

  &.show{
    color: #215ab8;
  }

  span{
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const Content = styled.div`

  &.content{
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }

  &.show{
    height: auto;
    max-height: 9999px;
    margin-top: 20px;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }
`