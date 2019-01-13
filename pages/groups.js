import React from 'react'
import Layout from '../components/layout'
import uuidv4 from 'uuid/v4'

import {Link} from '../routes'

export default class extends React.Component {
  state = {
    groups: [{name: "TKC Date Night", id: '1fc0664a-369d-4bb4-9e82-a4f5f297d8f9', attending: 12, subgroups: 6}],
    newEventTitle: '',
  }

  onDelete = (group) => {
    // Delete the group
  }

  createEvent = () => {
    let id = uuidv4();

    this.setState({groups: [...this.state.groups, {
      name: this.state.newEventTitle,
      id: id,
      attending: 0,
      subgroups: 0
    }]})
  }

  render () {

    let newForm

    !this.state.showForm ? newForm = null : newForm = (
      <div className="column is-half">
        <div className='field'>
          <label className='label'>Event Name</label>
          <div className='control'>
            <input
              type='text'
              className='input'
              onChange={e =>
                this.setState({ newEventTitle: e.target.value })
              }
            />
          </div>
        </div>
        <a className="button primary" onClick={this.createEvent}>Create Event</a>
      </div>
    )

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1 className="title">Groups</h1>
            <a className="button" onClick={() => this.setState({showForm: !this.state.showForm})}>New Event</a>

            {newForm}

            <hr/>

            <table className='table'>
              <thead>
                <th>Name</th>
                <th>Attending</th>
                <th>Subgroups</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {this.state.groups.map(group => (
                  <tr key={group.id}>
                    <td><Link route='group' params={{id: group.id}}><a>{group.name}</a></Link></td>
                    <td>{group.attending}</td>
                    <td>{group.subgroups}</td>
                    <td>
                      <a className="delete" onClick={this.onDelete.bind(this, group)}></a>
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
