import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'
import { colors } from 'utils/colors'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const title = DocumentTitle.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
	  <link rel="author" href="https://plus.google.com/+RickRamstetter" />
	  <script type="application/ld+json"
dangerouslySetInnerHTML={{
        __html:
`
{
"@context": "http://schema.org/",
"@type": "Organization",
"name" : "J. Rick Ramstetter / Anteater LLC",
"alternateName" : "GNU/Linux software engineer in Vancouver, WA, USA",
"email" : "rick@anteaterllc.com",
"url": "https://ramsteter.org",
"logo": "https://ramstetter.org/_static/anteaterllc-logo.jpg",
"image" : "https://ramstetter.org/_static/rick-ramstetter.jpg",

"address": {
	"@type": "PostalAddress",
	"addressLocality": "Vancouver, WA",
	"postalCode": "98683",
	"streetAddress": "305 SE Chkalov Dr Suite 111 PMB 414"
},

"member" : [
	{
	"@type" : "Person",
	"name" : "Erica Ramstetter",
	"email" : "erica@anteaterllc.com",
	"sameAs": "https://www.linkedin.com/in/ericaramstetter" 
	},
	{
	"@type" : "Person",
	"name" : "J. Rick Ramstetter",
	"email" : "rick@anteaterllc.com",
	"sameAs": [
		"https://angel.co/ut3",
		"https://github.com/ut3",
		"https://linkedin.com/in/jramstet/",
		"https://plus.google.com/+RickRamstetter/",
		"http://paul.rutgers.edu/~jramstet/"
	]
	}
],

"contactPoint" : [
	{
	"@type" : "ContactPoint",
	"name" : "Erica Ramstetter",
	"email" : "erica@anteaterllc.com",
	"contactType" : "Business Development"
	},
	{
	"@type" : "ContactPoint",
	"name" : "J. Rick Ramstetter",
	"email" : "rick@anteaterllc.com",
	"contactType" : "Principal Engineer"
	}
]
}
`,
}}
	    />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
          <style
            dangerouslySetInnerHTML={{
              __html:
                `
                  a {
                    color: ${colors.bg};
                  }
                `,
            }}
          />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})
