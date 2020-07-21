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

export const completado = id => ({
    type : COMPLETADO,
    payload: id
})

export const submit = text => ({
    type : SUBMIT,
    payload: {
        id: Math.random().toString(36),
        desc : text,
        completado : false
    }
})


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
  