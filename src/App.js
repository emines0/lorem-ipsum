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
    console.log('Hello World!')
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ipsa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ipsa.
        </p>
      </article>
    </section>
  )
}

export default App
