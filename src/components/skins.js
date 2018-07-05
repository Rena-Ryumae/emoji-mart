import React from 'react'
import PropTypes from 'prop-types'

import { NimbleEmoji } from '.'

export default class Skins extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    var skin = parseInt(e.currentTarget.getAttribute('data-skin'))
    var { onChange } = this.props

    if (!this.state.opened) {
      this.setState({ opened: true })
    } else {
      this.setState({ opened: false })
      if (skin != this.props.skin) {
        onChange(skin)
      }
    }
  }

  render() {
    const {  emojiProps, data, skin, skinIcon } = this.props
    const { opened } = this.state
    const skinToneNodes = []

    for (let skinTone = 1; skinTone <= 6; skinTone++) {
      const selected = skinTone === skin
      skinToneNodes.push(
        <span
          key={`skin-tone-${skinTone}`}
          className={`emoji-mart-skin-swatch${
            selected ? ' selected' : ''
          }${
            skinIcon ? ' custom' : ''
            }`}
        >
          <span
            onClick={this.handleClick}
            data-skin={skinTone}
            className={`${ skinIcon ? '' : 'emoji-mart-skin'} emoji-mart-skin-tone-${skinTone}`}
          >
            {skinIcon ? NimbleEmoji({
              emoji: skinIcon,
              data: data,
              skin: skinTone,
              backgroundImageFn: emojiProps.backgroundImageFn,
              native: emojiProps.native,
              set: emojiProps.set,
              sheetSize: emojiProps.sheetSize,
              size: emojiProps.size,
            }) : null}
          </span>
        </span>
      )
    }


    return (
        <div
          className={`emoji-mart-skin-swatches${
            opened ? ' opened' : ''
          }${
            skinIcon ? ' custom' : ''
           }`}
        >
          {skinToneNodes}
        </div>
    )
  }
}

Skins.propTypes = {
  onChange: PropTypes.func,
  skin: PropTypes.number.isRequired,
}

Skins.defaultProps = {
  onChange: () => {},
}
