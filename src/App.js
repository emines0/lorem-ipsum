import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  /*
   * count -> State for how many paragraphs user wants to generate
   * text -> State for generated text
   */

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    /*
     * count value is type string. It needs to be parsed to int
     */

    if (count <= 0) {
      amount = 1
      setCount(1)
    }

    if (count > data.length) {
      amount = data.length
      setCount(data.length)
      console.log(amount)
    }
    setText(data.slice(0, amount))
    /*
     * slice will return a new copy of array where we can define start/end
     */
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
          /*
           * onChange -> if input change, change how many paragraphs needs to be generated based on value in the input
           */
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}> {item} </p>
        })}
      </article>
    </section>
  )
}

export default App
