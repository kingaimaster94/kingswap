import React from 'react'
import styled from 'styled-components'
import { Flex, Text, LinkExternal } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import PageSection from 'components/PageSection'
import Page from 'components/Layout/Page'

const StyledHeroSection = styled(PageSection)`
  padding-top: 50px;
  padding-bottom: 0px;
`

const BackgroundArea = styled(Flex)`
	background-image: url(/images/referral.png);
	border-radius: 16px;
	height: 300px;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const ReferralLink = styled(LinkExternal)`
	font-size: 20px;
`

const Referral: React.FC = () => {
	const { t } = useTranslation()
	const { account } = useWeb3React()

	return (
    <>
	    <Page>
	    	<StyledHeroSection
	        innerProps={{ style: { margin: '0', width: '100%' } }}
	        index={2}
	        hasCurvedDivider={false}
	      >
	        <BackgroundArea>
	        	<Text fontSize="22px">{t('Earn 2% of your AME friends earnings! use this link to invite friends')}</Text>
	        	<ReferralLink color="white" href={`/?referral=${account}`}>{`referral=${account}`}</ReferralLink>
	        	<Text fontSize="20px" mt="20px">{t('Total Friend: 0')}</Text>
	        	<Text fontSize="20px">{t('Total Referral Commissions: 0 AME')}</Text>
	        </BackgroundArea>
	      </StyledHeroSection>
      </Page>
    </>
  )
}

export default Referral