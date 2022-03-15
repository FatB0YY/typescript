function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  msg = 'error msg'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    }
  } else {
      return {
          info: res.header + res.msg
      }
  }
}


// ===============================
type AlertType = 'succes' | 'danger' | 'warning'
function setAlertType(type: AlertType){
    // code
}
setAlertType('succes')
setAlertType('warning')
// setAlertType('default') error
