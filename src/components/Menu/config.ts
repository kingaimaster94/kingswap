import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: t('Trade'),
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: t('Exchange'),
  //       href: '/swap',
  //     },
  //     {
  //       label: t('Liquidity'),
  //       href: '/pool',
  //     },
  //   ],
  // },
  {
    label: t('Swap'),
    icon: 'TradeIcon',
    href: '/swap',
  },
  {
    label: t('Liquidity'),
    icon: 'PoolIcon',
    href: '/pool',
  },
  {
    label: t('Farming'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Staking'),
    icon: 'StakingIcon',
    href: '/pools',
  }, 
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: '/info',
  },
  {
    label: t('Launchpad'),
    icon: 'IfoIcon',
    href: 'https://gaspad.io/'
  }, 
  // {
  //   label: t('Referral'),
  //   icon: 'ReferralIcon',
  //   href: '/referral',
  // },  
  // {
  //   label: t('Lottery'),
  //   icon: 'LotteryIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },
 
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      // {
      //   label: t('Contact'),
      //   href: 'https://docs.pancakeswap.finance/contact-us',
      // },
      // {
      //   label: t('Voting'),
      //   href: '/voting',
      // },
      {
        label: t('Github'),
        href: 'https://github.com/flamez-io',
      },
      {
        label: t('Whitepaper'),
        href: 'http://docs.flamez.io/',
      },
      // {
      //   label: t('SolidProof'),
      //   href: 'https://solidproof.io/',
      // },
      // {
      //   label: t('Merch'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
