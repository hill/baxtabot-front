import React, { Component } from 'react';
import Head from 'next/head'
import '../styles/styles.scss'

import Sidebar from './sidebar.js'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Head>
          <title>BaxtaBot</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"/>
        </Head>
        <div className="columns">
          <div className="column is-2">
            <Sidebar />
          </div>
          <div className="column is-10s">
            {this.props.children}
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  }
}