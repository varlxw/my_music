import originJsonp from 'jsonp'
import axios from 'axios'

export default class HttpSeaver {
  static jsonp (url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + HttpSeaver.param(data)
    return new Promise((resolve, reject) => {
      originJsonp(url, option, (err, data) => {
        if (!err) {
          resolve(data)
        } else {
          reject(err)
        }
      })
    })
  }

  static get (url, param) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: param
      }).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  static param (data) {
    let url = ''
    for (var k in data) {
      let value = data[k] !== undefined ? data[k] : ''
      url += '&' + k + '=' + encodeURIComponent(value)
    }
    return url ? url.substring(1) : ''
  }
}
