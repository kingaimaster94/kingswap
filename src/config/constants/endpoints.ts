export const GRAPH_API_PROFILE = process.env.REACT_APP_GRAPH_API_PROFILE
export const GRAPH_API_PREDICTION = process.env.REACT_APP_GRAPH_API_PREDICTION
export const GRAPH_API_LOTTERY = process.env.REACT_APP_GRAPH_API_LOTTERY
export const SNAPSHOT_VOTING_API = process.env.REACT_APP_SNAPSHOT_VOTING_API
export const SNAPSHOT_BASE_URL = process.env.REACT_APP_SNAPSHOT_BASE_URL
export const SNAPSHOT_API = `${SNAPSHOT_BASE_URL}/graphql`
export const SNAPSHOT_HUB_API = `${SNAPSHOT_BASE_URL}/api/message`
export const BITQUERY_API = 'https://graphql.bitquery.io'

/**
 * V1 will be deprecated but is still used to claim old rounds
 */
export const GRAPH_API_PREDICTION_V1 = 'https://api.thegraph.com/subgraphs/name/pancakeswap/prediction'
// export const INFO_CLIENT = 'https://dynograph.io/subgraphs/name/exchange' // 'http://66.165.225.90:1111/subgraphs/name/exchange' // http://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2
// export const BLOCKS_CLIENT = 'https://dynograph.io/subgraphs/name/blocks' // 'http://66.165.225.90:1111/subgraphs/name/blocks' // https://api.thegraph.com/subgraphs/name/pancakeswap/blocks
export const INFO_CLIENT = 'https://subgraphs.butane.tech/subgraphs/name/exchange'
export const BLOCKS_CLIENT = 'https://subgraphs.butane.tech/subgraphs/name/blocks'