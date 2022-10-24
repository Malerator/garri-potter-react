import React from 'react'
import { Container } from '../../ui/Container/Container'
import { Form } from '../../ui/Form/Form'
import s from './Header.module.css'


export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <h1 className={s.title}>Harry Potter</h1>
        <p className={s.header_subtitle}>
          View all characters from the Harry Potter universe
        </p>
        <Form/>
      </Container>
      
    </header>
  )
}
