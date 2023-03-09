(function () {
  //countdownDate - inserido a data prevista para finalizar o countdown
  const countdownDate = new Date("mar 08, 2023 23:49:00");

  //depois da fórmula aplicada pegamos o ID criado nos parágrafos para refletir no JS
  let daysleftlabel = document.getElementById("daysleft")
  let hoursleftlabel = document.getElementById("hoursleft")
  let minutesleftlabel = document.getElementById("minutesleft")
  let secondsleftlabel = document.getElementById("secondsleft")

  function startCountdown() {

// setInterval - funcção criada para repetir a cada 1000 millesegundos 
    let timer = setInterval(() => {

      //TODAY - data atual
      const today = new Date();
      
      //getTimer - função que pega o valor da data e hora
      let distance = countdownDate.getTime() - today.getTime();

      //fórmula para transformar os millesegundos em segundos
      //math.floor - transformar em casa decimal
      let seconds = Math.floor ((distance % (1000 * 60) / 1000))
      let minutes = Math.floor ((distance % (1000 * 60 * 60) / (1000 * 60)))
      let hours = Math.floor ((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      let days = Math.floor (distance / (1000 * 60 * 60 * 24))

// criado para alterar os valores p/ string, podendo assim aplicar 2 casas decimais e um 0(zero) caso o número não seja de duas casas decimais.
      daysleftlabel.innerHTML = days.toString().padStart(2,"0") 
      hoursleftlabel.innerHTML = hours.toString().padStart(2, "0")
      minutesleftlabel.innerHTML = minutes.toString().padStart(2, "0")
      secondsleftlabel.innerHTML = seconds.toString().padStart(2, "0")

      //console.log(days, hours, minutes, seconds)


      // if - distace menor que 0 limpa a contagem
      if(distance < 0) {

        //clearinterval - limpar cach para reiniciar a contagem de forma correta
        clearInterval(timer)

        document.getElementById("countdown-title").innerHTML= "Mission Acomplished"
        document.getElementById("timer").innerHTML = "<h2> The Rocket has been launched! 🚀</h2>" 


      }

    }, 1000) 


  }

  startCountdown();
})();
