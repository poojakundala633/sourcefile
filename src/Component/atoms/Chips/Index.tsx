import { ChipProps , Chip } from '@mui/material'

import React, { FC } from 'react'

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CustomChip: FC<ChipProps> = ({ disabled, sx, label }) => {
  return (
    <Chip label={label} disabled={disabled} sx={sx} data-testid="custom-chip" />
  )
}
