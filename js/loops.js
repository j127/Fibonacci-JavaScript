$(document).ready(function() {
    (function() {
        var forFib = [0, 1],
            current;

        for (var i = 1; i  <= 8; i ++) {
            current = forFib[i] + forFib[i - 1];
            forFib.push(current);
        }

        forFib = forFib.join(', ');

        // Send output
        console.log('For loop:\t\t' + forFib);
        $('#forFibs').append(forFib);
    })();

    (function() {
        var whileFib = [0, 1],
        current,
        i = 1;

        while(i < 9) {
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

