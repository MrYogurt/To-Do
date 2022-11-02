import React from "react"
import { Box, Typography } from "@mui/material"
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { NewsArticlesData } from "../types/CardInfoTypes"

const marqueeAnimation = keyframes`
  0% {
    transform: translate(52%, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`

const MarqueeBox = styled(Box)`
  overflow: hidden;
  animation: ${marqueeAnimation} 800s linear infinite;
`

const NEWS_URL = "https://saurav.tech/NewsAPI/everything/cnn.json"

const useTasks = () => useQuery({
  queryKey: ["tasks"],
  queryFn: async () => {
    const { data } = await axios.get(NEWS_URL)
    return data
  },
})

export const Marquee = () => {
  const { data: newsData, error, isFetching } = useTasks()

  return (
    <MarqueeBox>
      <Box display="flex" flexDirection="row">
        {!isFetching && !error &&
          newsData?.articles?.map((article: NewsArticlesData) =>
            <Typography noWrap>{article.title}&nbsp; | &nbsp;</Typography>)
        }
      </Box>
    </MarqueeBox>
  )
}