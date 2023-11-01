import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
        <Image 
            width={300}
            alt='Logo'
            height={300}
            src='/logo.svg'
        />
    </div>
  )
}

export default Logo