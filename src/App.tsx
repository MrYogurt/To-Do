import React, { useCallback, useState } from 'react'
import { Box, Slide } from '@mui/material'
import { AppContext } from './utils/Contexts'
import { AppInterface, MockDataInterface } from './types/CardInfoTypes'
import { SettingsModal } from './components/SettingsModal'
import { Marquee } from './components/Marquee'
import { Header } from './components/Header'
import { Cards } from './components/Cards'
import { COLORS } from './utils/Constants'

const App: React.FC<AppInterface> = ({ mockedData }) => {
  const [ data, setData ] = useState<MockDataInterface[]>(mockedData)
  const [ isOpen, setOpen ] = useState<boolean>(false)
  const [ marqueeEnabled, setMarqueeEnabled ] = useState<boolean>(false)

  const handleToggleCompleting = (indexOfTasksSet: number, indexOfTask: number, status: boolean) => {
    setData(prevProps => {
      const slicedData = prevProps.slice()
      slicedData[indexOfTasksSet].tasks[indexOfTask].completed = status
      return slicedData
    })
  }

  const handleOpenModal = useCallback(() => setOpen(true), [])
  const handleCloseModal = useCallback(() => setOpen(false), [])

  return (
    <AppContext.Provider value={[handleToggleCompleting]}>
      <Box width="390px" p={2} px={4}>
        <Header handleOpenModal={handleOpenModal} />
        <Cards data={data} />
      </Box>
      <Slide direction="down" in={marqueeEnabled} mountOnEnter unmountOnExit>
        <Box
          height="25px"
          bgcolor={COLORS.marqueeBackground}
          position="sticky"
          overflow="hidden"
          top={0}
        >
          <Marquee />
        </Box>
      </Slide>
      <SettingsModal
        isOpen={isOpen}
        marqueeEnabled={marqueeEnabled}
        handleCloseModal={handleCloseModal}
        setMarqueeEnabled={setMarqueeEnabled}
      />
    </AppContext.Provider>
  );
}

export default App;
