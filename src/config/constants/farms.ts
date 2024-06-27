import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'Flamez',
    lpAddresses: {
      1978: '0x05c86418c11d610d28268e0C2aF2C2386fB38FDd',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'Flamez-BBC LP',
    lpAddresses: {
      1978: '0x3f5A93E45756f08659Ab31f0dA851bF62E9775b4',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'GUSD-BBC LP',
    lpAddresses: {
      1978: '0x9Ed5F1C5ee394c0a487e7E6666a97e95c4bF8feE',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.gusd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'Flamez-GUSD LP',
    lpAddresses: {
      1978: '0x9744C73f19bc0AE2119dF829962e08ca74CC56B4',
      56: '0x63c618917E5632367f9f9f9D7F11E596d414a731',
    },
    token: tokens.cake,
    quoteToken: tokens.gusd,
  }
]

export default farms
