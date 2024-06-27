import React from 'react'
import styled from 'styled-components'
import { Button } from '@pancakeswap/uikit'

interface PercentageButtonProps {
  onClick: () => void
}

const StyledButton = styled(Button)`
  flex-grow: 1;
`

const PercentageButton: React.FC<PercentageButtonProps> = ({ children, onClick }) => {
  return (
              
              <StyledButton scale="xs" mx="2px" p="4px 16px" variant="tertiary"  style={{color:"#268ac4", borderColor:"#268ac4"}} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default PercentageButton
