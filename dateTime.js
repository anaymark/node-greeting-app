exports.dateOfMonth = function(){
	var d = new Date();
	var m = d.getUTCDate();
	console.log(m);
};

exports.todaysDay = function (){
	var d = new Date();
	var n = d.getUTCDay();
	if(n===0){
	console.log('Today is Sunday!');
    }
    else if(n===1){
	console.log('Today is Monday!');
    }
    else if(n===2){
	console.log('Today is Tuesday!');
    }
    else if(n===3){
	console.log('Today is Wednesday!');
    }
    else if(n===4){
	console.log('Today is Thursday!');
    }
    else if(n===5){
	console.log('Today is Friday!');
    }
    else if(n===6){
	console.log('Today is Saturday!');
    }
    else{
    console.log('Not sure what today is.')
    }
};
