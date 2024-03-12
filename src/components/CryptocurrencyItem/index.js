import {Component} from 'react'

import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {cryptoDetails} = this.props
    const {usdValue, euroValue, currencyLogo, currencyName} = cryptoDetails
    return (
      <li className="crypto-item">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="item-type">{currencyName}</p>
        <p className="item-value">{usdValue}</p>
        <p className="item-value">{euroValue}</p>
      </li>
    )
  }
}

export default CryptocurrencyItem
