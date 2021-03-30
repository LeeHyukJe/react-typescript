import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

function useReactQuery() {
    // return useQuery(['fetch'], () => axios.get("https://www.naver.com"))
    return { data: "hello world" }
}

function Test() {
    const { data } = useReactQuery()
    return(
        <div>
            { data }
        </div>
    )
}

export { useReactQuery, Test }