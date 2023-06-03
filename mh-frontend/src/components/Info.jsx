import React from 'react'

const Info = ({title, className}) => {
  return (
    <>
      <span className={`${className} border font-semibold border-primary rounded-lg bg-gray-200 py-1 px-[2rem] mx-[1rem] ml-4`}>{title}</span>
    </>
  )
}

export default Info
