import React, { useContext } from "react"
import { Box, Typography } from "@mui/material"
import { Switcher } from "./Switcher"
import { TaskItemInterface } from "@/types/CardInfoTypes"
import { AppContext } from "../utils/Contexts"

export const TaskItem: React.FC<TaskItemInterface> = ({ taskData, indexOfTask, indexOfTasksSet }) => {
    const [ handleToggleCompleting ] = useContext(AppContext)

    const handleChange = () => {
        handleToggleCompleting(indexOfTasksSet, indexOfTask, !taskData.completed)
    }

    return (
        <Box display="flex" flexDirection="row" p={1}>
            <Box width="5px" height="40px" bgcolor={taskData.lineColor} borderRadius="3px" />
            <Box width="320px" display="flex" justifyContent="space-between">
                <Box>
                    <Typography
                        sx={{ textDecoration: taskData.completed ? "line-through" : "none" }}
                        fontSize="24px"
                        fontFamily="Abhaya Libre"
                        fontWeight="500"
                        lineHeight="28px"
                        pl={2}
                        variant="h5"
                    >{taskData.name}</Typography>
                    <Box width="200px">
                        <Typography
                            fontSize="14px"
                            lineHeight="17px"
                            noWrap
                            pl={2}
                            variant="h6"
                            color="rgba(255, 255, 255, 0.6)"
                        >{taskData.description}</Typography>
                    </Box>
                </Box>
                <Switcher onChange={handleChange} checked={taskData.completed} />
            </Box>
        </Box>
    )
}