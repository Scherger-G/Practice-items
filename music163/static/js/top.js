 
 var oMeta = document.createElement('meta');
 oMeta.name = 'viewport';
 oMeta.content= 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
 document.getElementsByTagName('head')[0].appendChild(oMeta);

 var tMeta = document.createElement('meta');
 tMeta.setAttribute('http-equiv','X-UA-Compatible') ;
 tMeta.content = 'IE=edge,chrome=1';
 document.getElementsByTagName('head')[0].appendChild(tMeta);



document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
    

    
