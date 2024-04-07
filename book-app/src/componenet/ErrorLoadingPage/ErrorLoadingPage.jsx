import React from 'react'
import Image002 from "./../../assets/undraw_search_app_oso2.svg"

const ErrorLoadingPage = () => {
  return (
    <div className="flex justify-center items-center gap-[4rem]">

      <div>
        <h1 className='font-bold text-lg uppercase'>This page is out of reach....</h1>
      </div>
      <div>
        <img src={Image002} placeholder="blur" alt="service Image" />
      </div>
    </div>
  )
}

export default ErrorLoadingPage
