const routes = require('next-routes')

// routes.add([name], pattern = /name, page = name)

module.exports = routes()
.add('dino')
.add('busses')
.add('groups')
.add('group', '/group/:id', 'group')
.add('docs')
.add('residents')