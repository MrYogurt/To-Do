import React, { memo } from "react"
import { Box, Dialog, Typography } from "@mui/material"
import { Switcher } from "./Switcher"
import { SettingsModalInterface } from "../types/CardInfoTypes"
import { COLORS } from "../utils/Constants"

export const SettingsModal: React.FC<SettingsModalInterface> = memo(({
    isOpen,
    marqueeEnabled,
    handleCloseModal,
    setMarqueeEnabled
}) => {
    return (
        <Dialog
            PaperProps={{
                style: {
                    borderRadius: "10%",
                    backgroundColor: COLORS.dialogBackground
                }
            }}
            open={isOpen}
            onClose={handleCloseModal}
        >
        <Box
            display="flex"
            p={4}
            flexDirection="row"
            justifyContent="space-between"
            px={2}
            bgcolor={COLORS.dialogBackground}
            width="200px"
            height="200px"
        >
          <Typography>Enable running line: </Typography>
          <Switcher checked={marqueeEnabled} onChange={() => setMarqueeEnabled(!marqueeEnabled)} />
        </Box>
      </Dialog>
    )
})