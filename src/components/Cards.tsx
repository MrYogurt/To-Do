import React, { memo } from "react"
import { MockDataInterface } from "../types/CardInfoTypes"
import { TasksAccordion } from "./TasksAccordion"
import { TasksCard } from "./TasksCard"

export const Cards: React.FC<{ data: MockDataInterface[] }> = memo(({ data }) => {
    return (
      <>
        {data.map((tasksSet, indexOfTasksSet) =>
          indexOfTasksSet === 0
          ? <TasksCard key={tasksSet.date} tasksSet={tasksSet} indexOfTasksSet={indexOfTasksSet} />
          : <TasksAccordion key={tasksSet.date} tasksSet={tasksSet} indexOfTasksSet={indexOfTasksSet} />
        )}
      </>
    )
})