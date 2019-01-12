import Head from 'next/head'
import Link from 'next/link'
import '../styles/styles.scss'

import ScriptTag from 'react-script-tag';
import Sidebar from './sidebar.js'

export default ({ children }) => {

  return (
    <div>
      <Head>
        <title>BaxtaBot</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
      </Head>
      <div className="columns">
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column is-10s">
          {children}
          <div id="fb-root"></div>

          <ScriptTag src="/static/fb_message.js" />

          <div className="fb-customerchat"
            page_id="223019795042891"
            logged_in_greeting="Hi!"
            logged_out_greeting="Hi!">
          </div>
        </div>
      </div>
    </div>
  )
}