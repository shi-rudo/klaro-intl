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
                
                <iframe
                    title={"youtube test"}
                    width="560"
                    height="315"
                    data-name="demo-youtube"
                    data-src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    frameBorder="0"
                    allow="accelerometer;
                           autoplay;
                           clipboard-write;
                           encrypted-media;
                           gyroscope;
                           picture-in-picture"
                    allowFullScreen>
                </iframe>

                <div data-name="demo-twitter">
                    <a
                        href="https://twitter.com/kiprotect?ref_src=twsrc%5Etfw"
                        className="twitter-follow-button"
                        data-show-count="false">Follow @kiprotect</a>
                </div>
                <script
                    data-type="application/javascript"
                    async
                    data-name="demo-twitter"
                    data-src="https://platform.twitter.com/widgets.js"
                    charSet="utf-8">
                </script>

            </main>
        </>
)
}

export default IndexPage
