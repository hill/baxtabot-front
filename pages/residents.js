import Layout from '../components/layout'

// TODO: https://jedwatson.github.io/react-select/ for when you start searching users

export default () => (
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
            <tr>
              <td>Tom Hill</td>
              <td>603</td>
              <td>Baxter</td>
              <td>
                <span className="icon">
                  <i className="fas fa-edit"></i>
                </span>
              </td>
              <td>
                <a className="delete"></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </Layout>
);