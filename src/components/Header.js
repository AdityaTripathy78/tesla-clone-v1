import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

    const [ menuStatus, setMenuStatus] = useState(false);
    const cars = useSelector(selectCars)
    console.log(cars);

    return (
        <Container>
           <a>
               <img src="/images/logo.svg" alt="" />
           </a>
           <Menu>
               {cars && cars.map((car,index) =>(
                   <a key={index} href = "#">{car}</a>
               ))}
                {/* <a href = "#">Model S</a>
                 <a href = "#">Model 3</a>
                <a href = "#">Model X</a>
                <a href = "#">Model Y</a> */}
           </Menu>
           <RightMenu>
               <a href="#">Shop</a>
               <a href="#">Tesla Account</a>
               <IconButton>
                   <CustomMenu onClick = {() => setMenuStatus(true) } />
               </IconButton>
           </RightMenu>
           
           <ModelStack show={menuStatus}>
               <CloseWrapper>
                   <IconButton>
                    <CustomClose onClick = {() => setMenuStatus(false) } />
                    </IconButton>
                </CloseWrapper>
                {cars && cars.map((car,index) =>(
                   <li><a key={index} href = "#">{car}</a></li>
               ))}
                <li><a href = "#">Existing Inventory</a></li>
                <li><a href = "#">Used Inventory</a></li>
                <li><a href = "#">Trade-in</a></li>
                <li><a href = "#">Cybertruck</a></li>
                <li><a href = "#">Roadaster</a></li>

           </ModelStack>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding : 0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex:1;
    justify-content:center;
    
    a{
        font-weight :600;
        text-transform:uppercase;
        padding: 0 10px;
        flex-wrap:nowrap;

    }

    @media (max-width: 768px) {
        display:none;
        
    }

`
const RightMenu = styled.div`
        display: flex;
        align-items: center;
    a{
        font-weight :600;
        text-transform:uppercase;
        padding:10px;
        

    }
`
const CustomMenu = styled(MenuIcon)`
        cursor:pointer;
`
const ModelStack = styled.div`
    position : fixed;
    top : 0;
    bottom:0;
    right: 0;
    background-color:white;
    width:300px;
    list-style:none;
    padding:20px;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding:15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);

        a{
            font-weight:600;
        }
    }
`
const CustomClose = styled(CloseIcon)`
    cursor:pointer;
    
`

const CloseWrapper= styled.div`
    display: flex;
    justify-content:flex-end;
`
