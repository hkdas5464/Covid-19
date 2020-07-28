import React,{ useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Tabledata from '../CoronaTable';

import Nav from 'react-bootstrap/Nav';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../Darkmode/theme';
import { GlobalStyles } from '../Darkmode/global';

function App(){
  const [theme, setTheme] = useState('light');
  const [header , setHeader] = useState('light');
  const [buttonname,setButtonName] = useState('Light Mode');
  const [buttonColor,setButtonColor] = useState('btn btn-dark');
  const toggleTheme = () => {
    if (header === 'light') {
      setHeader('dark');
    } else {
      setHeader('light');
    }
    if (buttonname === 'Light Mode') {
      setButtonName('Dark Mode');
    } else {
      setButtonName('Light Mode');
    }
    ///////////////////////////////////////////
    if (buttonColor === 'btn btn-dark') {
      setButtonColor('btn btn-light');
    } else {
      setButtonColor('btn btn-dark');
    }
    ////////////////////////////////////////////////

    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }


    return(
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <div>
        
            <Navbar  bg={header} expand="lg" variant={header}>
  <Navbar.Brand href="#home">COVID-19 INDIA</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
     
    </Nav>
    <GlobalStyles />
    <Button className={buttonColor} onClick={toggleTheme}>{buttonname}</Button>
    
  </Navbar.Collapse>
</Navbar>
        </div>
        
        </>
        </ThemeProvider>
    )
}
export default App