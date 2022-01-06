import {useEffect, useState} from "react";
import {createId} from "../lib/createId";

const useTags=()=>{
    const [tags, setTags] = useState<{ id: number, name: string }[]>([])
    useEffect(()=>{
        let localTags=JSON.parse(window.localStorage.getItem('tags')||'[]')
        if(localTags.length===0){
            localTags=[
                {id: createId(), name: '衣'},
                {id: createId(), name: '食'},
                {id: createId(), name: '住'},
                {id: createId(), name: '行'}
            ]
        }
        setTags(localTags)
    },[])
    useEffect(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },[tags])
    const findTag=(id:number)=> tags.filter(tag=>tag.id===id)[0]
    const findTagIndex=(id:number)=>{
        for(let i=0;i<tags.length;i++){
            if(tags[i].id===id){
                return i
            }
        }
    }
    const addTag = () => {
        let tagName = window.prompt('请输入标签名');
        (tagName&&!tagName.includes(" ")) && setTags([...tags, {id:createId(),name:tagName}])
    }
    const updateTag=(id:number,obj:{name:string})=>{
        setTags(tags.map(tag=>tag.id===id?{id,name:obj.name}:tag))
    }
    const deleteTag=(id:number)=>{
        setTags(tags.filter(tag=>tag.id!==id))
    }
    const getName = (id: number) => {
        const tag=tags.filter(tag=>tag.id===id)[0]
        return tag?tag.name:""
    }
    return {tags,setTags,findTag,updateTag,findTagIndex,deleteTag,addTag,getName}
}

export {useTags}