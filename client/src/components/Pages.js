import React from 'react'
import { connect } from 'react-redux'
import { getLatestPages, getCharsPerLine } from '../redux/selectors'
import '../styles/Pages.css'
import Page from './Page'

export default connect(
  state => ({
    pages: getLatestPages(state.pages, 24),
    activePage: getLatestPages(state.pages, 1).pop(),
    width: state.pages.width,
    charsPerLine: getCharsPerLine(state.pages),
  }),
  null
)(props => {
  let { width, charsPerLine } = props

  const pageStyle = {
    width: `${ width }px`
  }

    return <div className="Pages" style={pageStyle}>
      {
        props.pages
          .map((page, i) =>
          <Page
            offset={
              i == 0 ?
                page.offset % charsPerLine:
                0
            }
            content={page.content}
            latest={page.id == props.activePage.id}
            key={i}>
          </Page>
        )
      }
    </div>
  }
)
