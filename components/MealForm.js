import React from 'react'
import moment from 'moment'

function Submit (props) {
  return (
    <div className='field is-grouped'>
      <div className='control'>
        <input
          type='submit'
          className='button is-link'
          onClick={props.onSubmit}
        />
      </div>
      <div className='control'>
        <button className='button is-text' onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}

class SingleMealForm extends React.Component {
  state = {
    startDate: null,
    mealType: 'breakfast',
    mealDesc: ''
  }

  onSubmit = () => {
    // Package the meal, ship it to dino
    let meal = {
      date: this.state.startDate,
      mealType: this.state.mealType,
      description: this.state.mealDesc,
      likes: 0,
      dislikes: 0
    }

    this.props.onSubmit([meal])
  }

  render () {
    return (
      <div>
        <h3 className='title is-4'>New Meal</h3>
        <div className='field'>
          <label className='label'>Date</label>
          <div className='control'>
            <input
              type='date'
              onChange={e =>
                this.setState({ startDate: moment(e.target.value).format('YYYY-MM-DD') })
              }
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Meal Type</label>
          <div className='control'>
            <div className='select'>
              <select
                onChange={e => this.setState({ mealType: e.target.value })}
              >
                <option value='breakfast'>Breakfast</option>
                <option value='lunch'>Lunch</option>
                <option value='dinner'>Dinner</option>
              </select>
            </div>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Description</label>
          <div className='control'>
            <textarea
              className='textarea'
              placeholder='Some very tasty dino food mmmmmm...'
              onChange={e => this.setState({ mealDesc: e.target.value })}
            />
          </div>
        </div>
        <Submit onSubmit={this.onSubmit} onCancel={this.props.onCancel} />
      </div>
    )
  }
}

class DayMealForm extends React.Component {
  state = {
    startDate: null,
    breakfast: "",
    lunch: "",
    dinner: ""
  }

  onSubmit = () => {
    let breakfast = {
      date: this.state.startDate,
      mealType: "breakfast",
      description: this.state.breakfast,
      likes: 0,
      dislikes: 0
    }
    let lunch = {
      date: this.state.startDate,
      mealType: "lunch",
      description: this.state.lunch,
      likes: 0,
      dislikes: 0
    }
    let dinner = {
      date: this.state.startDate,
      mealType: "dinner",
      description: this.state.dinner,
      likes: 0,
      dislikes: 0
    }

    this.props.onSubmit([breakfast, lunch, dinner])

  }

  render () {
    return (
      <div>
        <h3 className='title is-4'>New Day of Meals</h3>
        <div className='field'>
          <label className='label'>Date</label>
          <div className='control'>
            <input
              type='date'
              onChange={e => this.setState({ startDate: e.target.value })}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Breakfast</label>
          <div className='control'>
            <textarea
              className='textarea'
              placeholder='Some very tasty dino food mmmmmm...'
              onChange={(e) => this.setState({breakfast: e.target.value})}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Lunch</label>
          <div className='control'>
            <textarea
              className='textarea'
              placeholder='Some very tasty dino food mmmmmm...'
              onChange={(e) => this.setState({lunch: e.target.value})}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Dinner</label>
          <div className='control'>
            <textarea
              className='textarea'
              placeholder='Some very tasty dino food mmmmmm...'
              onChange={(e) => this.setState({dinner: e.target.value})}
            />
          </div>
        </div>
        <Submit onSubmit={this.onSubmit} onCancel={this.props.onCancel} />
      </div>
    )
  }
}

class WeekMealForm extends React.Component {
  state = {
    startDate: null,
    meals: []
  }

  mealChange (row, col, event) {
    // console.log('[mealChange]', row, col, event.target.value)
    let mealName = row.toString() + ',' + col.toString()

    let newState = Object.assign({}, this.state)
    let theMeal = newState.meals.find(meal => meal.mealName == mealName)
    if (theMeal) {
      theMeal.description = event.target.value
    } else {
      let newEl = { mealName: mealName, description: event.target.value }
      newState.meals.push(newEl)
    }

    this.setState(newState)
  }

  onSubmit = () => {
    let mealNames = ['Breakfast', 'Lunch', 'Dinner']
    let theMeals = []
    let startDate = moment(this.state.startDate)
    this.state.meals.map(meal => {
      let row = meal.mealName.split(',')[0]
      let col = meal.mealName.split(',')[1]

      let datedMeal = {
        mealType: mealNames[row].toLowerCase(),
        description: meal.description,
        date: moment(startDate)
          .add(col, 'days')
          .format('YYYY-MM-DD'),
        likes: 0,
        dislikes: 0
      }
      console.log('[date]', typeof startDate, startDate)
      theMeals.push(datedMeal)
    })
    console.log('Submitted!')
    this.props.onSubmit(theMeals)
  }

  createRows = () => {
    let mealNames = ['Breakfast', 'Lunch', 'Dinner']
    let rows = []
    for (let i = 0; i < 3; i++) {
      // Create Rows
      let columns = []
      for (let j = 0; j < 7; j++) {
        // Create Columns

        let id = mealNames[i] + (j + 1).toString()

        columns.push(
          <td key={id}>
            <textarea
              name={id}
              className='textarea tableTextArea'
              placeholder='Yummo food'
              onChange={this.mealChange.bind(this, i, j)}
            />
          </td>
        )
      }

      rows.push(
        <tr key={i}>
          <th>{mealNames[i]}</th>
          {columns}
        </tr>
      )
    }

    return rows
  }

  render () {
    return (
      <div>
        <h3 className='title is-4'>New Week of Meals</h3>
        <div className='field'>
          <label className='label'>Week Start Date</label>
          <div className='control'>
            <input
              type='date'
              onChange={e => this.setState({ startDate: e.target.value })}
            />
          </div>
        </div>

        <table className='table'>
          <thead>
            <tr>
              <th>Meal</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>{this.createRows()}</tbody>
        </table>

        <Submit onSubmit={this.onSubmit} onCancel={this.props.onCancel} />
      </div>
    )
  }
}

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentForm: null
    }
  }

  handleCancel = () => {
    this.setState({ currentForm: null })
  }

  handleSubmit = meals => {
    meals.map(meal => {
      this.props.addedMeal(meal)
    })
    this.setState({ currentForm: 'none' })
  }

  render () {
    let form = null
    if (this.state.currentForm == 'single') {
      form = (
        <SingleMealForm
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        />
      )
    } else if (this.state.currentForm == 'day') {
      form = (
        <DayMealForm
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        />
      )
    } else if (this.state.currentForm == 'week') {
      form = (
        <WeekMealForm
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        />
      )
    } else {
      form = null
    }

    return (
      <div className=''>
        <h1 className='title'>Dino</h1>
        <button
          className='button'
          onClick={() => {
            !form
              ? this.setState({ currentForm: 'single' })
              : this.setState({ currentForm: 'none' })
          }}
        >
          New Meal
        </button>
        <button
          className='button'
          onClick={() => {
            !form
              ? this.setState({ currentForm: 'day' })
              : this.setState({ currentForm: 'none' })
          }}
        >
          New Day of Meals
        </button>
        <button
          className='button'
          onClick={() => {
            !form
              ? this.setState({ currentForm: 'week' })
              : this.setState({ currentForm: 'none' })
          }}
        >
          New Week of Meals
        </button>
        <br />
        <br />
        <div className=''>{form}</div>

        <style jsx>{`
          .button {
            margin: 5px;
          }
        `}</style>
      </div>
    )
  }
}
