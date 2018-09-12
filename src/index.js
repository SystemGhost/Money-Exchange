// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	if(currency <= 0) return {};
	var otvet = {};
	var tCurr = currency;
	if(tCurr >=50) {
		otvet.H = Math.trunc(tCurr / 50);
		tCurr = tCurr % 50;
	}
	//else otvet.H = 0;
	if(tCurr >=25) {
		otvet.Q = Math.trunc(tCurr / 25);
		tCurr = tCurr % 25;
	}
	//else otvet.Q = 0;
	if(tCurr >=10) {
		otvet.D = Math.trunc(tCurr / 10);
		tCurr = tCurr % 10;
	}
//	else otvet.D = 0;
	if(tCurr >= 5) {
		otvet.N = Math.trunc(tCurr / 5);
		tCurr = tCurr % 5;
	}
	//else otvet.N = 0;
	if(tCurr > 0) {
		otvet.P = tCurr;
	}
	return otvet;




}
