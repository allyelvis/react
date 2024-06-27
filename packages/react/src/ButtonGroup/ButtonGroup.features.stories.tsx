import React from 'react'
import type {Meta} from '@storybook/react'
import ButtonGroup from './ButtonGroup'
import {Button, IconButton} from '../Button'
import {PlusIcon, DashIcon} from '@primer/octicons-react'
import {Tooltip} from '../next'
import {Box, ThemeProvider, BaseStyles} from '..'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup/Features',
  component: ButtonGroup,
} as Meta<typeof ButtonGroup>

export const IconButtons = () => (
  <ButtonGroup>
    <IconButton icon={PlusIcon} aria-label="Add" />
    <IconButton icon={DashIcon} aria-label="Subtract" />
  </ButtonGroup>
)

export const IconButtonsWithTooltip = () => (
  <ButtonGroup>
    <Tooltip text="Add" type="label">
      <IconButton icon={PlusIcon} aria-label="Add" />
    </Tooltip>
    <Tooltip text="Subtract" type="label">
      <IconButton icon={DashIcon} aria-label="Subtract" />
    </Tooltip>
  </ButtonGroup>
)
export const ButtonAndLink = () => (
  <ButtonGroup>
    <Button>Button</Button>
    <Button as="a" href="https://primer.style">
      Link
    </Button>
  </ButtonGroup>
)
