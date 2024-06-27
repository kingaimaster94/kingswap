import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useTheme } from '@material-ui/core/styles';
import { CurrencyLogo } from 'components/Logo';
import useFetchedTokenDatas from 'state/info/queries/tokens/tokenData'
// import {
//   useBlockNumber,
//   useEthPrice,
//   useMaticPrice,
//   useTokenDetails,
// } from 'state/application/hooks';
import {
  // getTokenInfo,
  // getIntervalTokenData,
  formatNumber,
  shortenAddress,
} from 'utils';
import { LineChart } from 'components/LineChart';
import { Token } from '@pancakeswap/sdk';
import dayjs from 'dayjs';
import { unwrappedToken } from 'utils/wrappedCurrency';
// import { getIntervalTokenDataV3, getTokenInfoV3 } from 'utils/v3-graph';
import { ChartEntry, TokenData, Block, PriceChartEntry } from 'state/info/types'
import { useTokenData, usePoolDatas } from 'state/info/hooks'
import { useCurrency } from 'hooks/Tokens';
import useActiveWeb3React from '../../../hooks/useActiveWeb3React'


// import { getConfig } from 'config';

const SwapTokenDetailsHorizontal: React.FC<{
  addresses: any;
}> = ({ addresses }) => {
  // const { chainId } = useActiveWeb3React();
  // const chainIdToUse = chainId ?? ChainId.MATIC;
  // const currency = unwrappedToken(token);
  const tokenAddress = addresses[0];
  const currency = useCurrency(addresses[0]);
  const { palette } = useTheme();
  // const latestBlock = useBlockNumber();
  // const { tokenDetails, updateTokenDetails } = useTokenDetails();
  const [tokenData, setTokenData] = useState<any>(null);
  const [priceData, setPriceData] = useState<any>(null);
  const priceUp = Number(tokenData?.priceChangeUSD) > 0;
  const priceUpPercent = Number(tokenData?.priceChangeUSD).toFixed(2);
  const prices = priceData ? priceData.map((price: any) => price.close) : [];

  console.log("aria: selectedAddress = ", addresses[0])
  const { error: tokenDataError, data: tokenDatas } = useFetchedTokenDatas(addresses)
    console.log("aria: tokenData = ", tokenDatas)
  // const { ethPrice } = useEthPrice();
  // const { maticPrice } = useMaticPrice();
//   const config = getConfig(chainId);
//   const v2 = config['v2'];

  // const setChartData = () => {
  //   setTokenData(useTokenDatas());
  // };

  // const chartData = useTokenData(currency.address)

  useEffect(() => {
    // setChartData();
    // setTokenData(useTokenDatas());
  //   (async () => {
  //     const tokenDetail = tokenDetails.find(
  //       (item) => item.address === tokenAddress,
  //     );
  //     setTokenData(tokenDetail?.tokenData);
  //     setPriceData(tokenDetail?.priceData);
  //     const currentTime = dayjs.utc();
  //     const startTime = currentTime
  //       .subtract(1, 'day')
  //       .startOf('hour')
  //       .unix();

  //     let tokenPriceDataV2, tokenPriceIsV2;
  //   //   if (v2) {
  //       tokenPriceDataV2 = await getIntervalTokenData(
  //         tokenAddress,
  //         startTime,
  //         3600,
  //         latestBlock,
  //         chainIdToUse,
  //       );
  //       tokenPriceIsV2 = !!tokenPriceDataV2.find(
  //         (item) => item.open && item.close,
  //       );
  //   //   }
  //     const tokenPriceDataV3 = await getIntervalTokenDataV3(
  //       tokenAddress.toLowerCase(),
  //       startTime,
  //       3600,
  //       latestBlock,
  //       chainIdToUse,
  //     );

  //     const tokenPriceData = tokenPriceIsV2
  //       ? tokenPriceDataV2
  //       : tokenPriceDataV3;
  //     setPriceData(tokenPriceData);

  //     let token0;
  //     if (ethPrice.price && ethPrice.oneDayPrice) {
  //       const tokenInfo = await getTokenInfo(
  //         ethPrice.price,
  //         ethPrice.oneDayPrice,
  //         tokenAddress,
  //         chainIdToUse,
  //       );
  //       token0 = tokenInfo && tokenInfo.length > 0 ? tokenInfo[0] : tokenInfo;
  //       if (token0 && token0.priceUSD) {
  //         setTokenData(token0);
  //         const tokenDetailToUpdate = {
  //           address: tokenAddress,
  //           tokenData: token0,
  //           priceData: tokenPriceData,
  //         };
  //         updateTokenDetails(tokenDetailToUpdate);
  //       }
  //     }
  //     if (!token0 || !token0.priceUSD) {
  //       if (maticPrice.price && maticPrice.oneDayPrice) {
  //         const tokenInfoV3 = await getTokenInfoV3(
  //           maticPrice.price,
  //           maticPrice.oneDayPrice,
  //           tokenAddress.toLowerCase(),
  //           chainIdToUse,
  //         );
  //         const tokenV3 =
  //           tokenInfoV3 && tokenInfoV3.length > 0
  //             ? tokenInfoV3[0]
  //             : tokenInfoV3;
  //         if (tokenV3) {
  //           setTokenData(tokenV3);
  //           const tokenDetailToUpdate = {
  //             address: tokenAddress,
  //             tokenData: tokenV3,
  //             priceData: tokenPriceData,
  //           };
  //           updateTokenDetails(tokenDetailToUpdate);
  //         }
  //       }
  //     }
  //   })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    tokenAddress
    // ethPrice.price,
    // ethPrice.oneDayPrice,
    // maticPrice.price,
    // maticPrice.oneDayPrice,
    // chainIdToUse,
  ]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Box className='flex items-center'>
          <CurrencyLogo currency={currency} size='28px' />
          <Box ml={1}>
            <small>{currency.symbol}</small>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <small className='swapTxInfoHeader'>Price</small>
          {tokenData ? (
            <Box>${formatNumber(tokenData.priceUSD)}</Box>
          ) : (
            <Skeleton variant='rect' width={80} height={20} />
          )}
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box>
          <small className='swapTxInfoHeader'>24h</small>
          {tokenData ? (
            <Box className={`${priceUp ? 'text-success' : 'text-error'}`}>
              {priceUp ? '+' : ''}
              {priceUpPercent}%
            </Box>
          ) : (
            <Skeleton variant='rect' width={60} height={20} />
          )}
        </Box>
      </Grid>
      <Grid item xs={3}>
        {tokenData && priceData ? (
          <Box width={88} height={47} position='relative'>
            <Box position='absolute' top={-30} width={1}>
              {prices.length > 0 && (
                <LineChart
                  data={prices}
                  width='100%'
                  height={120}
                  color={priceUp ? palette.success.main : palette.error.main}
                />
              )}
            </Box>
          </Box>
        ) : (
          <Skeleton variant='rect' width={88} height={47} />
        )}
      </Grid>
    </Grid>
  );
};

export default SwapTokenDetailsHorizontal;
