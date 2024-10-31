/* eslint-disable no-unused-vars */
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const SmallLoader = () => {
    return (
        <>
            <ThreeDots
                visible={true}
                height="20"
                width="20"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </>
    )
}

export default SmallLoader