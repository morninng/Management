
var appData = gadgets.views.getParams()['appData'];
console.log(appData);


  gapi.hangout.onApiReady.add(function(e){
    console.log("hangout api ready");
    if(e.isApiReady){
    	regist_hangout_url();
    }
  });


function regist_hangout_url(){

	var hangout_url = gapi.hangout.getHangoutUrl();
	console.log(hangout_url);

  var start_data = gapi.hangout.getStartData();
  console.log(start_data);

  var url_obj = {
    url: hangout_url,
    status: true
  }


  var root_ref = new Firebase("https://mixidea.firebaseio.com/");
  var hangout_list_ref = root_ref.child("hangout_url");
  hangout_list_ref.push(url_obj);

}