import { connect } from 'react-redux';
import Actions from '../actions/Todo';
import  { Todo } from '../components/Todo';

function mapStateToProps(state: any) {
    return JSON.parse(JSON.stringify(state.Todo));
}
function mapDispatchToProps(dispatch: any, ownProps: any) {
    const fnProps = {
        addTip(content: string) {
            Actions.addTip(dispatch, content);
        },
        changeState(index: number) {
            Actions.changeState(dispatch, index);
        }
    };
    return fnProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
