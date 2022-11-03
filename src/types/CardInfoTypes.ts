export interface AppInterface {
    mockedData: MockDataInterface[]
}

export interface HeaderInterface {
    handleOpenModal: () => void
}

export interface MarqueeInterface {
    newsData: NewsData
}

export interface NewsDataInterface {
    status: string,
    totalResults: number,
    articles: NewsArticlesData[]
}

export interface NewsArticlesData {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {
      id: string,
      name: string
    },
    title: string,
    url: string,
    urlToImage: string
}
  
export interface NewsData {
    articles: NewsArticlesData[],
    status: string,
    totalResults: number
}

export interface TaskItemInterface {
    taskData: TasksData,
    indexOfTasksSet: number,
    indexOfTask: number
}

export interface TasksCardInterface {
    indexOfTasksSet: number,
    tasksSet: MockDataInterface
}

export interface ExpandArrowIconInterface {
    expanded: boolean
}

export interface SettingsModalInterface {
    isOpen: boolean,
    marqueeEnabled: boolean,
    handleCloseModal: () => void,
    setMarqueeEnabled: (tickerEnabled: boolean) => void
}

export interface MockDataInterface {
    date: string,
    tasks: TasksData[]
}

export interface TasksData {
    id: number,
    name: string,
    description: string,
    lineColor: string,
    completed: boolean
}