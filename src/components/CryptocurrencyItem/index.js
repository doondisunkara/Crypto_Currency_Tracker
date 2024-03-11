import {Component} from 'react'

import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {cryptoDetails} = this.props
    const {id, usdValue, euroValue, currencyLogo, currencyName} = cryptoDetails
    return (
      <li className="crypto-item">
        <img src={currencyLogo} alt={id} className="currency-logo" />
        <p className="item-type">{currencyName}</p>
      </li>
    )
  }
}

export default CryptocurrencyItem
