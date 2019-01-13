import React from 'react'
import Layout from '../components/layout'

// TODO: https://jedwatson.github.io/react-select/ for when you start searching users

export default class extends React.Component {

  state = {
    residents: [{name: "Tom Hill", room: 603, college: "Baxter"}]
  }

  componentDidMount () {
    // load in residents into state from server
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
            <h1 className="title">Residents</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Room</th>
                  <th>College</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.residents.map(resident => (
                  <tr>
                    <td>{resident.name}</td>
                    <td>{resident.room}</td>
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