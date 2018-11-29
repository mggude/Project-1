
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