// Simple example of a React "smart" component

import { connect } from 'react-redux'
import CurrencyMonitor from '../components/CurrencyMonitor'
import * as actions from '../actions/currencyMonitorActionCreators'

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ currencyRate: state.currencyRate })
const mapDispatchToProps = (dispatch) => {
  const updateTicker = (data) => dispatch(actions.updateTicker(data))
  return { updateTicker }
}

// Don't forget to actually use connect!
// Note that we don't export CurrencyMonitor, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyMonitor)
