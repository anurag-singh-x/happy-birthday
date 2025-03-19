import React from 'react'

const Spotify = () => {
  return (
    <iframe
      style={{borderRadius: '14px'}}
      src="https://open.spotify.com/embed/playlist/6HT8VPIugwf3aNAHmWR9jc?utm_source=generator&theme=0"
      width="400"
      className='h-5/7'
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  )
}

export default Spotify