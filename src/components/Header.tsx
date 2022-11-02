import React from "react"
import { SettingsIcon } from "../icons/SettingsIcon"
import { Box, IconButton, Typography } from "@mui/material"
import { CheckIcon } from '../icons/CheckIcon'
import { HeaderInterface } from "../types/CardInfoTypes"

export const Header: React.FC<HeaderInterface> = ({ handleOpenModal }) => {
    return (
        <>
          <Box pl={2} display="flex" flexDirection="row" justifyContent="space-between">
            <Typography fontWeight="600" variant="h3">To Do</Typography>
            <IconButton onClick={handleOpenModal}>
              <SettingsIcon />
            </IconButton>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" pt={4} pl={2}>
            <CheckIcon />
            <Typography pl={2} variant="h5">Today Tasks:</Typography>
          </Box>
        </>
    )
}