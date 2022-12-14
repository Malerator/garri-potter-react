import React from 'react'
import { Container } from '../../ui/Container/Container'

import { Form } from '../../ui/Form/Form'
import { Link } from 'react-router-dom'

import s from './Header.module.css'


export const Header = ({setName, setSchool}) => {
  return (
    <header className={s.header}>
      <Link to='/like'>
      <button>Likes</button>
      </Link>
      <Container>
        <h1 className={s.title}>Harry Potter</h1>
        <p className={s.header_subtitle}>
          View all characters from the Harry Potter universe
        </p>
        <Form setName={setName} setSchool={setSchool}/>
      </Container>
      
    </header>
  )
}
