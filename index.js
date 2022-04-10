import redux from 'redux';

const firstState ={
    money: 0
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const MENSAGE = 'mensage'
const NOVALUE = 'novalue'
const moreMoney =(value)=>{
   if(!isNaN(value)){
       if(value>0){
           return{
               type: DECREMENT,
               payload: value
           }
       }else{
           return{
               type: DECREMENT,
               payload: value
           }
       }
   }
   if(typeof value ==='string'){
       return{
           type:MENSAGE,
           payload:value
       }
   }
  if(!value){
      return{
          type:NOVALUE,
          payload:value =firstState
      }
  }
}

const reducer =(state=firstState,action)=>{ //action is function
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                money:state.money + action.payload
            }
        case DECREMENT:
            return{
                ...state,
                money: state.money - action.payload
            }
        case MENSAGE:
            return{
                ...state,
                money:action.payload
            }
        case NOVALUE:
            return{
                ...state,
                money:action.payload
            }
            default: return state
    }
}

const{createStore}= redux
const store = createStore(reducer)

store.dispatch(moreMoney())

console.log('actual money',store.getState())

