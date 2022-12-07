import PropTypes from "react"
import { createGlobalStyle } from "styled-components";
import Header from "./Header";


const GlobalStyles = createGlobalStyle`
-@font-face{
    font-famil:'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2);
    font-weight:normal;
    font-style:normal;
}

html{
    --red: #ff0000;
    --black:#393939;
    --grey: #3A3A3A;
    --gray:var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray:var(---lightGray);
    --offWhite: #ededed;
    --maxWidth:1000px;
    --bs:'0 12px 24px 0 rgba(0,0,0,0.0.9);

}

body{
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont,'Segoe UI',Roboto, Oxygen,Ubuntu,Cantarell,'Open Sans', 'Helvetica Neue', sans-serif
}
`;


const Page = ({children, cool}) => {
    return(
        <>
        <GlobalStyles  />
        <Header/>
        <h2>Im the page component!!!! </h2>
        {children}
        {cool}
        </>
    )
}
export default Page

Page.ReactPropTypes = {
    cool:PropTypes.string,
    children:PropTypes.any,
};