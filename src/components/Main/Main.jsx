import React from 'react'
import { Container } from '../../ui/Container/Container'
import { Card } from '../../ui/Card/Card'
import { data } from '../../hp'
import s from './Main.module.css'

export const Main = () => {
  return (
    <main>
      <Container>
        <div className={s.wrapper_cards}>
          {data.map((elem) => (
            <Card key={elem.name} src={elem.image} name={elem.name} actor={elem.actor} gender={elem.gender} house={elem.house} wand={elem.wand.core} alive={elem.alive}/>
          ))}
        </div>
      </Container>
    </main>
  )
}
