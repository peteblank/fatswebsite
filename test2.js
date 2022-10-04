   async function something(){
   var data2 = {
          amount: '1',
          wallet: 'secret17qpzsmvsks6lme8u6q87sf20w2cca97ljcgcm9',
        };
    
        await fetch("https://fiat2fats.herokuapp.com/", {
          method: "POST",
          body: JSON.stringify(data2),
          headers: { "Content-type": "application/json",
          "Access-Control-Allow-Origin":"https://fatscrt.finance" },
        }).then((response) => response);
      }
    
     