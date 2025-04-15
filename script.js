document.getElementById("avvia").addEventListener("click", () => {

    let incassoTotale = Number(document.getElementById("saldo-inizio").value * 1000000); 
    let settimana = 0;
    let incassoFinale = incassoTotale;

    const x = Number(document.getElementById("x").value); // Calo prima settimana (%)
    const y = Number(document.getElementById("y").value); // Calo altre settimane (%)

    const risultatoPrima = document.getElementById("risultato-prima");
    const caloPrima = document.getElementById("calo-prima");
    const caloAltre = document.getElementById("calo-altre");
    const incTotale = document.getElementById("incasso-totale");

    incassoTotale.value = "";
    x.value = "";
    y.value = "";

    caloAltre.style.color = "white";

    // Settimana 0
    console.log(`Settimana ${settimana}: incasso = ${incassoTotale.toLocaleString()} €`);

    const intervallo = setInterval(() => {
        settimana += 1;

        if (settimana === 1) {
            incassoTotale -= (incassoTotale * x) / 200;
            incassoFinale += incassoTotale; 
            risultatoPrima.innerHTML = `Incasso al secondo weekend: ${incassoFinale.toLocaleString()} €`;
        } else {
            incassoTotale -= (incassoTotale * y) / 100;
            incassoFinale += incassoTotale;
        }

        console.log(`Settimana ${settimana}: incasso = ${incassoTotale.toLocaleString()} $`);

        if (incassoTotale < 1000000) {
            clearInterval(intervallo);
            incTotale.innerHTML = `Incasso totale previsto: ${incassoFinale.toLocaleString()} $`;
            console.log("Incasso sotto 1 milione.");
        }
    }, 100);
});