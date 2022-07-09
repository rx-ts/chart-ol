import fs from 'node:fs/promises'

import { request } from '@octokit/request'

/**
 * @link https://github.com/sindresorhus/github-markdown-css
 */
const { data } = await request('POST /markdown', {
  text: await fs.readFile('README.md', 'utf8'),
  token: process.env.GITHUB_TOKEN,
})

const HTML = /* HTML */ `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <title>Chart Online</title>
      <link
        rel="shortcut icon"
        href="favicon.png"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.min.css"
      />
      <style>
        @media (prefers-color-scheme: dark) {
          :root {
            background-color: #0d1117;
          }
        }

        body {
          margin: 0;
        }

        .markdown-body {
          box-sizing: border-box;
          min-width: 200px;
          max-width: 980px;
          margin: 0 auto;
          padding: 45px;
        }

        @media (max-width: 767px) {
          .markdown-body {
            padding: 15px;
          }
        }
      </style>
    </head>
    <body>
      <article class="markdown-body">${data}</article>
    </body>
  </html>
`

await fs.writeFile('api/_html.ts', 'export default `' + HTML + '`')
