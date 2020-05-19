import { connect } from 'react-redux'
import AdminPage from '../components/AdminPage'

const mapStateToProps = (state) => ({ currencyRate: state.currencyRate })

export default connect(mapStateToProps)(AdminPage)
