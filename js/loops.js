$(document).ready(function() {

    $('button').on('click', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Clear current values
        $('#message').html('');
        $('#outputArea').text('');

        // Do it
        getFibOptions();
    });

    // Function to validate numbers
    // isNaN() by itself won't catch numbers passes as strings like '10' (with quotes)
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    // Function to get input from user
    function getFibOptions() {
        var minNumber = 3,
            maxNumber = 30,
            radioButtonsValid = false,
            inputFieldValid = false;

        // TODO: fix global variable?
        fibCount = document.getElementById('numberOfValues').value;
        var format = document.getElementsByName('outputFormat'); // an array

        // Validate input field
        if((!isNumber(fibCount)) || (fibCount < minNumber) || (fibCount > maxNumber)) {
            $('#message').append('You must enter a number between 3 and 30.<br>');
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
            $('#message').append('You must choose a format.<br>');
        };

        // Generate the output
        if((radioButtonsValid === true) && (inputFieldValid === true)) {
            generateFibs(fibCount, printFormat);
        };
    }

    // Function to generate and print data to screen
    function generateFibs(num, format) {
        // Generate the fibs
        var forFib = [0, 1],
            current;

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
            $('#message').html('There was an error with the formatting options.');
        };
    };

    // Function to print to console / screen
    function fibsToConsole(fibs) {

        // Send output to console
        console.log('For loop:\t\t' + fibs);

        // Send output to screen
        fibs = fibs.join(', ');
        $('#outputArea').append('<h2>Your Fibs String:</h2>' + fibs);
    };

    // Function to print a table
    function fibsToTable(fibs) {
        var fibsLen = fibs.length;
        var tableStart = '<table>';
        var tableEnd = '</table>';
        var tableMiddle = '';

        // Assemble table header
        tableMiddle += '<tr>';
        for(var i = 0; i < fibsLen; i ++) {
            tableMiddle += '<th>F' + i + '</th>';
        };
        tableMiddle += '</tr>';

        tableMiddle += '<tr>';
        // Assemble table header
        for(var i = 0; i < fibsLen; i ++) {
            tableMiddle += '<td>' + fibs[i] + '</td>';
        };
        tableMiddle += '</tr>';
        $('#outputArea').html('<h2>Your Fibs Table</h2>' + tableStart + tableMiddle + tableEnd);
    };

});

