import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="#swap" className="active" rel="noopener noreferrer">
        <TranslatedText translationId={8}>Swap</TranslatedText>
      </StyledAbsoluteLink>
      {/* <StyledAbsoluteLink href="#" rel="noopener noreferrer">
        <TranslatedText translationId={2}>Farming(Soon)</TranslatedText>
      </StyledAbsoluteLink> */}
      {/* <StyledAbsoluteLink href="#" rel="noopener noreferrer">
        <TranslatedText translationId={2}>Staking(Soon)</TranslatedText>
      </StyledAbsoluteLink> */}
      <StyledAbsoluteLink
        href="https://poocoin.app/tokens/0x01bba2eef44c3493ddc44e399b96a466875d5d83"
        rel="noopener noreferrer"
      >
        <TranslatedText translationId={4}>PooCoin Chart</TranslatedText>
      </StyledAbsoluteLink>
      {/* <StyledAbsoluteLink href="#" rel="noopener noreferrer">
        <TranslatedText translationId={14}>Vote EightBox!!!</TranslatedText>
      </StyledAbsoluteLink> */}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 18px;
  line-height: 40px;
  font-weight: 900;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #80858a;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #ffb047;
  }
  &.active {
    color: #ffb047;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
