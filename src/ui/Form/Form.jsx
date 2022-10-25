import React from 'react'
import s from './Form.module.css'

export const Form = ({setName, setSchool}) => {

  const formHandler = (event) => event.preventDefault();

  return (
    <form onSubmit={formHandler} className={s.form}>
          <div>
            <label className={s.label_text} htmlFor="in">Name</label>
            <label className={s.label} htmlFor="in">
              <input onInput={(event) => setName(event.target.value.toLowerCase().trim())} id="in" className={s.input} placeholder="Name" type="text" /></label>
          </div>
          <div>
            <label className={s.label_text} htmlFor="sel">School</label>

            <select onChange={(event) => setSchool(event.target.value)} id="sel" className={s.select}>

          <option checked value="All school">All school</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
            </select>
          </div>
        </form>
  )
}
