$(document).ready(function() {
    // TODO: finish removing jQuery

    // Show the content after the page loads
    var loader = document.getElementById('loader');
    loader.style.display = 'block';

    var minFibNumber = 1,
        maxFibNumber = 30;

    // print the min and max to the HTML page template areas
    min = document.getElementById('minNumber');
    min.innerHTML = minFibNumber;
    min.style.color = 'black';

    max = document.getElementById('maxNumber');
    max.innerHTML = maxFibNumber;
    max.style.color = 'black';

    $('button').on('click', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Clear current values
        document.getElementById('message').innerHTML = '';
        document.getElementById('outputArea').innerHTML = '';

        // Do it
        getFibOptions();
    });

    // Validate numbers
    // isNaN() by itself won't catch numbers passes as strings like '10' (with quotes)
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    // Get input from user
    function getFibOptions() {
        var radioButtonsValid = false,
            inputFieldValid = false;

        // TODO: fix global variable?
        fibCount = document.getElementById('numberOfValues').value;
        var format = document.getElementsByName('outputFormat'); // an array

        // Validate input field
        if((!isNumber(fibCount)) || (fibCount < minFibNumber) || (fibCount > maxFibNumber)) {
            document.getElementById('message').innerHTML += 'You must enter a number between ' + minFibNumber + ' and ' + maxFibNumber + '.<br>';
        } else {
            inputFieldValid = true;
        };

        // Validate radio buttons - loop through the array using cached length
        for(var i = 0, len = format.length; i < len; i ++) {
            if(format[i].checked) {
                radioButtonsValid = true;
                console.log('radioButtonsValid = ' + radioButtonsValid);
                printFormat = format[i].value;
                console.log(format[i].value);
            };
        };

        if(radioButtonsValid === false) {
            document.getElementById('message').innerHTML += 'You must choose a format.<br>';
        };

        // Generate the output
        if((radioButtonsValid === true) && (inputFieldValid === true)) {
            generateFibs(fibCount, printFormat);
        };
    }

    // Generate and print data to screen
    function generateFibs(num, format) {
        // Generate the fibs
        var forFib = [0],
            current;

        if(fibCount > 1) {
            forFib.push(1);
        };

        for (var i = 1; i  <= fibCount - 2; i ++) {
            current = forFib[i] + forFib[i - 1];
            forFib.push(current);
        }

        console.log('Length of `for` array: ' + forFib.length);
        console.log('forFib: ' + forFib);
        fibArray = forFib;

        // Check which format to output based on the input
        if(format === 'console') {
            fibsToConsole(fibArray);
        } else if(format === 'table') {
            fibsToTable(fibArray);
        } else {
            document.getElementById('message').innerHTML = 'There was an error with the formatting options.';
        };
    };

    // Print to console / screen
    function fibsToConsole(fibs) {

        // Send output to console
        console.log('For loop:\t' + fibs);

        // Send output to screen
        fibs = fibs.join(', ');
        document.getElementById('outputArea').innerHTML = '<h2>Your Fibs String:</h2>' + fibs;
    };

    // Print a table
    function fibsToTable(fibs) {
        var fibsLen = fibs.length;
        var tableStart = '<table>';
        var tableEnd = '</table>';
        var tableMiddle = '';

        // Assemble table header
        tableMiddle += '<tr>';
        for(var i = 0; i < fibsLen; i ++) {
            counter = i + 1;
            tableMiddle += '<th>F' + counter + '</th>';
        };
        tableMiddle += '</tr><tr>';
        // Assemble table body
        for(var i = 0; i < fibsLen; i ++) {
            tableMiddle += '<td>' + fibs[i] + '</td>';
        };
        tableMiddle += '</tr>';
        document.getElementById('outputArea').innerHTML = '<h2>Your Fibs Table</h2>' + tableStart + tableMiddle + tableEnd;
    };

});

