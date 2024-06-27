import React from 'react'
import styled from 'styled-components'
import { Text } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import CardValue from './CardValue'

const Link = styled.a`
  width: 100%;
  
`


const CardWraper = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};  
  margin-bottom: 20px;
  height: 90%;
  width: 100%;
  min-width: 120px;
  border-radius: 19px;

`
console.log("heigth",CardWraper);

const Content = styled.div`
  padding: 24px;
`
const LinkImage = styled.img`
  width: 100%;
  margin-top: 30px;
  -webkit-align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledText = styled(Text)`
  font-size: 24px;
  text-align: center;
  color: black;
`

interface LinkCardProps {
  title: string
  color: string
  image: string
  link: string
}

const LinkCard = ({link, title, color, image} : LinkCardProps) => {

  return (
      <Link href={link}>
        <CardWraper color={color} >
          <Content>
            <StyledText>{title}</StyledText>
            <LinkImage src={image} alt="Link Image" />
          </Content>
        </CardWraper>
      </Link>
    )
}

export default LinkCard
