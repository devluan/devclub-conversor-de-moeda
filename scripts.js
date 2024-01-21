const convertButton = document.querySelector(".convert-button");
const coinSelect = document.querySelector(".coin-select");

async function convertValues () {
  const inputCoinValues = document.querySelector(".input-coin").value;

  const coinValuesToConvert = document.querySelector(".value-coin-to-convert"); //valor do real inserido

  const coinValuesConverted = document.querySelector(".value-coin"); //valor da moeda convertida

  const coinData = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(res => res.json());

  console.log(coinSelect.value);

  const dolarToday = coinData.USDBRL.high;
  const euroToday = coinData.EURBRL.high;
  const libraToday = coinData.GBPBRL.high;
  const bitcoinToday = coinData.BTCBRL.high;

  if (coinSelect.value == "dolar") {
    //se o select estiver selecionado o valor de dolar, entre aqui se for false passe a frente
    coinValuesConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCoinValues / dolarToday);
  }

  if (coinSelect.value == "euro") {
    //se o select estiver selecionado o valor de euro, entre aqui se for false passe a frente
    coinValuesConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCoinValues / euroToday);
  }

  if (coinSelect.value == "libra") {
    coinValuesConverted.innerHTML = new Intl.NumberFormat("en-gb", {
      style: "currency",
      currency: "GBP",
    }).format(inputCoinValues / libraToday);
  }

  if (coinSelect.value == "bitcoin") {
    coinValuesConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCoinValues / bitcoinToday);
  }

  coinValuesToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCoinValues);

  console.log(inputCoinValues);
}

function changeCoin() {
  const coinName = document.getElementById("coin");
  const coinImage = document.querySelector(".coin-img");

  if (coinSelect.value == "dolar") {
    coinName.innerHTML = "Dólar americano";
    coinImage.src = "./assets/img/dolar.png";
  }

  if (coinSelect.value == "euro") {
    coinName.innerHTML = "Euro";
    coinImage.src = "./assets/img/euro.png";
    }
    
    if (coinSelect.value == "libra") {
        coinName.innerHTML = "Libra";
        coinImage.src = "./assets/img/libra.png";
      }

      if (coinSelect.value == "bitcoin") {
        coinName.innerHTML = "Bitcoin";
        coinImage.src = "./assets/img/bitcoin.png";
      }
    
  convertValues();
}

convertButton.addEventListener("click", convertValues);
coinSelect.addEventListener("change", changeCoin);
