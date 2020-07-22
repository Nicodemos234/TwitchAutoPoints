console.log('starting...');
setInterval(function () {
    if (document.querySelector('.claimable-bonus__icon')) {
        document.querySelector('.claimable-bonus__icon').click();
        console.log('clicking...');
    }
    console.log('no exist');
}, 1000);
// function recursive() {
//     console.log("tentando");

//     setInterval(recursive, 5000);
// }

// recursive();