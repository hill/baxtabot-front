import React from 'react'
import Layout from '../components/layout'

import { toast } from 'react-toastify';

export default class extends React.Component {

  state = {
    jd: false,
    jd_loc: "",
    shop: false
  }

  render () {
    return (
      <Layout>
        <section className='section'>
          <h1 className="title is-2">Switches</h1>
          <hr/>
          <div className="field">
            <input type="checkbox" name="jd" class="switch"/>
            <label htmlFor="jd">J&D</label>
          </div>
          <div className="field">
            <input type="text" name="jd_loc" class="input"/>
            <label htmlFor="jd_loc">J&D Location</label>
          </div>
          <div className="field">
            <input type="checkbox" name="shop" class="switch"/>
            <label htmlFor="shop">Shop</label>
          </div>
        </section>
      </Layout>
    )
  }
}
