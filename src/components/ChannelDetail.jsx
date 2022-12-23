import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utilities/fetchFromAPI'
import { Video, ChannelCard} from './'

export function ChannelDetail() {
  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(()=> {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=> setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=> setVideos(data?.items))
  },[id])


  return(
    <Box minHeight="95vh">

    </Box>
  )
}
