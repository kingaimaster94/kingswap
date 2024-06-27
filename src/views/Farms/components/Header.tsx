import React from 'react'
import styled from 'styled-components'
import { Text } from '@pancakeswap/uikit'

const Link = styled.a`
  width: 100%;
  
`

const CardWraper = styled.div`
  background-image: url(/images/Farming.png);
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  
  height: 250px;
  width: 100%;
  cursor: pointer;
  border-radius: 19px;
  padding-bottom: 20px;
`

const Content = styled.div`
  padding: 24px;
  display: flex;
`
const LinkImage = styled.img`
  width: 300px;
  margin-top: -3px;
  -webkit-align-items: right;
  display: flex;
   justify-content: right;
   align-items: right;

   @media screen and (max-width: 800px) {
    width: 0px;
  }
`

const StyledTitle = styled(Text)`
  padding: 20px;
  font-size: 30px;
  text-align: left;
  color: white;
  @media screen and (max-width: 500px) {
    padding: 0px;
  }
`
const StyledText = styled(Text)`
  padding: 20px;
  font-size: 19px;
  text-align: left;
  color: white;
  @media screen and (max-width: 500px) {
    padding: 0px;
  }
`
interface HeaderProps {
  title: string
}

const Header = ({title} : HeaderProps) => {

  return (
        <CardWraper >
          <Content>
            <div>
              {/* <StyledTitle>{title}</StyledTitle>
              <StyledText>
              </StyledText> */}
            </div>
            {/* <LinkImage src="/images/rocket.svg" alt="Link Image" /> */}
          </Content>
        </CardWraper>
    )
}

export default Header
