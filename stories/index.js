import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select, color } from '@storybook/addon-knobs';

import { Picker, Emoji, emojiIndex } from '../dist';
import '../css/emoji-mart.css';

const SETS = ['apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook']
const CUSTOM_EMOJIS = [
  {
    name: 'Octocat',
    short_names: ['octocat'],
    keywords: ['github'],
    imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7'
  },
  {
    name: 'Squirrel',
    short_names: ['shipit', 'squirrel'],
    keywords: ['github'],
    imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/shipit.png?v7'
  }
]

storiesOf('Picker', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Picker
      onClick={action('clicked')}
      onSelect={action('selected')}
      onSkinChange={action('skin changed')}
      native={boolean('Unicode', true)}
      set={select('Emoji pack', SETS, SETS[0])}
      emojiSize={number('Emoji size', 24)}
      perLine={number('Per line', 9)}
      title={text('Idle text', 'Your Title Here')}
      emoji={text('Idle emoji', 'department_store')}
      defaultSkin={number('Default skin tone', 1)}
      color={color('Highlight color', '#ae65c5')}
      showPreview={boolean('Show preview', true)}
      showSkinTones={boolean('Show skin tones', true)}
      custom={CUSTOM_EMOJIS}
    />))
    .add('custom-svg', () => (
      <Picker
        onClick={action('clicked')}
        onSelect={action('selected')}
        onSkinChange={action('skin changed')}
        native={boolean('Unicode', true)}
        set={select('Emoji pack', SETS, SETS[0])}
        emojiSize={number('Emoji size', 24)}
        perLine={number('Per line', 9)}
        title={text('Idle text', 'Your Title Here')}
        emoji={text('Idle emoji', 'department_store')}
        defaultSkin={number('Default skin tone', 1)}
        color={color('Highlight color', '#ae65c5')}
        showPreview={boolean('Show preview', true)}
        showSkinTones={boolean('Show skin tones', true)}
        custom={CUSTOM_EMOJIS}
        iconFns={
          {
            categories: {
              // All SVG icons listed here were taken from https://simpleicons.org/ as proof of concept
              recent: (size) =>
                `<img src='https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7' style="width:${size}px;height:${size}px;"/>`,
              people: (size) =>
                `<svg aria-labelledby="simpleicons-reddit-icon" role="img" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-reddit-icon">Reddit icon</title><path d="M2.204 14.049c-.06.276-.091.56-.091.847 0 3.443 4.402 6.249 9.814 6.249 5.41 0 9.812-2.804 9.812-6.249 0-.274-.029-.546-.082-.809l-.015-.032c-.021-.055-.029-.11-.029-.165-.302-1.175-1.117-2.241-2.296-3.103-.045-.016-.088-.039-.126-.07-.026-.02-.045-.042-.067-.064-1.792-1.234-4.356-2.008-7.196-2.008-2.815 0-5.354.759-7.146 1.971-.014.018-.029.033-.049.049-.039.033-.084.06-.13.075-1.206.862-2.042 1.937-2.354 3.123 0 .058-.014.114-.037.171l-.008.015zm9.773 5.441c-1.794 0-3.057-.389-3.863-1.197-.173-.174-.173-.457 0-.632.176-.165.46-.165.635 0 .63.629 1.685.943 3.228.943 1.542 0 2.591-.3 3.219-.929.165-.164.45-.164.629 0 .165.18.165.465 0 .645-.809.808-2.065 1.198-3.862 1.198l.014-.028zm-3.606-7.573c-.914 0-1.677.765-1.677 1.677 0 .91.763 1.65 1.677 1.65s1.651-.74 1.651-1.65c0-.912-.739-1.677-1.651-1.677zm7.233 0c-.914 0-1.678.765-1.678 1.677 0 .91.764 1.65 1.678 1.65s1.651-.74 1.651-1.65c0-.912-.739-1.677-1.651-1.677zm4.548-1.595c1.037.833 1.8 1.821 2.189 2.904.45-.336.719-.864.719-1.449 0-1.002-.815-1.816-1.818-1.816-.399 0-.778.129-1.09.363v-.002zM2.711 9.963c-1.003 0-1.817.816-1.817 1.818 0 .543.239 1.048.644 1.389.401-1.079 1.172-2.053 2.213-2.876-.302-.21-.663-.329-1.039-.329v-.002zm9.217 12.079c-5.906 0-10.709-3.205-10.709-7.142 0-.275.023-.544.068-.809C.494 13.598 0 12.729 0 11.777c0-1.496 1.227-2.713 2.725-2.713.674 0 1.303.246 1.797.682 1.856-1.191 4.357-1.941 7.112-1.992l1.812-5.524.404.095s.016 0 .016.002l4.223.993c.344-.798 1.138-1.36 2.065-1.36 1.229 0 2.231 1.004 2.231 2.234 0 1.232-1.003 2.234-2.231 2.234s-2.23-1.004-2.23-2.23l-3.851-.912-1.467 4.477c2.65.105 5.047.854 6.844 2.021.494-.464 1.144-.719 1.833-.719 1.498 0 2.718 1.213 2.718 2.711 0 .987-.54 1.886-1.378 2.365.029.255.059.494.059.749-.015 3.938-4.806 7.143-10.72 7.143l-.034.009zm8.179-19.187c-.74 0-1.34.599-1.34 1.338 0 .738.6 1.34 1.34 1.34.732 0 1.33-.6 1.33-1.334 0-.733-.598-1.332-1.347-1.332l.017-.012z"/></svg>`,
              nature: (size) =>
                `<svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon">GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
              foods: (size) =>
                `<svg aria-labelledby="simpleicons-jira-icon" role="img" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-jira-icon">Jira icon</title><path d="M23.323 11.33L13.001 1 12 0 4.225 7.775.67 11.33a.96.96 0 0 0 0 1.347l7.103 7.103L12 24l7.771-7.771.121-.121 3.431-3.431a.945.945 0 0 0 0-1.347zM12 15.551L8.449 12 12 8.453 15.548 12 12 15.551z"/></svg>`,
              activity: (size) =>
                `<img src='https://assets-cdn.github.com/images/icons/emoji/shipit.png?v7' width="${size}" height="${size}"/>`,
              places: (size) =>
                `<svg aria-labelledby="simpleicons-stackoverflow-icon" role="img" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-stackoverflow-icon">Stack Overflow icon</title><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"/></svg>`,
              objects: (size) =>
                `<svg aria-labelledby="simpleicons-500px-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}"><title id="simpleicons-500px-icon">Atlassian icon</title><path d="M19.31 23.957H15.71a1.26 1.26 0 0 1-1.312-.792c-1.332-2.665-2.78-5.288-3.987-8.046a15.25 15.25 0 0 1 .885-14.47c.166-.281.52-.625.791-.625s.593.375.74.666q5.444 10.89 10.898 21.788c.542 1.041.292 1.468-.905 1.479zm-14.573 0H1.04c-1.041 0-1.27-.417-.812-1.333q2.8-5.538 5.549-11.055c.5-1.041.895-1.041 1.592-.177a12.221 12.221 0 0 1 2.51 11.17c-.344 1.322-.532 1.405-1.864 1.405z"/></svg>`,
              symbols: (size) =>
                `<svg aria-labelledby="simpleicons-hipchat-icon" role="img" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-hipchat-icon">HipChat icon</title><path d="M19.736 19.056s.103-.073.267-.198C22.46 16.958 24 14.203 24 11.139 24 5.424 18.627.787 12.003.787 5.377.787 0 5.424 0 11.139c0 5.717 5.371 10.356 11.998 10.356.847 0 1.694-.073 2.524-.228l.262-.045c1.683 1.092 4.139 1.99 6.288 1.99.665 0 .978-.546.552-1.104-.648-.795-1.541-2.068-1.888-3.052zm-1.462-4.526c-.716 1.069-2.934 2.889-6.254 2.889h-.046c-3.328 0-5.543-1.831-6.254-2.889a1.137 1.137 0 0 1-.273-.574.49.49 0 0 1 .447-.526c.008-.003.014-.003.021-.003.117.006.23.043.328.111a9.137 9.137 0 0 0 5.754 2.056 8.805 8.805 0 0 0 5.76-2.059.461.461 0 0 1 .313-.122c.267 0 .478.213.483.475a1.321 1.321 0 0 1-.268.643h-.011z"/></svg>`,
              flags: (size) =>
                `<svg aria-labelledby="simpleicons-instagram-icon" role="img" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-instagram-icon">Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>`,
              custom: (size) =>
                `<svg aria-labelledby="simpleicons-trello-icon" role="img" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-trello-icon">Trello icon</title><path d="M21 0H3C1.343 0 0 1.343 0 3v18c0 1.656 1.343 3 3 3h18c1.656 0 3-1.344 3-3V3c0-1.657-1.344-3-3-3zM10.44 18.18c0 .795-.645 1.44-1.44 1.44H4.56c-.795 0-1.44-.646-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44H9c.795 0 1.44.645 1.44 1.44v13.62zm10.44-6c0 .794-.645 1.44-1.44 1.44H15c-.795 0-1.44-.646-1.44-1.44V4.56c0-.795.646-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44v7.62z"/></svg>`,
            }
          }
        }
      />
  ));

storiesOf('Emoji', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Emoji
      native={boolean('Unicode', true)}
      set={select('Emoji pack', SETS, SETS[0])}
      emoji={text('Emoji', '+1')}
      size={number('Emoji size', 64)}
      skin={number('Skin tone', 1)}
      html={boolean('HTML', false)}
      fallback={(emoji) => {
        return `:${emoji.short_names[0]}:`
      }}
    />
  ));

storiesOf('Headless Search', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    let results = emojiIndex.search(text('Search', 'christmas'), { custom: CUSTOM_EMOJIS })
    if (!results) { return null }

    return <div>
      {results.map((emoji) => {
        return <span key={emoji.id} style={{ marginLeft: '1.4em' }}>
          <Emoji native={true} emoji={emoji} size={48} />
        </span>
      })}
    </div>
  });
