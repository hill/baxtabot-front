import Layout from '../components/layout'

export default () => (
  <Layout>
    <section className="section">
        <h1 className="title">Documentation</h1>
        <h2 className="title is-4">Overview</h2>
        <p>This is being run on a heroku server. It is a flask application on the backend and the admin interface is a <a href="http://reactjs.org" target="_blank">React</a> / <a href="http://nextjs.org" target="_blank">Next.js</a> concoction.</p>
        <p>TBH the whole codebase is a mess. I made this when I was quite intoxicated one solemn thursday evening.</p>
        <p>There was no foresight.</p>
        <p>Don't judge me.</p>
    </section>
  </Layout>
);