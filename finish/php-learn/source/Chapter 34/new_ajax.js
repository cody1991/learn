function getXMLHTTPRequest() {
   var req =  false;
   try {
      /* for Firefox */
      req = new XMLHttpRequest(); 
   } catch (err) {
      try {
         /* for some versions of IE */
         req = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (err) {
         try {
            /* for some other versions of IE */
            req = new ActiveXObject("Microsoft.XMLHTTP");
         } catch (err) {
            req = false;
         }
     }
   }
   
   return req;
}

function addNewBookmark() {
  var url = "add_bms.php";
  var params = "new_url=" + encodeURI(document.getElementById('new_url').value);
  myReq.open("POST", url, true);
  myReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  myReq.setRequestHeader("Content-length", params.length);
  myReq.setRequestHeader("Connection", "close");
  myReq.onreadystatechange = addBMResponse;
  myReq.send(params);
}

function addBMResponse() {
  if (myReq.readyState == 4) {
    if(myReq.status == 200) {
       result = myReq.responseText;
       document.getElementById('displayresult').innerHTML = result;
    } else {
      alert('There was a problem with the request.');
    }
  }
}