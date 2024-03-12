import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  state = {
    cryptoCurrencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyName: each.currency_name,
      currencyLogo: each.currency_logo,
    }))

    console.log(updatedData)
    this.setState({cryptoCurrencyList: updatedData, isLoading: false})
  }

  renderCryptoApp = () => {
    const {cryptoCurrencyList, isLoading} = this.state
    if (isLoading) {
      return (
        <div data-testid="loader">
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        </div>
      )
    }
    return (
      <div className="crypto-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-img"
        />
        <ul className="crypto-currency-list">
          <li className="crypto-column">
            <p className="crypto-type">Coin Type</p>
            <p className="crypto-value">USD</p>
            <p className="crypto-value">EURO</p>
          </li>
          {cryptoCurrencyList.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} cryptoDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return this.renderCryptoApp()
  }
}
export default CryptocurrencyList
