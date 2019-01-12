import React from 'react'
import Layout from '../components/layout'

export default class extends React.Component {
  state = {
    modalShow: false
  }

  toggleModal = () => {
    this.setState({modalShow: !this.state.modalShow})
  }

  newTime = () => {
    // Send Data

    // Close form
    this.setState({modalShow: !this.state.modalShow})
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1 className="title">Busses</h1>
            <button class="button" onClick={this.toggleModal}>Create Bus Time</button>
  
            {/* Modal Form */}
            <div className={this.state.modalShow ? "modal is-active" : "modal"}>
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">New Bus</p>
                  <button className="delete" aria-label="close" onClick={this.toggleModal}></button>
                </header>
                <div className="modal-card-body">
                  <label for="appt">Bus leaves at</label><br/>
                  <input type="time" id="appt" name="appt" required /><br/><br/>
                  
                  <label for="loc">Bus leaves from</label>
                  <input className="input" type="text" name="loc" placeholder="Gate 5 high Street"></input>
                </div>
                <footer className="modal-card-foot">
                  <button className="button is-success">Save changes</button>
                  <button className="button" onClick={this.toggleModal}>Cancel</button>
                </footer>
              </div>
            </div>
          </div>
          <hr/>
          {/* Busses */}
          <div className="columns is-multiline">
            <div className="column is-half">
              <div className="box">
                <h3 className="subtitle">9:30pm bus</h3>
                <p>10/11/12</p>
                <p>Leaves from Gate 5 High Street</p>
                <p>13 people are subscribed</p>
                <button className="button">Update</button>
                <button className="button is-warning">Delete</button>
              </div>
            </div>
            <div className="column is-half">
              <div className="box">
                <h3 className="subtitle">9:30pm bus</h3>
                <p>10/11/12</p>
                <p>Leaves from Gate 5 High Street</p>
                <p>13 people are subscribed</p>
                <button className="button">Update</button>
                <button className="button is-warning">Delete</button>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          .columns {
            margin-top: 10px;
          }
          .button {
            margin: 5px;
          }
        `}</style>
      </Layout>
    )
  }
  
};