import React from 'react'
import Layout from '../components/layout'
import MealForm from '../components/MealForm'

import { toast } from 'react-toastify';

export default class extends React.Component {
  state = {
    meals: [
      {
        date: '2019-01-01',
        mealType: 'dinner',
        description:
          'this is a lot of text with\nnewlines because this is what it looks like',
        likes: 12,
        dislikes: 5
      }
    ]
  }

  addMeal = meal => {
    this.setState(prevState => ({ meals: [...prevState.meals, meal] }))
  }

  deleteMeal = meal => {
    let state = this.state
    let index = state.meals.findIndex(
      stateMeal =>
        stateMeal.date == meal.date && stateMeal.mealType == meal.mealType
    )
    state.meals.splice(index, 1)
    // Make a DELETE request here
    this.setState(state)

    toast.warn("Deleted a meal", { autoClose: 1500 })
  }

  render () {
    return (
      <Layout>
        <section className='section'>
          <MealForm
            formType={this.state.currentForm}
            addedMeal={this.addMeal}
          />

          <hr />

          <table className='table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Meal</th>
                <th>Description</th>
                <th>Likes</th>
                <th>Dislikes</th>
                <th>Satisfaction</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.meals.map((meal, index) => (
                <tr key={index}>
                  <td>{meal.date}</td>
                  <td>{meal.mealType}</td>
                  <td>{meal.description}</td>
                  <td>{meal.likes}</td>
                  <td>{meal.dislikes}</td>
                  <td>
                    {meal.likes ? Math.round((meal.likes / (meal.likes + meal.dislikes)) * 100.0 * 100 ) / 100 : 0}%
                  </td>
                  <td>
                    <span className='icon'>
                      <i className='fas fa-edit' />
                    </span>
                  </td>
                  <td>
                    <a
                      className='delete'
                      onClick={this.deleteMeal.bind(this, meal)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Layout>
    )
  }
}
