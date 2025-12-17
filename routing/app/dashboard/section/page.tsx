import Link from 'next/link'
import React from 'react'

const SectionPage = () => {
  return (
    <div>
        <h1>Section Page</h1>
        <Link href={"/settings"}>Go to settings</Link>
        <br />
        <Link href={"/admin"}>Go to Admin Page</Link>
        
    </div>
  )
}

export default SectionPage