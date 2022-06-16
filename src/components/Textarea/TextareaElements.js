import styled from "styled-components"
import { NavBtnLink } from "../Navbar/NavbarElements"

export const Textwrapper = styled.div`
    max-width: 90vw;
    width: 800px;
    margin: 0px auto;
    padding: 90px 0 ${({padBottom}) => padBottom} 0;
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
    padding: ${(props) => {
        return("4px")
        }};

    &:focus{
        outline: none !important;
        border: 2px solid #15cdfc;
    }
`

export const TextareaBtn = styled(NavBtnLink)`
    margin: 20px 6px;
    width: 110px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #215ab8;
        color: #fff;
    }
`

export const Strong = styled.strong`
    color: #215ab8;
    font-size: 1.1rem;
`