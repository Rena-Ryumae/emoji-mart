import React from 'react'
import PropTypes from 'prop-types'

import { NimbleEmoji } from '.'

export default class Skins extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log("skins")
    console.log(props)
    this.state = {
      opened: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    var skin = parseInt(e.currentTarget.getAttribute('data-skin'))
    var { onChange } = this.props

    if (!this.state.opened) {
      console.log("opened")
      this.setState({ opened: true })
    } else {
      console.log("closed")
      this.setState({ opened: false })
      if (skin != this.props.skin) {
        onChange(skin)
      }
    }
  }

  getSkinToneNodes() {
    const { emojiProps, data, skin, skinIcon } = this.props
    const skinToneNodes = []

    for (let i = 0; i < 6; i++) {
      const skinTone = i + 1
      const selected = skinTone == skin

      if (skinIcon) {
        skinToneNodes.push(
          <span
            key={`skin-tone-${skinTone}`}
            className={`emoji-mart-skin-swatch-custom ${
              selected ? 'emoji-mart-skin-swatch-custom-selected' : ''
            }`}
            onClick={this.handleClick}
            data-skin={skinTone}
          >
            {NimbleEmoji({
              emoji: skinIcon,
              data: data,
              skin: skinTone,
              backgroundImageFn: emojiProps.backgroundImageFn,
              native: emojiProps.native,
              set: emojiProps.set,
              sheetSize: emojiProps.sheetSize,
              size: emojiProps.size,
            })}
          </span>,
        )
      } else {
        skinToneNodes.push(
          <span
            key={`skin-tone-${skinTone}`}
            className={`emoji-mart-skin-swatch ${
              selected ? 'emoji-mart-skin-swatch-selected' : ''
            }`}
          >
            <span
              onClick={this.handleClick}
              data-skin={skinTone}
              className={`emoji-mart-skin emoji-mart-skin-tone-${skinTone}`}
            >
            </span>
          </span>,
        )
      }
    }

    return skinToneNodes
  }

  render() {
    const {  emojiProps, data, skin, skinIcon } = this.props
    const { opened } = this.state
    const skinToneNodes = []

    for (let i = 0; i < 6; i++) {
      const skinTone = i + 1
      const selected = skinTone == skin

      if (skinIcon) {
        skinToneNodes.push(
          <span
            key={`skin-tone-${skinTone}`}
            className={`emoji-mart-skin-swatch-custom ${
              selected ? 'emoji-mart-skin-swatch-custom-selected' : ''
            }`}
            onClick={this.handleClick}
            data-skin={skinTone}
          >
            <span
              onClick={this.handleClick}
              data-skin={skinTone}
              className={`emoji-mart-skin-tone${skinTone}`}
            >
              {NimbleEmoji({
                emoji: skinIcon,
                data: data,
                skin: skinTone,
                backgroundImageFn: emojiProps.backgroundImageFn,
                native: emojiProps.native,
                set: emojiProps.set,
                sheetSize: emojiProps.sheetSize,
                size: emojiProps.size,
              })}
            </span>
          </span>,
        )
      } else {
        skinToneNodes.push(
          <span
            key={`skin-tone-${skinTone}`}
            className={`emoji-mart-skin-swatch ${
              selected ? 'emoji-mart-skin-swatch-selected' : ''
            }`}
          >
            <span
              onClick={this.handleClick}
              data-skin={skinTone}
              className={`emoji-mart-skin emoji-mart-skin-tone-${skinTone}`}
            >
            </span>
          </span>,
        )
      }
    }

    if (skinIcon) {
      return (
        <div>
          <div
            className={`emoji-mart-skin-swatches-custom ${
              opened ? 'emoji-mart-skin-swatches-custom-opened' : ''
            }`}
          >
            {skinToneNodes}
          </div>
        </div>
      )
    }

    return (
      <div>
        <div
          className={`emoji-mart-skin-swatches ${
            opened ? 'emoji-mart-skin-swatches-opened' : ''
          }`}
        >
          {skinToneNodes}
        </div>
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
