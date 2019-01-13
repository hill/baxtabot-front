import React from 'react'
export default class extends React.Component {

  render () {

    let prototypeData = this.props.data[0]
    if (prototypeData) {
      let keys = Object.keys(prototypeData)

      return (
        <table className="table">
          <thead>
            <tr>
              {keys.map(key => (<th key={key}>{key}</th>))}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((element, i) => (
              <tr key={i}>
                {keys.map((key, index) => (
                  <td key={index}>{element[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
    } else {
      return (<table></table>)
    }
  }

}