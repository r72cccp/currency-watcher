import { connect } from 'react-redux'
import AdminPage from '../components/AdminPage'
import * as actions from '../actions/currencyMonitorActionCreators'

const mapStateToProps = (state) => ({ currencyRate: state.currencyRate })
const mapDispatchToProps = (dispatch) => {
  const setForcedCurrencyRate = ({ pair, buy, sell, expiredAt }) => {
    dispatch(actions.setForcedCurrencyRate({ pair, buy, sell, expiredAt }))
  }

  return { setForcedCurrencyRate }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
