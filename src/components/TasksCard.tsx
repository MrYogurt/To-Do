import React from "react"
import { Box } from "@mui/material"
import { TasksCardInterface } from "@/types/CardInfoTypes"
import { TaskItem } from "./TaskItem"
import { COLORS, SHADOW } from "../utils/Constants"

export const TasksCard: React.FC<TasksCardInterface> = ({ tasksSet, indexOfTasksSet }) => {
    return (
        <Box pt={4}>
            <Box
                display="flex"
                flexDirection="column"
                bgcolor={COLORS.cardBackground}
                p={2}
                borderRadius="40px"
                alignItems="center"
                style={SHADOW}
            >
                {tasksSet.tasks.map((taskData, indexOfTask) => (
                    <TaskItem
                        key={taskData.id}
                        indexOfTask={indexOfTask}
                        indexOfTasksSet={indexOfTasksSet}
                        taskData={taskData}
                    />
                ))}
            </Box>
        </Box>
    )
}