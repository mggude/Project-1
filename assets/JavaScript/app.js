
//SECTION FIREBASE
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
    

//Variables
var symbol;
var stockName;
var lastPrice;
var percentChange;
var openPrice;
var fiftyTwoWkHigh;
var fiftyTwoWkLow;
var dividendRate;
var dividendYeild;
var exDividendDate;


//Functions
// SECTION: WATCHLIST TABLE
$("#submitButton").on("click", function(event) {
    event.preventDefault();
    symbolInput = $("#symbolInput").val().trim();
    console.log("Input",symbolInput);
    var onDemand = new OnDemandClient();
    onDemand.setAPIKey('b07ee9357cf8f37a122e8176286d33c7');
    onDemand.setJsonP(true);
    onDemand.getQuote({symbols: symbolInput}, function (err, data) {
            var quotes = data.results;
            for (x in quotes) {
            symbol = quotes[x].symbol;
            stockName = quotes[x].name;
            lastPrice = quotes[x].lastPrice;
            percentChange = quotes[x].percentChange;
            openPrice = quotes[x].open;
            fiftyTwoWkHigh = quotes[x].fiftyTwoWkHigh;
            fiftyTwoWkLow = quotes[x].fiftyTwoWkLow;
            dividendRate = quotes[x].dividendRateAnnual;
            dividendYeild = quotes[x].dividendYieldAnnual;
            exDividendDate = quotes[x].exDividendDate;
            console.log(fiftyTwoWkHigh, symbol, stockName, lastPrice, percentChange, openPrice);
            };
        addToTable ();
    });
});

function addToTable () {
    $("tbody").append("<tr><th scope='row'>" + stockName +"</th> <td>" + lastPrice + "</td> <td>" + percentChange + "</td> <td>" + '52 High' + "</td> <td>" + '52 Low' + "</td></tr>");
};

//Main Processes