import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
    
    useEffect(()=>{
        console.log("cargo")
    },[])

    return (
        <>
            <NavigationBar />
            <Container as="main" className="py-4">
                {children}
            </Container>
            <footer className="bg-dark text-center text-light">
                <Container className="py-4">
                    <h2>&copy; Lucas Sebastian Cabrera</h2>
                    <p>2008-{new Date().getFullYear()}</p>
                    <p>All rights reserved.</p>
                </Container>
            </footer>
        </>
    )
}

export default Layout;