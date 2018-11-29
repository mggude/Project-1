<<<<<<< HEAD

// SECTION: WATCHLIST TABLE

<script src="./dist/barchart-ondemand-client-js.js"></script>

var onDemand = new OnDemandClient();

onDemand.setAPIKey('change-me');
onDemand.setJsonP(true);

/* get a quote for AAPL and GOOG */
onDemand.getQuote({symbols: 'AAPL,GOOG'}, function (err, data) {
        var quotes = data.results;
        for (x in quotes) {
            console.log("getQuote: " + quotes[x].symbol + " [" + quotes[x].name + "] = " + JSON.stringify(quotes[x]));
        }
});
=======
<script src="https://www.gstatic.com/firebasejs/5.5.9/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAsBSMWdIEzARseH2Ar2_L3B-z3pxUeSJs",
    authDomain: "trademark-c83fc.firebaseapp.com",
    databaseURL: "https://trademark-c83fc.firebaseio.com",
    projectId: "trademark-c83fc",
    storageBucket: "trademark-c83fc.appspot.com",
    messagingSenderId: "18387554473"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
>>>>>>> 6f1558cc829116be4af9b03cb3f681c1cb9a969d
