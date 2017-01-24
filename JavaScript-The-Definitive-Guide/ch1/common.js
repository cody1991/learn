(function () {
  'use strict'

  const amount = document.getElementById('amount')
  const apr = document.getElementById('apr')
  const years = document.getElementById('years')
  const zipcode = document.getElementById('zipcode')
  const payment = document.getElementById('payment')
  const total = document.getElementById('total')
  const totalinterest = document.getElementById('totalinterest')
  const graph = document.getElementById('graph')

  const calculate = document.getElementById('calculate')
  const lenders = document.getElementById('lenders')

  calculate.addEventListener('click', doCalculate, false)

  if (window.localStorage && window.localStorage.load_amount) {
    amount.value = localStorage.load_amount
    apr.value = localStorage.load_apr
    years.value = localStorage.load_years
    zipcode.value = localStorage.load_zipcode
  }

  function doCalculate() {
    console.log('-- do calculate --')

    // Amount of the loan
    let principal = parseFloat(amount.value)

    // monthly iterest
    let interest = parseFloat(apr.value) / 100 / 12

    // month count
    let payments = parseFloat(years.value) * 12

    let x = Math.pow(1 + interest, payments)
    let monthly = (principal * x * interest) / (x - 1)

    if (isFinite(monthly)) {
      payment.innerHTML = monthly.toFixed(2)
      total.innerHTML = (monthly * payments).toFixed(2)
      totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2)

      save(amount.value, apr.value, years.value, zipcode.value)

      try {
        getLenders(amount.value, apr.value, years.value, zipcode.value)
        chart(principal, interest, monthly, payments)
      } catch (e) {
        console.log(e)
      }
    } else {
      payment.innerHTML = ""
      total.innerHTML = ""
      totalinterest.innerHTML = ""
      chart()
    }
  }

  function chart(principal, interest, monthly, payments) {
    // 可以清除重置画布
    graph.width = graph.width

    if (arguments.length === 0 || !graph.getContext) {
      return
    }

    const ctx = graph.getContext('2d')
    let width = graph.width
    let height = graph.height

    function paymentToX(n) {
      return n * width / payments
    }

    function amountToY(a) {
      return height - (a * height / (monthly * payments * 1.05))
    }

    console.log('-- do chart --')

    ctx.moveTo(paymentToX(0), amountToY(0))
    ctx.lineTo(paymentToX(payments), amountToY(monthly * payments))
    ctx.lineTo(paymentToX(payments), amountToY(0))
    ctx.closePath()
    ctx.fillStyle = '#f88'
    ctx.fill()

    ctx.font = 'bold 12px sans-serif'
    ctx.fillText('Total Interest Payment', 20, 20)

    let equity = 0
    ctx.beginPath()
    ctx.moveTo(paymentToX(0), amountToY(0))

    for (let p = 1; p <= payments; p++) {
      let thisMonthsInterest = (principal - equity) * interest
      equity += (monthly - thisMonthsInterest)
      ctx.lineTo(paymentToX(p), amountToY(equity))
    }

    ctx.lineTo(paymentToX(payments), amountToY(0))
    ctx.closePath()
    ctx.fillStyle = 'green'
    ctx.fill()
    ctx.fillText('Total Equity', 20, 35)

    let bal = principal
    ctx.beginPath()
    ctx.moveTo(paymentToX(0), amountToY(bal))

    for (let p = 1; p <= payments; p++) {
      let thisMonthsInterest = bal * interest
      bal -= (monthly - thisMonthsInterest)
      ctx.lineTo(paymentToX(p), amountToY(bal))
    }
    ctx.lineWidth = 3
    ctx.stroke()
    ctx.fillStyle = "black"
    ctx.fillText("Load Balance", 20, 50)

    ctx.textAlign = 'center'
    let y = amountToY(0)

    for (let year = 1; year * 12 <= payments; year++) {
      let x = paymentToX(year * 12)
      ctx.fillRect(x - 0.5, y - 3, 1, 3)
      if (year == 1) {
        ctx.fillText("Year", x, y - 5)
      }
      if (year % 5 === 0 && year * 12 !== payments) {
        ctx.fillText(String(year), x, y - 5)
      }
    }

    ctx.textAlign = 'right'
    ctx.textBaseline = 'middle'

    let ticks = [monthly * payments, principal]
    let rightEdge = paymentToX(payments)

    for (let i = 0; i < ticks.length; i++) {
      let y = amountToY(ticks[i])
      ctx.fillRect(rightEdge - 3, y - 0.5, 3, 1)
      ctx.fillText(String(ticks[i].toFixed(0)), rightEdge - 5, y)

    }
  }

  function getLenders(amount, apr, years, zipcode) {
    if (!window.XMLHttpRequest) {
      return
    }

    const url = 'getLenders.php' +
      '?amt=' + encodeURIComponent(amount) +
      '&apr=' + encodeURIComponent(apr) +
      '&yrs=' + encodeURIComponent(years) +
      '&zip=' + encodeURIComponent(zipcode)

    const req = new XMLHttpRequest()
    req.open("GET", url)
    req.send(null)

    req.onreadystatechange = () => {

      if (req.readyState == 4 && req.status == 200) {
        const response = req.responseText

        console.log(response)

        const lendersData = JSON.parse(response)

        let list = ''
        for (let i = 0; i < lendersData.length; i++) {
          list += "<li><a href='" +
            lendersData[i].url +
            "'>" +
            lendersData[i].name +
            "</a>"
        }

        lenders.innerHTML = "<ul>" + list + "</ul>"
      }
    }
  }

  function save(amount, apr, years, zipcode) {
    if (window.localStorage) {
      localStorage.load_amount = amount
      localStorage.load_apr = apr
      localStorage.load_years = years
      localStorage.load_zipcode = zipcode
    }
  }
})();
