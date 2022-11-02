import React, { useState } from "react"
import { Box, Collapse, IconButton, Typography } from "@mui/material"
import { TasksCardInterface } from "../types/CardInfoTypes"
import { ExpandArrowIcon } from "../icons/ExpandArrowIcon"
import { TaskItem } from "./TaskItem"
import { COLORS, SHADOW } from "../utils/Constants"

export const TasksAccordion: React.FC<TasksCardInterface> = ({ tasksSet, indexOfTasksSet }) => {
    const [ isOpen, setOpen ] = useState<boolean>(false)

    return (
        <Box pt={4}>
            <Box
                p={2}
                borderRadius="40px"
                bgcolor={COLORS.cardBackground}
                style={SHADOW}
            >
                <Box pl={2} display="flex" flexDirection="row">
                    <Box width="5px" height="40px" bgcolor={COLORS.untaggedLine} borderRadius="3px" />
                    <Box width="95%" display="flex" alignItems="center" justifyContent="space-between">
                        <Typography pl={2} variant="h5">{`${tasksSet.date} Tasks`}</Typography>
                        <IconButton onClick={() => setOpen(!isOpen)}>
                            <ExpandArrowIcon expanded={isOpen} />
                        </IconButton>
                    </Box>
                </Box>
                <Collapse in={isOpen} mountOnEnter unmountOnExit>
                    {tasksSet.tasks.map((taskData, indexOfTask) => (
                        <Box key={taskData.id} px={1} pt={2}>
                            <TaskItem
                                indexOfTask={indexOfTask}
                                indexOfTasksSet={indexOfTasksSet}
                                taskData={taskData}
                            />
                        </Box>
                    ))}
                </Collapse>
            </Box>
        </Box>
      
    );
  }