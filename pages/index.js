import Layout from '../components/layout'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title is-1 is-primary">BaxtaBot</h1>
        <div className="columns">
          <div className="column is-one-third">
            <div className="box">
              <h1 className="title is-3">27</h1>
              <p className="subtitle">Messages today</p>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="box">
              <h1 className="title is-3">200</h1>
              <p className="subtitle">Messages this week</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </Layout>
);