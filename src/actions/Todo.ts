const Actions = {
    addTip: function(dispatch: any,content: string) {
        dispatch({type: 'ADD_TIP', content: content});
    },
    changeState: function(dispatch: any, index: number) {
        dispatch({type: 'CHANGE_STATE', index: index});
    }
};

export default Actions;

