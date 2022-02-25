import React from 'react'
import { Button, Container, Left, Logo, Menu, MenuItem, Wrapper } from './navbarStyle'

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Agency</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
            </Left>
            <Button>JOIN TODAY</Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar