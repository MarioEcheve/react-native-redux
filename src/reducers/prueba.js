const initialState = [
    {
        id : 1,
        desc : 'Prueba 1 ',
        completado : false
    }, 
    {
        id : 2,
        desc : 'Prueba 2 ',
        completado : true
    },
    {
        id : 3,
        desc : 'Prueba 3 ',
        completado : true
    }
]

const COMPLETADO = 'COMPLETADO';
const SUBMIT = 'SUBMIT';
const START_SUBMIT = 'START_SUBMIT';
const ERROR_SUBMIT = 'ERROR_SUBMIT';

export const completado = id => ({
    type : COMPLETADO,
    payload: id
})

export const submit = prueba => ({
    type : SUBMIT,
    payload: prueba
})

export const startSubmit = () =>({
    type : START_SUBMIT
})
export const errorSubmit = () =>{
    type : ERROR_SUBMIT,
    error
}
export default (state = initialState, action)=>{
    console.log(state);
    switch(action.type){
        case COMPLETADO:
            // itero el arreglo y creo un arreglo nuevo
            // pregunto por el id y lo comparo con el del payload
            // si son los mismos hacemos una copia y actualiza el estado a true
            // de lo contrario devuelve el stado actual
            return state.map(x=>x.id === action.payload ? ({...x, completado : !x.completado}) : x)
        case SUBMIT:
            console.log(action);
            return [action.payload].concat(state);
        default:
            return state;
    }
}

export const savePrueba = text => async (dispatch, getState) => {
    const state = getState();
    dispatch(startSubmit());
    try{
        const prueba = {
            desc : text,
            completado : false
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
            method :'POST',
            body : JSON.stringify(prueba)
        });
        const id = await response.json();
        dispatch(submit({...prueba, ...id}));
    }catch(e){
        dispatch(errorSubmit(e))
    }
}