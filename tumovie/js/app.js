document.addEventListener('prechange', function(event) {
    document.querySelector('ons-toolbar .center')
      .innerHTML = event.tabItem.getAttribute('label');
  });

  document.addEventListener('init', function(event) {
    var page = event.target;
    console.log(page.id);
  
    if (page.id === 'home') {
      //JS of tab1
      
    } else if (page.id === 'Search') {
      //JS of tab2
      document.getElementById("searchalert").onclick = function(){
        console.log("Alert Clicked");
        ons.notification.alert("Alert in Search!");
      }
    } else if (page.id === 'Favourite') {
      document.getElementById("searchalert").onclick = function(){
        console.log("Alert Clicked");
        ons.notification.alert("Alert in Search!");
      }
      
  }});