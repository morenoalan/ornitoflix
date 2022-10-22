document.onreadystatechange = function() {
    if (document.readyState !== 'complete') {
        document.querySelector('body').style.visibility = 'hidden';
        document.querySelector('#loader').style.visibility = 'visible';
        document.querySelector('html').style.backgroundColor = 'var(--first-dark-color)';
    } else {
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('body').style.visibility = 'visible';
        document.querySelector('html').style.backgroundColor = 'var(--first-dark-color)';
    }
};