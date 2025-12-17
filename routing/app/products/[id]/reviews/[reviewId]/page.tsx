import React from 'react'

const page = async ({params}: {params: Promise<{id: string, reviewId: string}>}) => {
    const {id, reviewId} =  await params
  return (
    <div>
        <h1>Id - {id}</h1>
        <h1>Review Id - {reviewId}</h1>
    </div>
  )
}

export default page