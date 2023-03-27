import { breakPoints } from '@/utils/breakPoints'
import { Color } from '@/utils/color'
import { Consts } from '@/utils/consts'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: ${Color.GREY};
  color: ${Color.WHITE};
  padding-top: clamp(${indents.indent10}, 5vw, ${indents.indent20});
  padding-bottom: clamp(0px, 7vw, ${indents.indent50});

  @media (max-width: ${breakPoints.Touch}) {
    padding-bottom: 0;
  }
`

export const Wrapper = styled.div`
  padding-inline: 20px;
`

export const ColumnWrapper = styled.div`
  display: flex;
  padding-bottom: clamp(${indents.indent30}, 9.4vw, ${indents.indent80});
  border-bottom: 1px solid;
`

export const EmptyColumn = styled.div`
  flex: 1;
`
export const NavigationWrapper = styled.div`
  flex: 1;
`

export const Contacts = styled.div`
  margin-bottom: clamp(${indents.indent70}, 12.5vw, ${indents.indent160});
`

export const Contact = styled.div`
  display: flex;
  border-bottom: 1px solid ${Color.WHITE};
  padding-block: clamp(${indents.indent5}, 1.25vw, ${indents.indent20});
  font-size: clamp(11px, 2.2vw, 16px);
`

export const Title = styled.span`
  flex: 1;
  font-size: 14px;
  text-transform: uppercase;

  @media (max-width: ${breakPoints.Tablet}) {
    font-size: max(11px, 2.2vw);
  }
`

export const Name = styled.span`
  flex: 1;
  line-height: 120%;
`
export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${indents.indent20};
`

export const LogoWrapper = styled.div<{ isDarkMode?: boolean }>`
  cursor: pointer;
  width: clamp(${indents.indent60}, 15.5vw, ${indents.indent150});

  transition: filter ${Consts.toggleModDuration};
`

export const BottomLine = styled.div`
  border-bottom: 1px solid ${Color.WHITE};

  @media (max-width: ${breakPoints.Touch}) {
    border-bottom: none;
  }
`
