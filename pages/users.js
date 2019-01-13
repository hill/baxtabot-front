import React from 'react'
import Layout from '../components/layout'

import {Link} from '../routes'

export default class extends React.Component {

  state = {
    residents: [{name: "Tom Hill", last: "11/12/13 10:50pm", college: "Baxter", groups: ["TKC-Date-Night", "Baxter-Date-Night"]}]
  }

  componentDidMount () {
    // load in residents into state from server
    // Will be based on who messaged the bot
  }

  deleteMeal = theResident => {
    let state = this.state
    let index = state.residents.findIndex(
      resident => resident.name == theResident.name
    )
    state.residents.splice(index, 1)
    // Make a DELETE request here
    this.setState(state)
  }

  render () {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1 className="title">Users</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last Message</th>
                  <th>Groups</th>
                  <th>College</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.residents.map(resident => (
                  <tr>
                    <td>{resident.name}</td>
                    <td>{resident.last}</td>
                    <td>{resident.groups.map(group => (
                        <Link route="group" params={{id: group}}><a>{group + ", "}</a></Link>
                      )
                    )}</td>
                    <td>{resident.college}</td>
                    <td>
                      <span className="icon">
                        <i className="fas fa-edit"></i>
                      </span>
                    </td>
                    <td>
                      <a className="delete" onClick={this.deleteMeal.bind(this, resident)}></a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Layout>
    )
  }

}