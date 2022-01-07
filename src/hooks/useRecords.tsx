import {useEffect, useState} from "react";

export type RecordItem = {
    tags: number[]
    note: string
    type: '-' | '+'
    amount: string
    createdAt:string
}
const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])
    const addRecord = (record: RecordItem) => {
        setRecords([...records, record])
    }
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
    },[])
    useEffect(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])
    return {records, addRecord}
}

export {useRecords}