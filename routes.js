const routes = require('next-routes')

// routes.add([name], pattern = /name, page = name)

module.exports = routes()
.add('dino')
.add('busses')
.add('groups')
.add('docs')
.add('residents')