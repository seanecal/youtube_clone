import { Box, CardMedia, CardContent, Typography, Card } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utilities/constants'


export function ChannelCard({channel}) {
  return (
    <Box
      sx={{ boxShadow: 'none', borderRadius: "20px" }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF' }}>
          <CardMedia
            image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channel?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  )
}
