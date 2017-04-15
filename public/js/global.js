// override default link behavior
$("a").click(function(ev){
    ev.preventDefault();

    // fetch target page
    var targetUrl = ev.target.getAttribute('href');
    

    // make navigation official with browser with pushState api
    

});