import React from "react";

interface AppContextInterface {
    handleToggleCompleting: (indexOfTasksSet: number, indexOfTask: number, status: boolean) => void
}

export const AppContext = React.createContext<AppContextInterface>({ handleToggleCompleting: () => {} })