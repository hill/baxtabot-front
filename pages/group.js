import React from 'react'
import Layout from '../components/layout'
import uuidv4 from 'uuid/v4'

import { toast } from 'react-toastify';

import Select from 'react-select'
import ResidentTable from '../components/residentTable'

import { Link } from '../routes'

export default class extends React.Component {
  state = {
    users: [
      { name: 'Tom Hill', college: 'Baxter' },
      { name: 'Dana Lark', college: 'Goldstein' },
      { name: 'Lily Kutena', college: 'Baxter' }
    ],
    showForm: false,
    attending: [
      { name: 'Tom Hill', college: 'Baxter' },
      { name: 'Dana Lark', college: 'Goldstein' }
    ],
    groups: [],
    newGroupName: '',
    groupSelects: [],
    posCount: 0,
  }

  onDelete = group => {
    // Delete the group
  }

  createGroup = () => {
    let id = uuidv4()

    this.setState({
      showForm: !this.state.showForm,
      posCount: this.state.posCount + 1,
      groups: [
        ...this.state.groups,
        {
          name: this.state.newGroupName,
          pos: this.state.posCount,
          id: id,
          attending: 0,
          members: []
        }
      ]
    })

    toast.success(`🍳 Created "${this.state.newGroupName}"`)
  }

  addMembers = (group) => {
    if (this.state.groupSelects[group.pos]) {
      let groups = this.state.groups
      let theGroup = groups[group.pos]

      let formattedNames = []
      this.state.groupSelects[group.pos].map((selected, i) => formattedNames[i] = selected.value)
      theGroup.members = formattedNames

      groups[group.pos] = theGroup

      let groupSelects = this.state.groupSelects
      groupSelects[group.pos] = []

      this.setState({groups: groups, groupSelects: groupSelects})
    } else {
      toast.error("You must add residents before submitting, dumb ass.")
    }
  }

  handleSelectChange = (group, selectedOption) => {
    let groupSelects = this.state.groupSelects
    groupSelects[group.pos] = selectedOption
    console.log(`replaced element at ${group.pos} with ${selectedOption}`)
    this.setState({groupSelects})
  }

  shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  chunkify(a, n, balanced) {
    if (n < 2)
        return [a];

    var len = a.length,
            out = [],
            i = 0,
            size;

    if (len % n === 0) {
        size = Math.floor(len / n);
        while (i < len) {
            out.push(a.slice(i, i += size));
        }
    } else if (balanced) {
        while (i < len) {
            size = Math.ceil((len - i) / n--);
            out.push(a.slice(i, i += size));
        }
    } else {
        n--;
        size = Math.floor(len / n);
        if (len % size === 0)
            size--;
        while (i < size * n) {
            out.push(a.slice(i, i += size));
        }
        out.push(a.slice(size * n));
    }
    return out;
  }

  autoAssign = () => {
    if (this.state.groups.length == 0) {toast.warn("You must have at least one group to auto-assign"); return;}

    let attending = this.state.attending
    this.shuffleArray(attending)

    let grouped = this.chunkify(attending, this.state.groups.length, 1)

    console.log(grouped)
  }

  render () {
    let newForm = null

    this.state.showForm === false
      ? (newForm = null)
      : (newForm = (
        <div className='column is-half'>
          <div className='field'>
            <label className='label'>Group Name</label>
            <div className='control'>
              <input
                type='text'
                className='input'
                onChange={e =>
                  this.setState({ newGroupName: e.target.value })
                }
              />
            </div>
          </div>
          <a className='button primary' onClick={this.createGroup}>
              Create Group
          </a>
        </div>
      ))

    return (
      <Layout>
        <section className='section'>
          <div className='container'>
            <h1 className='title'>Event: {this.props.url.query.id}</h1>
            <hr />
            <h3 className='title is-4'>Users Attending</h3>
            <a className="button is-info" onClick={this.autoAssign}>Auto-assign</a>
            <ResidentTable data={this.state.attending} />
            <hr />
            <h3 className='title is-4'>Groups</h3>
            <a
              className='button'
              onClick={() => {
                console.log('Showing form!')
                this.setState({ showForm: !this.state.showForm })
              }}
            >
              New Group
            </a>
            {newForm}
            {this.state.groups.map(group => (
              <div className="columns">
                <div className='column is-half'>
                  <hr/>
                  <h4 className='title is-5'>{group.name}</h4>
                  <Select
                    value={this.state.groupSelects[group.pos]}
                    onChange={this.handleSelectChange.bind(this, group)}
                    options={[
                      { value: 'Tom Hill', label: 'Tom Hill' },
                      { value: 'Dana Lark', label: 'Dana Lark' }
                    ]}
                    isMulti
                  />
                  <br/>
                  <a className="button primary" onClick={this.addMembers.bind(this, group)}>Add Members</a>
                  <br/>
                  <textarea className="textarea"></textarea>
                  <a className="button primary" onClick={() => toast("Notification Sent!")}>Send Notification</a>
                </div>
                <div className="column is-half">
                  <hr/>
                  <h4 className='title is-6'>Members ({group.members.length})</h4>
                  <ul>
                    {group.members.map(member => (
                      <li>{member}</li>
                    ))}
                  </ul>
                </div>
              </div>

            ))}
          </div>
        </section>
      </Layout>
    )
  }
}
