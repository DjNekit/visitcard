'use client'
import Link from 'next/link'
import { keyframes, styled } from "styled-components"

const fade = keyframes`
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: black;
  height: 100vh;
  width: 100vw;
  position: fixed;
`
const Logo = styled.div`
  font-size: 30vw;
  opacity: 0;
  transform: scale(0.8);
  animation: ${fade} 2s ease-out forwards;
`
const Wrapper = styled.div`
  color: white;
`
const Scroll = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 100vh 100vh;
`
const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;
  gap: 10vw;
  background-color: white;
  color: black;
`

const Block = styled.div`
  transition: all .3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:hover {
    transform: scale(1.1);
  }
`
const Overview = styled(Link)`
  text-align: justify;
  font-size: calc(2vw + 6px);

`
const Title = styled(Link)`
  text-align: center;
  font-weight: bold;
  font-size: 7vw;
`

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Logo>LS+A</Logo>
      </Container>
      <Scroll>
        <div></div>
        <Description>
          <Block>
            <Overview href='/work'>At Pedersen Studio + Associates we are driven by a desire to create compelling work with meaning.</Overview>
            <Title href='/work'>CREATIVE</Title>
          </Block>
          <Block>
            <Overview href='/work'>At Pedersen Studio + Associates we are driven by a desire to create compelling work with meaning.</Overview>
            <Title href='/work'>STUDIO</Title>
          </Block>
        </Description>
      </Scroll>
    </Wrapper>
  )
}
