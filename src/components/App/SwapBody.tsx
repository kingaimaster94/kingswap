import React from 'react'
import styled from 'styled-components'
import { SwapCard } from '@pancakeswap/uikit'

export const SwapBodyWrapper = styled(SwapCard)`
  border-radius: 24px;
  max-width: 436px;
  width: 100%;
  z-index: 1;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function SwapBody({ children }: { children: React.ReactNode }) {
  return <SwapBodyWrapper>{children}</SwapBodyWrapper>
}
