console.log('starting...');
setTimeout(function () {
    if (document.querySelector('.claimable-bonus__icon')) {
        document.querySelector('.claimable-bonus__icon').click();
        console.log('clicking...');
    }
    console.log('no exist');
}, 1000);