import React from "react"
import { styled, Switch, SwitchProps } from "@mui/material"
import { COLORS } from "../utils/Constants"
import { CrossIcon } from "../icons/CrossIcon"
import { CheckedIcon } from "../icons/CheckedIcon"

export const Switcher = styled((props: SwitchProps) => (
    <Switch
      icon={<CrossIcon />}
      checkedIcon={<CheckedIcon />}
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple {...props}
    />
  ))(({ theme }) => ({
    width: 46,
    height: 30,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? COLORS.lightGreen : COLORS.lightGreen2,
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: COLORS.green,
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 30 / 2,
      backgroundColor: theme.palette.mode === 'light' ? COLORS.blue : COLORS.grey,
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));