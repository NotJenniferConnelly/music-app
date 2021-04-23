import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Music from "./components/Music"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(270deg, #000, ${props => props.color} 50%, #000 100%)
`

const Application = () => {
  const [color, setColor] = useState("#9f3a")

  const getRandomNumber = () => Math.floor(Math.random() * 10)

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(
        '#' + getRandomNumber() + getRandomNumber() + getRandomNumber()
      )
    }, 5000)

    return () => { clearInterval(interval) }
  }, [])

  return (
    <Container color={color}>
      <Music />
    </Container>
  )
}

export default Application
