export const addText = (el) =>{
    return {type: 'ADD_TODO', payload:el}
}
export const delText = (el) =>{
    return {type: 'DEL_TODO', payload:el}
}
export const delALL = (el) => {
    return {type:'ALL_DEL',payload: el}
}