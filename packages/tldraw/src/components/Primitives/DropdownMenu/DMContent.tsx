import * as React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { styled } from '~styles/stitches.config'
import { MenuContent } from '~components/Primitives/MenuContent'
import { stopPropagation } from '~components/stopPropagation'

export interface DMContentProps {
  variant?: 'menu' | 'horizontal'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  children: React.ReactNode
  overflow?: boolean
  id?: string
  side?: 'top' | 'left' | 'right' | 'bottom' | undefined
}

export function DMContent({
  sideOffset = 8,
  children,
  align,
  variant,
  id,
  overflow = false,
  side = 'bottom',
}: DMContentProps) {
  return (
    <DropdownMenu.Content
      dir="ltr"
      align={align}
      sideOffset={sideOffset}
      onEscapeKeyDown={stopPropagation}
      asChild
      id={id}
      side={side}
    >
      <StyledContent variant={variant} overflow={overflow}>
        {children}
      </StyledContent>
    </DropdownMenu.Content>
  )
}

export const StyledContent = styled(MenuContent, {
  width: 'fit-content',
  height: 'fit-content',
  minWidth: 0,
  maxHeight: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  '&::webkit-scrollbar': {
    display: 'none',
  },
  '-ms-overflow-style': 'none' /* for Internet Explorer, Edge */,
  scrollbarWidth: 'none',
  variants: {
    variant: {
      horizontal: {
        flexDirection: 'row',
      },
      menu: {
        minWidth: 128,
      },
    },
    overflow: {
      true: {
        maxHeight: '60vh',
      },
    },
  },
})
