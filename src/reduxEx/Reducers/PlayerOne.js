const intialState={
    name:'lavanya',
    score:50
}

export default function PlayerOneReducer(state=intialState,action){
       const {type,payload}=action;
       switch(type){
        case 'INC_PLAYERONE_SCORE':
            return {...state,score:state.score+1}
        case 'DEC_PLAYERONE_SCORE':
            return {...state,score:state.score-1}
        default:
            return state;        
       }
}