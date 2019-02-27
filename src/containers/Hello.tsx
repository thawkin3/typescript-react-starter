import Hello3 from '../components/Hello3';
import * as actions from '../actions';
import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.IncrementEnthusiasm()),
        onDecrement: () => dispatch(actions.DecrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello3);
