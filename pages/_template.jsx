import React from 'react'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import typography from 'utils/typography'
import { config } from 'config'

// Import styles.
import 'css/main.css'
import 'css/github.css'

const { rhythm, adjustFontSizeTo } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    const docsActive = includes(this.props.location.pathname, '/docs/')
    const examplesActive = includes(this.props.location.pathname, '/examples/')

    return (
      <div>
        <div
          style={{
            background: colors.bg,
            color: colors.fg,
            marginBottom: rhythm(1.5),
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingLeft: rhythm(3/4),
            }}
          >
            <Grid
              style={{
                padding: `${rhythm(3/4)} 0`,
              }}
            >
              <Span >
                <Link
                  to={prefixLink('/')}
                  style={{
                    textDecoration: 'none',
                    color: colors.fg,
                    fontSize: adjustFontSizeTo('25.5px').fontSize,
                  }}
                >
                  {config.siteTitle}
                </Link>
              </Span>
              <Span style={{marginRight:rhythm(1/3)}} last>
                <a
                  style={{
                    display: 'inline',
                    color: colors.fg,
                    marginLeft: rhythm(1/3),
                  }}
                  href="https://stackoverflow.com/users/1519371/rick-ramstetter" target="_blank"
                >
		<img src="/_static/stackoverflow.png" alt="Stackoverflow"/>
                </a>
 
		<a
                  style={{
                    color: colors.fg,
                    display: 'inline',
                    marginLeft: rhythm(1/3),
                  }}
                  href="https://linkedin.com/in/jramstet" target="_blank"
                >
		<img src="/_static/linkedin.png" alt="LinkedIn"/>
                </a>
                <a
                  style={{
                    display: 'inline',
                    color: colors.fg,
                    marginLeft: rhythm(1/3),
                  }}
                  href="https://github.com/ut3" target="_blank"
                >
		<img src="/_static/github.png" alt="Github"/>
                </a>
                </Span>
                <Span style={{float: 'right'}}> 
                <Link
                  to={prefixLink('/services/')}
style={{
                    background: examplesActive ? activeColors.bg : colors.bg,
                    color: examplesActive ? activeColors.fg : colors.fg,
                    display: 'inline-block',
                    textDecoration: 'none',
                    marginTop: 0,
                    marginLeft: 0,
                    marginBottom: 0,
                    marginRight: rhythm(3/4),
                    padding: 0,
                  }}
                >
                  Services
                </Link>
                <Link
                  to={prefixLink('/open-source/')}
                  style={{
                    background: examplesActive ? activeColors.bg : colors.bg,
                    color: examplesActive ? activeColors.fg : colors.fg,
                    display: 'inline-block',
                    textDecoration: 'none',
                    marginTop: 0,
                    marginLeft: 0,
                    marginBottom: 0,
                    marginRight: rhythm(3/4),

                    padding: 0,
                  }}
                >
                Open Source
                </Link>
                <Link
                  to={prefixLink('/about/')}
                  style={{
                    background: examplesActive ? activeColors.bg : colors.bg,
                    color: examplesActive ? activeColors.fg : colors.fg,
                    display: 'inline-block',
                    textDecoration: 'none',
                     marginTop: 0,
                    marginLeft: 0,
                    marginBottom: 0,
                    marginRight: rhythm(3/4),

                   padding: 0,

                  }}
                >
                 About
                </Link>

                <Link
                  to={prefixLink('/contact/')}
                  style={{
                    background: examplesActive ? activeColors.bg : colors.bg,
                    color: examplesActive ? activeColors.fg : colors.fg,
                    display: 'inline-block',
                    textDecoration: 'none',
                      marginTop: 0,
                    marginLeft: 0,
                    marginBottom: 0,
                    marginRight: rhythm(3/4),

                  padding: 0,    
                  }}
                >
                Contact
                </Link>


             </Span>
            </Grid>
          </Container>
        </div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
