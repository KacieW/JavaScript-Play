ajax: function(options, callback){
  var xhr = new XMLHttpRequest();
  options.type = options.type || 'GET';
  options.async = options.async !== false;
  if(!options.url){
    alert('Missing {url: urlValue}');
    return;
  }
  xhr.onreadystatechange = checkReady;
  
  function checkReady(){
    if(xhr.readyState <4){return; }
    if(xhr.status !==200){return; }
    if(xhr.readyState ===4){
      callback(xhr);
    }
  }
  xhr.open(options.type, options.url, options.async);
  xhr.send(null);
}
