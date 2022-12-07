import PropTypes from "react"
import Header from "./Header";

const Page = ({children, cool}) => {
    return(
        <>
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