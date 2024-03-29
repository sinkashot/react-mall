import axios from "axios"
import {pageParamType} from "../types/pageType.ts";

// export const API_SERVER_HOST = 'http://localhost:3000'
export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/todo`

export const getOne = async (tno: number) => {
    const res = await axios.get(`${prefix}/${tno}`)
    return res.data
}

export const getList = async (pageParam: pageParamType) => {
    // const { page, size } = pageParam
    const res = await axios.get(`${prefix}/list`, {params:{...pageParam}})
    return res.data
}