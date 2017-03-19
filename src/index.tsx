import * as React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Todo from './containers/Todo';
import reducers from './reducers';

const store = createStore(reducers, (window as any).devToolsExtension && (window as any).devToolsExtension(), applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Todo />
    </Provider>,
    document.getElementById('container')
);
