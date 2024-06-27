import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import { Card, CardBody, Flex, Heading, Link, Button, Text, LogoIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import tokens from 'config/constants/tokens'
import useTheme from 'hooks/useTheme'
import useTokenBalance, { useGetBnbBalance, useBurnedBalance, useTotalSupply } from 'hooks/useTokenBalance'
import { usePriceCakeBusd, useTotalValue } from 'state/farms/hooks'
import { formatLocalisedCompactNumber, getFullDisplayBalance, getBalanceNumber } from 'utils/formatBalance'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import Container from 'components/Layout/Container'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import LinkCard from './components/LinkCard'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  padding-bottom: 0px;
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const StyledCard = styled(Card)`
  width: 60%;
  min-width: 300px;
  margin-left: 20%;
  @media screen and (max-width: 800px) {
    width: 100%;
  min-width: 300px;
  margin-left: 0%;
  }
`

const LinkArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 48px;
    

    @media screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 400px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
`

const DexChart = styled.div`
    align-item: center;
    width: 1000px;
    height: 800px;    
    margin-bottom: 50px;
    margin-left: -20px
`

const Home: React.FC = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const { account, chainId } = useWeb3React()
  const cakePriceUsd = usePriceCakeBusd()
  const totalValue = useTotalValue()

  const { farmsWithStakedBalance, earningsSum: farmEarningsSum } = useFarmsWithBalance()
  const { balance: userCheese, fetchStatus } = useTokenBalance(tokens.got.address[chainId])

  const burnedBalance = getBalanceNumber(useBurnedBalance(tokens.got.address[chainId]))

  const totalSupply = useTotalSupply()
  const circulation = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  const cmc = cakePriceUsd.times(circulation)
  const cmcString = formatLocalisedCompactNumber(cmc.toNumber())

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  return (
    <>
      
      <PageSection innerProps={{ style: { margin: '0', width: '100%' } }} index={2}>
        <LinkArea>
          <LinkCard link = "/swap" title="Trade" color="#4DE2E2" image="/images/Trade.png" />
          <LinkCard link = "/farms" title="Farming" color="#EFBF3A" image="/images/Farming.png" />
          <LinkCard link = "/pools" title="Start Pool" color="#C1F8CF" image="/images/Start Pool.png" />
          <LinkCard link = "https://gaspad.io/" title="Launchpad" color="#0AA1DD" image="/images/launchpad.png" />
        </LinkArea>

        <DexChart>
        <iframe className="dexscreen-card" src="https://dexscreener.com/ethereum/0x615d40af2c321bd0cd6345ae0a7fc1506a659a89" title="dexchart" style={{width:"inherit", height:"inherit"}}/> 
        </DexChart>
        
        <Flex width="100%">
          <StyledCard>
          <CardBody>
        {/* <Heading size="xl" mb="24px">
          'aaa'
        </Heading> */}
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'Flamez'
          }}
          options={{
            height: '300',
            chrome: "nofooter",
          }}
        />
      </CardBody>
          </StyledCard>
        </Flex>
      </PageSection>
    </>
  )
}

export default Home
