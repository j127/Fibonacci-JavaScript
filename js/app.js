/*jslint browser:true */
/*jslint devel: true */
/*jslint plusplus: true */
(function () {
    "use strict";

    var loader = document.getElementById('loader'),
        minFibNumber = 1,
        maxFibNumber = 30,
        min = document.getElementById('minNumber'),
        max = document.getElementById('maxNumber'),
        fibBtn = document.getElementById('printFibValues');

    // Show the content after the page loads
    loader.style.display = 'block';

    // print the min and max to the HTML page template areas
    min.innerHTML = minFibNumber;
    min.style.color = 'black';

    max.innerHTML = maxFibNumber;
    max.style.color = 'black';

    // Get input from user
    function getFibOptions() {
        var radioButtonsValid = false,
            inputFieldValid = false,
            fibCount = document.getElementById('numberOfValues').value,
            format = document.getElementsByName('outputFormat'), // an array
            printFormat,
            i,
            len;

        // Validate input field
        if ((isNaN(fibCount)) || (fibCount < minFibNumber) || (fibCount > maxFibNumber)) {
            document.getElementById('message').innerHTML += 'You must enter a number between ' + minFibNumber + ' and ' + maxFibNumber + '.<br>';
        } else {
            inputFieldValid = true;
        }

        // Validate radio buttons - loop through the array using cached length
        for (i = 0, len = format.length; i < len; i++) {
            if (format[i].checked) {
                radioButtonsValid = true;
                console.log('radioButtonsValid = ' + radioButtonsValid);
                printFormat = format[i].value;
                console.log('Format: ' + format[i].value);
            }
        }
            
        if (radioButtonsValid === false) {
            document.getElementById('message').innerHTML += 'You must choose a format.<br>';
        }

        // Generate the output
        if ((radioButtonsValid === true) && (inputFieldValid === true)) {
            generateFibs(fibCount, printFormat);
        }
    }

    function btnClick() {
        console.log('Button clicked');

        // Clear current values
        document.getElementById('message').innerHTML = '';
        document.getElementById('outputArea').innerHTML = '';

        // Do it
        getFibOptions();
        console.log('-------');

    }

    // Print a table
    function fibsToTable(fibs) {
        var fibsLen = fibs.length,
            tableStart = '<table>',
            tableEnd = '</table>',
            tableMiddle = '',
            i,
            j,
            counter;

        // Assemble table header
        tableMiddle += '<tr>';
        for (i = 0; i < fibsLen; i++) {
            counter = i + 1;
            tableMiddle += '<th>F' + counter + '</th>';
        }
        tableMiddle += '</tr><tr>';
        // Assemble table body
        for (j = 0; j < fibsLen; j++) {
            tableMiddle += '<td>' + fibs[j] + '</td>';
        }
        tableMiddle += '</tr>';
        document.getElementById('outputArea').innerHTML = '<h2>Your Fibs Table</h2>' + tableStart + tableMiddle + tableEnd;
    }

    // Print to console / screen
    function fibsToConsole(fibs) {

        // Send output to console
        console.log('For loop:\t' + fibs);

        // Send output to screen
        fibs = fibs.join(', ');
        document.getElementById('outputArea').innerHTML = '<h2>Your Fibs String:</h2>' + fibs;
    }

    // Generate and print data to screen
    function generateFibs(num, format) {
        // Generate the fibs
        var fibArray = [0],
            current,
            i;

        if (num > 1) {
            fibArray.push(1);
        }

        for (i = 1; i <= num - 2; i++) {
            current = fibArray[i] + fibArray[i - 1];
            fibArray.push(current);
        }

        console.log('Length of `for` array: ' + fibArray.length);
        console.log('fibArray: ' + fibArray);

        // Check which format to output based on the input
        if (format === 'console') {
            fibsToConsole(fibArray);
        } else if (format === 'table') {
            fibsToTable(fibArray);
        } else {
            document.getElementById('message').innerHTML = 'There was an error with the formatting options.';
        }
    }

    // Listen for button click
    fibBtn.addEventListener('click', function (e) {
        // Prevent form submission
        e.preventDefault();
        btnClick();
    });
}());

