import Page from "../components/Page";
import NProgress from "nprogress";
import Router from "next/router"
import "../components/styles/nprogress.css";
// TODO: SWAP WITH OUR OWN
import 'nprogress/nprogress.css';


Router.events.on('routeChangeStart', () =>NProgress.start());
Router.events.on('routeChangeComplete', () =>NProgress.done());
Router.events.on('routeChangeError', () =>NProgress.done());

const MyApp = ({Component,pageProps}) => {
    return(
        <Page>
           <Component {...pageProps}  />
        </Page>

    )
} 
export default MyApp