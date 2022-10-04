fetch('https://fats-api.herokuapp.com/wallet',{

  headers: { "Content-type": "application/json",

"Access-Control-Allow-Origin":"https://fatscrt.store" }

  })
.then(a=>a.json())

.then(b=>{console.log(b);



if (b>0){

document.getElementById('demo').innerHTML="<b>Amount of fats in stock:"+b+"</b>"+" plus a 7% fee + price impact";

paypal.Buttons({

    createOrder: function(data, actions) {

      //var amounts=document.getElementById('amount').value;

      //var amounts2=amounts.toString();

      

      const something = async () => {

        

        function one() {

          

                let url = 'https://fats-api.herokuapp.com/';

            return fetch(url,{

            headers: { "Content-type": "application/json",

          "Access-Control-Allow-Origin":"https://fatscrt.store" }

            })

            .then(res => res.json())

            //.then(v=>v.dollars)

            //.then((out) => out.values[out.values.length-1][2])

            .then((values2) =>  multiply(values2.dollars,values2.sscrt,values2.fatl,values2.sscrtl))

            .catch((err)=>{ throw err });

    

           function multiply(values,sscrt,liquidity0,liquidity1) {

            var amounts = document.getElementById("amount").value;

            var amounts2 = (values * amounts);

            var impact=((liquidity0/liquidity1)*1.5)*values/100*sscrt;

            var amounts4=amounts2+((impact/100)*amounts2);

            var amounts5=(amounts4+(amounts4*0.07)).toFixed(2);

            var f=amounts5.toString();

            console.log(f);

            return f

          }

          

            }

          const test = await one();

  

            return test;

    

      // This function sets up the details of the transaction, including the amount and line item details.

    

    }

    

    let h=something();

    Promise.resolve(h);



    return(  h.then((result) => 

      actions.order.create({

        purchase_units: [

          {

            amount: {

              value: result, //#####to here#####

            },

          },

        ],

      })

    ))

  },

    onApprove: function pal(data, actions) {

      // This function captures the funds from the transaction.

      return actions.order.capture().then(async function(details) {

        // This function shows a transaction success message to your buyer.

        var amounts=document.getElementById('amount').value;

        var wallet=document.getElementById('wallet').value;

        var amounts3=(amounts*1000);

        var amounts2=amounts3.toString();

        var f=(JSON.stringify(amounts2)).replace(/[^\d.-]/g, '');//to remove the quotation marks

        var d=(JSON.stringify(wallet).replace(/[^\w\s]/gi,''));//to remove the quotation marks

        var data2 = {

          amount: f,

          wallet: d,

        };

    

        await fetch("https://fiat2fats.herokuapp.com/", {

          method: "POST",

          body: JSON.stringify(data2),

          headers: { "Content-type": "application/json",

          "Access-Control-Allow-Origin":"https://fatscrt.store" },

        }).then((response) => response);

      });

     

    }

  }).render('#paypal-button-container');

  //This function displays Smart Payment Buttons on your web page.

}

else

{

  alert('out of stock');

  document.getElementById('paypal-button-container').innerHTML="<b>out of stock</b>";

}

})
