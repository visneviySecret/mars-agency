import { breakPoints } from '@/utils/breakPoints'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: ${Color.GREY};
  color: ${Color.WHITE};
  padding-top: clamp(${indents.indent10}, 5vw, ${indents.indent20});
  margin-bottom: clamp(${indents.indent10}, 3.2vw, ${indents.indent20});

  @media (max-width: ${breakPoints.Touch}) {
    padding-bottom: 0;
  }
`

export const Wrapper = styled.div`
  padding-inline: clamp(${indents.indent10}, 2.4vw, ${indents.indent20});
`

export const ColumnWrapper = styled.div`
  display: flex;
  padding-bottom: clamp(${indents.indent30}, 9.4vw, ${indents.indent80});
  border-bottom: 1px solid ${Color.GREY10};
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
  border-bottom: 1px solid ${Color.GREY10};
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
  align-items: center;
  padding-bottom: clamp(9px, 2.3vw, 20px);
`

export const BottomWrapper = styled(SocialWrapper)`
  padding-block: 7px 7px;
  padding-block: clamp(5px, 1.1vw, 16px) clamp(4px, 1.1vw, 17px);
`

export const CopyWriteText = styled.span`
  font-size: clamp(8px, 1.88vw, 14px);
  line-height: 130%;
  text-transform: uppercase;
`

export const LogoWrapper = styled.div`
  width: clamp(${indents.indent60}, 15.5vw, ${indents.indent150});
  height: clamp(12px, 3.3vw, 30px);
`

export const BottomLine = styled.div`
  border-bottom: 1px solid ${Color.WHITE};
`
