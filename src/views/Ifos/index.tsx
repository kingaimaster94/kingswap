import React, { useState } from 'react'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import { Route, useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Flex } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import Header from './components/Header'
import Hero from './components/Hero'
import CurrentIfo from './CurrentIfo'
import PastIfo from './PastIfo'

const getGradient = (isDark: boolean) => {
  if (isDark) {
    return 'repeating-linear-gradient(to right, #332453, #332453 40px, #281D44 40px, #281D44 80px)'
  }

  return 'repeating-linear-gradient(to right, #21d4e2, #21d4e2 40px, #53dee9 40px, #53dee9 80px)'
}

const LaunchpadRocket = styled.div`
  width: 300px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  // margin-left: 20px;
  // -webkit-align-items: right;
   
  //  @media screen and (max-width: 800px) {
  //   margin-left: 15px;
  // }

  
   
`
const LinkImage = styled.img`
  width: 150px;
  margin-top: 15px;
  // margin-left: 75px;
  // -webkit-align-items: right;
  // display: flex;
  //  justify-content: right;
  //  align-items: right;
   
  //  @media screen and (max-width: 800px) {
  // }
  
   
`

const StyledTotal = styled.div`
  background: ${({ theme }) => getGradient(theme.isDark)};
  padding-bottom: 500px;
  padding-top: 40px;
`


const Ifos = () => {

  // const router = useRouter()
  
  const { t } = useTranslation()

  const [index, setIndex] = useState(0);
  const handleClick = (newIndex) => setIndex(newIndex);

  const { path, url, isExact } = useRouteMatch()
  console.log("activeIndex path= ", index)
  
    return (
    <Page>
      <Header title="IDO"/>
      <Flex justifyContent="center" alignItems="center" flexDirection='column'>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} scale="sm" variant="subtle">
              <ButtonMenuItem as={Link} to={`${url}`}>
                {t('Upcoming')}
              </ButtonMenuItem>
              <ButtonMenuItem as={Link} to={`${url}/history`}>
                {t('Active')}
              </ButtonMenuItem>
              <ButtonMenuItem as={Link} to={`${url}/tokens`}>
                {t('Joined')}
              </ButtonMenuItem>
        </ButtonMenu>
        <LaunchpadRocket>
            <LinkImage src="/images/2498098.png" alt="Link Image" />
            <h6 style={{color:'#6d6d6d', fontSize:'20px', textAlign:'center'}}>Comming Soon</h6>
        </LaunchpadRocket>
      </Flex>

        {/* <div ref={loadMoreRef} /> */}
      </Page>
    )
}

export default Ifos
