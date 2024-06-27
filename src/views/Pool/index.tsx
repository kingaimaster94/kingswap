import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Pair } from '@pancakeswap/sdk'
import { Text, Flex, LiquidityCardBody , LiquidityCardFooter, Button, AddIcon, ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { Route, useRouteMatch,Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import FullPositionCard from '../../components/PositionCard'
import { useTokenBalancesWithLoadingIndicator } from '../../state/wallet/hooks'
import { usePairs } from '../../hooks/usePairs'
import { toV2LiquidityToken, useTrackedTokenPairs } from '../../state/user/hooks'
import Dots from '../../components/Loader/Dots'
import { AppHeader, LiquidityBody } from '../../components/App'
import Page from '../Page'

const Body = styled(LiquidityCardBody)`
  background-color: ${({ theme }) => theme.colors.dropdownDeep};
`

export default function Pool() {
  const { account } = useActiveWeb3React()
  const { t } = useTranslation()
  const [clickIndex, setIndex] = useState(1);
  const handleClick = (newIndex) => setIndex(newIndex);
  const { path, url, isExact } = useRouteMatch();

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs],
  )
  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens],
  )
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens,
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0'),
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances],
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some((V2Pair) => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  const renderBody = () => {

  

    if (!account) {
      return (
        <Text color="textSubtle" textAlign="center">
          {t('Connect to a wallet to view your liquidity.')}
        </Text>
      )
    }
    if (v2IsLoading) {
      return (
        <Text color="textSubtle" textAlign="center">
          <Dots>{t('Loading')}</Dots>
        </Text>
      )
    }
    if (allV2PairsWithLiquidity?.length > 0) {
      return allV2PairsWithLiquidity.map((v2Pair, index) => (
        <FullPositionCard
          key={v2Pair.liquidityToken.address}
          pair={v2Pair}
          mb={index < allV2PairsWithLiquidity.length - 1 ? '16px' : 0}
        />
      ))
    }
    return (
      <Text color="textSubtle" textAlign="center">
        {t('No liquidity found.')}
      </Text>
    )
  }

  return (
    <Page>
      <ButtonMenu activeIndex={clickIndex} onItemClick={handleClick} scale="md" variant="primary"  marginBottom="20px">
             <ButtonMenuItem as={Link} to="/swap">
               {t('Swap')}
             </ButtonMenuItem>
             <ButtonMenuItem as={Link} to={`${url}`}>
               {t('Liquidity')}
             </ButtonMenuItem>
      </ButtonMenu>
      <LiquidityBody>
        <AppHeader title={t('Your Liquidity')} subtitle={t('Remove liquidity to receive tokens back')} />
        <Body style={{background: "rgba(9, 29, 61, 0.6)", overflow:"hidden", position: "relative"}}>
          <div style={{position: "absolute", width: "18px", height: "400px", top:"-60px", background:"radial-gradient(34.12% 43.12% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.63%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)", opacity:"0.1", transform:"rotate(56.29deg)"}} />
          <div style={{position: "absolute", width: "18px", height: "400px", top:"-200px", left:"250px", background:"radial-gradient(34.12% 43.12% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.63%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)", opacity:"0.1", transform:"rotate(-76.69deg)"}} />
          <div style={{position: "absolute", width: "18px", height: "400px", top:"-40px", left:"300px", background:"radial-gradient(34.12% 43.12% at 60.66% 50%, #FFFFFF 0%, #CDFFFC 15.63%, #1EF6E9 36.46%, #14AAC6 47.92%, #0866B5 67.71%, rgba(8, 102, 181, 0) 100%)", opacity:"0.1", transform:"rotate(100.65deg)"}} />
          {renderBody()}
          {account && !v2IsLoading && (
            <Flex flexDirection="column" alignItems="center" mt="24px">
              <Text color="textSubtle" mb="8px">
                {t("Don't see a pool you joined?")}
              </Text>
              <Button id="import-pool-link" variant="secondary" scale="sm" as={Link} to="/find">
                {t('Find other LP tokens')}
              </Button>
            </Flex>
          )}
        </Body>
        <LiquidityCardFooter style={{ textAlign: 'center' }}>
          <Button id="join-pool-button" as={Link} to="/add" width="100%" startIcon={<AddIcon color="white" />}>
            {t('Add Liquidity')}
          </Button>
        </LiquidityCardFooter>
      </LiquidityBody>
    </Page>
  )
}
