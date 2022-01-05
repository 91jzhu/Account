let id=JSON.parse(window.localStorage.getItem('id')||'0')
const createId=()=>{
    id++
    window.localStorage.setItem('id',id.toString())
    return id
}
export {createId}