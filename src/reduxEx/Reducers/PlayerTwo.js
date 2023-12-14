const intialState={
    name:'rajitha',
    score:70
}

export default function PlayerTwoReducer(state=intialState,action){
       const {type,payload}=action;
       switch(type){
        case 'INC_PLAYERTWO_SCORE':
            return {...state,score:state.score+1}
        case 'DEC_PLAYERTWO_SCORE':
            return {...state,score:state.score-1}
        default:
            return state;        
       }
}