$(document).ready(function() {
    var getFibCount = function (question) {
        var minNumber = 1,
            maxNumber = 100;

        // TODO: fix global variable?
        fibCount = window.prompt(question);

        // Validate input
        if((!isNumber(fibCount)) || (fibCount < 3) || (fibCount > 100)) {
            getFibCount("You must enter a number between 1 and 100.");
        }
        return fibCount;
    }

    // Initial prompt window
    getFibCount("How many fibs? (between 3 and 100)");

    // Function to validate number
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    // For loop version
    (function() {
        var forFib = [0, 1],
            current;

        for (var i = 1; i  <= fibCount - 2; i ++) {
            current = forFib[i] + forFib[i - 1];
            forFib.push(current);
        }

        forFib = forFib.join(', ');

        // Send output
        console.log('For loop:\t\t' + forFib);
        $('#forFibs').append(forFib);
    })();

    // While loop version
    (function() {
        var whileFib = [0, 1],
            current,
            i = 1;

        while(i <= fibCount - 2) {
            current = whileFib[i] + whileFib[i - 1];
            whileFib.push(current);
            i ++;
        }

        whileFib = whileFib.join(', ');

        // Send output
        console.log('While loop:\t\t' + whileFib);
        $('#whileFibs').append(whileFib);
    })();
});

