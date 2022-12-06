import Document, { Html } from 'next/document'
import {HTML,Head, NextScript, Main} from 'next/document'

export default class MyDocument extends Document{
render () {
    return(
    <Html lang='en'>
        {/* <Head></Head> */}
        <body>
        <Main  />
        <NextScript  />
        </body>
    </Html>
    )
}
}