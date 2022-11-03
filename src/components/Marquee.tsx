import React, { memo } from "react"
import { Box, Typography } from "@mui/material"
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { NewsDataInterface } from "../types/CardInfoTypes"

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

const useNews = () => useQuery({
  queryKey: ["news"],
  queryFn: async () => {
    const { data } = await axios.get<NewsDataInterface>(NEWS_URL)
    return data
  },
})

export const Marquee = memo(() => {
  const { data: newsData, error, isFetching } = useNews()

  return (
    <MarqueeBox>
      <Box display="flex" flexDirection="row">
        {!isFetching && !error &&
          newsData?.articles?.map((article, index: number) =>
            <Typography key={index} noWrap>{article.title}&nbsp; | &nbsp;</Typography>)
        }
      </Box>
    </MarqueeBox>
  )
})