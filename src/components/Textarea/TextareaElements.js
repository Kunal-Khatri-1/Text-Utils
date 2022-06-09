import styled from "styled-components"

export const Textwrapper = styled.div`
    max-width: 90vw;
    width: 800px;
    margin: 80px auto ${(props) => props.marginBottom} auto;
`

export const TextHeading = styled.h1`
    margin-bottom: 20px;
`

export const Text = styled.textarea`
    width: 100%;
    max-width: 800px;
    height: 290px;
    resize: vertical;
    border-radius: 2px;
    padding: 4px;

    &:focus{
        outline: none !important;
        border: 2px solid #15cdfc;
    }
`

export const TextareaBtn = styled.button`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    margin-top: 30px;
    margin-left: 1rem;
    margin-right: 1rem;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #215ab8;
        color: #fff;
    }
`

export const Strong = styled.strong`
    color: #215ab8;
    font-size: 1.3rem;
`