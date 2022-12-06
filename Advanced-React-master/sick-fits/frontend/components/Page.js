import PropTypes from "react"

const Page = ({children, cool}) => {
    return(
        <>
        <h2>Im the page component </h2>
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