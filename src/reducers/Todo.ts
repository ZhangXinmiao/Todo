/// <reference path="./interface.d.ts"/>
const initialState: InitState = {
    tips: [
    ]
};

const Reducer = function (state = initialState, action: any) : InitState {
    switch (action.type) {
        case 'ADD_TIP':
            {
                let newTip = state.tips.slice(0);
                newTip.push({
                    content: action.content,
                    completed: false
                });
                return (<any>Object).assign({}, state, {
                    tips: newTip
                });
            }
        case 'CHANGE_STATE':
            {
                let newTip = state.tips.slice(0);
                newTip[action.index].completed = !newTip[action.index].completed;
                console.log(newTip);
                return (<any>Object).assign({}, state, {
                    tips: newTip
                });
            }
        default:
            return state;
    }
};

export default Reducer;
