import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Flamez',
  description: 'Flamez',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Flamez')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Flamez')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Flamez')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Flamez')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Flamez')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Flamez')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Flamez')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Flamez')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Flamez')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Flamez')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Flamez')}`,
      }
    default:
      return null
  }
}
