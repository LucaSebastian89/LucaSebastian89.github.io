import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import ClassNames from 'classnames';

const Layout = ({ children, footer = true, dark = false, title }) => {

    const router = useRouter();
    
    useEffect(()=>{

        const handleRouteChange = url => {
            console.log(url)
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => NProgress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    },[])

    return (
        <div className={ClassNames({'bg-dark': dark})}>
            <NavigationBar />
            <Container as="main" className="py-4">
                {title && (
                    <h1 className={ClassNames('text-center', {'text-light': dark})}>{title}</h1>
                )}
                {children}
            </Container>
            {
                footer && (
                    <footer className="bg-dark text-center text-light">
                        <Container className="py-4">
                            <h2>&copy; Lucas Sebastian Cabrera</h2>
                            <p>2008-{new Date().getFullYear()}</p>
                            <p>All rights reserved.</p>
                        </Container>
                    </footer>
                )
            }
            
        </div>
    )
}

export default Layout;