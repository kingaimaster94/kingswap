import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      1978: '0x6e2c1dbAd941dC69457264ABa9110Ef7D2553679',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
