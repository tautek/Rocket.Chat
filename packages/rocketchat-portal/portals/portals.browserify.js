global.React = React;

/* Your requires here */

if (Meteor.isClient) {

    var addStyle = function(href) {
        var head = document.getElementsByTagName('head')[0];
        var style = document.createElement('link');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        style.href = href;
        head.appendChild(style);
    }; 

    /* Your stylesheets here */
}

