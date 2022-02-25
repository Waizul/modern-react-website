import styled from "styled-components";

export const Container = styled.div`
height: 50px;
`
export const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Left = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Logo = styled.span`
font-weight: bold;
text-decoration: underline crimson;
`
export const Menu = styled.ul`
display: flex;
list-style: none;

@media only screen and (max-width:480px) {
    display: none;
}
`
export const MenuItem = styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;
`
export const Button = styled.button`
color: white;
background-color: crimson;
font-weight: bold;
padding: 10px 15px;
border: 2px solid white;
border-radius: 10px;
cursor: pointer;
`
