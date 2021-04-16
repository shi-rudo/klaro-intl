import * as React from "react"
import {Helmet} from "react-helmet";
import {useIntl} from "gatsby-plugin-react-intl"

// styles
const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

// markup
const IndexPage = () => {

    // I18n
    const intl = useIntl()
    const locale = intl.locale
    const localizedTitle = intl.formatMessage({id: "title"})
    
    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: `${locale}`,
                }}
            />
            <main style={pageStyles}>
                <title>Home Page</title>

                <h1 style={headingStyles}>
                    {localizedTitle}
                </h1>

                <p>
                    <a href={'/en/'}>Show english version</a> <br/>
                    <a href={'/de/'}>Zeige deutsche Version</a>
                </p>

            </main>
        </>
)
}

export default IndexPage
