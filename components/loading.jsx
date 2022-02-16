import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => (
  <>
    <ReactLoading type='spin' color='#ccc' height={100} width={100} className='absolute z-20' />
  </>
)

export default Loading
