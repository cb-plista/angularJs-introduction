var express = require('express');
var app = express();

var undefined;

app.configure(function() {
	app.use(express.json());
});



var notification = require('http').createServer(handler),
	io = require('socket.io').listen(notification),
	fs = require('fs');
notification.listen(4000);

function handler (req, res) {
	fs.readFile(__dirname + '/index.html',
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading index.html');
			}

			res.writeHead(200);
			res.end(data);
		});
}

var undefined;
var responseData = {};

var campaign = {
	1: {
		id : 1,
		name : 'Campaign 1',
		advertiser : '/advertiser/1',
		events : [
			{
				price : 1.5,
				name : 'shopping-cart'
			},
			{
				price : 24,
				name : 'order'
			}
		],
		budget: {
			total : 1000,
			daily: 100
		},
		ads : [
			'/ad/1',
			'/ad/2',
			'/ad/3',
			'/ad/4'
		],
		start : 1380585600,
		end : 1383177600,
		status : 1
	},
	2: {
		id : 2,
		name : 'Campaign 2',
		advertiser : '/advertiser/1',
		events : [
			{
				price : 0.9,
				name : 'click'
			}
		],
		budget: {
			total : 100000,
			daily: 1000
		},
		ads : [
			'/ad/5',
			'/ad/6',
			'/ad/7',
			'/ad/8'
		],
		start : 1380585600,
		end : 1383177600,
		status : 1
	},
	3: {
		id : 3,
		name : 'Campaign 3',
		advertiser : '/advertiser/1',
		events : [
			{
				price : 1.2,
				name : 'impression'
			}
		],
		budget: {
			total : 20000,
			daily: 500
		},
		ads : [
			'/ad/9',
			'/ad/10'
		],
		start : 1380585600,
		end : 1383177600,
		status : 1
	}
};

var ads = {
	1: {
		id : 1,
		target : '',
		tracking : {
			onload : '',
			onclick : ''
		},
		content : {
			type : 1
		},
		filter : []
	},
	2: {
		id : 2,
		target : '',
		tracking : {
			onload : '',
			onclick : ''
		},
		content : {
			type : 2
		},
		filter : []
	},
	3: {
		id : 3,
		target : '',
		tracking : {
			onload : '',
			onclick : ''
		},
		content : {
			type : 1
		},
		filter : []
	},
	4: {
		id : 4,
		target : '',
		tracking : {
			onload : '',
			onclick : ''
		},
		content : {
			type : 3
		},
		filter : []
	},
	5: {
		id : 5,
		target : '',
		tracking : {
			onload : '',
			onclick : ''
		},
		content : {
			type : 1
		},
		filter : []
	},
	6: {
		id : 6,
		target : '',
		tracking : {
			onload : '',
			onclick : ''
		},
		content : {
			type : 3
		},
		filter : []
	},
	7: {
		id : 7,
		target : '',
		tracking : {
			onload : '',
			onclick : ''
		},
		content : {
			type : 2
		},
		filter : []
	},
	8: {
		id : 8,
		target : '',
		tracking : {
			onload : '',
			onclick : ''
		},
		content : {
			type : 2
		},
		filter : []
	},
	9: {
		id : 9,
		target : '',
		tracking : {
			onload : '',
			onclick : ''
		},
		content : {
			type : 2
		},
		filter : []
	},
	10: {
		id : 10,
		target : '',
		tracking : {
			onload : '',
			onclick : ''
		},
		content : {
			type : 2
		},
		filter : []
	}
};

var advertisers = {
	1: {
		id: 1,
		name : 'Super Advertiser',
		contacts : [
			'/contact/1'
		]
	}
};

var contacts = {
	1 : {
		id : 1,
		gender : 'm',
		lastname : 'Bieber',
		firstname : 'Christian',
		salutation : 'Crispy',
		mail : 'cb@plista.com',
		phone : '+49 30 4737537 42',
		networks : {
			linkedin : 'http://www.linkedin.com/pub/christian-bieber/34/a3b/554',
			xing : 'https://www.xing.com/profiles/Christian_Bieber11'
		}
	}
};

var stats = {
	1 :{
		impression : [
			{ x: 1380585600, y: 1023049},
			{ x: 1380672000, y: 1923943},
			{ x: 1380758400, y: 2039473},
			{ x: 1380844800, y: 1803843},
			{ x: 1380931200, y: 2130603},
			{ x: 1381017600, y: 2249593},
			{ x: 1381104000, y: 2409593},
			{ x: 1381190400, y: 2193058},
			{ x: 1381276800, y: 1938473},
			{ x: 1381363200, y: 839287}
		],
		clicks : [
			{ x: 1380585600, y: 0},
			{ x: 1380672000, y: 0},
			{ x: 1380758400, y: 0},
			{ x: 1380844800, y: 0},
			{ x: 1380931200, y: 0},
			{ x: 1381017600, y: 0},
			{ x: 1381104000, y: 0},
			{ x: 1381190400, y: 0},
			{ x: 1381276800, y: 0},
			{ x: 1381363200, y: 0}
		],
		cpm : [
			{ x: 1380585600, y: 0},
			{ x: 1380672000, y: 0},
			{ x: 1380758400, y: 0},
			{ x: 1380844800, y: 0},
			{ x: 1380931200, y: 0},
			{ x: 1381017600, y: 0},
			{ x: 1381104000, y: 0},
			{ x: 1381190400, y: 0},
			{ x: 1381276800, y: 0},
			{ x: 1381363200, y: 0}
		],
		priceIndex : 0.9
	},
	2 :{
		impression : [
			{ x: 1380585600, y: 1023049},
			{ x: 1380672000, y: 1923943},
			{ x: 1380758400, y: 2039473},
			{ x: 1380844800, y: 1803843},
			{ x: 1380931200, y: 2130603},
			{ x: 1381017600, y: 2249593},
			{ x: 1381104000, y: 2409593},
			{ x: 1381190400, y: 2193058},
			{ x: 1381276800, y: 1938473},
			{ x: 1381363200, y: 839287}
		],
		clicks : [
			{ x: 1380585600, y: 0},
			{ x: 1380672000, y: 0},
			{ x: 1380758400, y: 0},
			{ x: 1380844800, y: 0},
			{ x: 1380931200, y: 0},
			{ x: 1381017600, y: 0},
			{ x: 1381104000, y: 0},
			{ x: 1381190400, y: 0},
			{ x: 1381276800, y: 0},
			{ x: 1381363200, y: 0}
		],
		cpm : [
			{ x: 1380585600, y: 0},
			{ x: 1380672000, y: 0},
			{ x: 1380758400, y: 0},
			{ x: 1380844800, y: 0},
			{ x: 1380931200, y: 0},
			{ x: 1381017600, y: 0},
			{ x: 1381104000, y: 0},
			{ x: 1381190400, y: 0},
			{ x: 1381276800, y: 0},
			{ x: 1381363200, y: 0}
		],
		priceIndex : 1.9
	},
	3 :{
		impression : [
			{ x: 1380585600, y: 1023049},
			{ x: 1380672000, y: 1923943},
			{ x: 1380758400, y: 2039473},
			{ x: 1380844800, y: 1803843},
			{ x: 1380931200, y: 2130603},
			{ x: 1381017600, y: 2249593},
			{ x: 1381104000, y: 2409593},
			{ x: 1381190400, y: 2193058},
			{ x: 1381276800, y: 1938473},
			{ x: 1381363200, y: 839287}
		],
		clicks : [
			{ x: 1380585600, y: 0},
			{ x: 1380672000, y: 0},
			{ x: 1380758400, y: 0},
			{ x: 1380844800, y: 0},
			{ x: 1380931200, y: 0},
			{ x: 1381017600, y: 0},
			{ x: 1381104000, y: 0},
			{ x: 1381190400, y: 0},
			{ x: 1381276800, y: 0},
			{ x: 1381363200, y: 0}
		],
		cpm : [
			{ x: 1380585600, y: 0},
			{ x: 1380672000, y: 0},
			{ x: 1380758400, y: 0},
			{ x: 1380844800, y: 0},
			{ x: 1380931200, y: 0},
			{ x: 1381017600, y: 0},
			{ x: 1381104000, y: 0},
			{ x: 1381190400, y: 0},
			{ x: 1381276800, y: 0},
			{ x: 1381363200, y: 0}
		],
		priceIndex : 1.6
	}
};

var listeners = {};

io.sockets.on('connection', function (socket) {

	var updateData = function(id){
		socket.emit('updateData', campaign[id]);
	};
	socket.on('listenStart', function (data) {
		var listener = data.model + '_' + data.id;
		updateData(data.id);
		if(listeners[listener] == undefined){
			listeners[listener] = [];
		}
		listeners[listener].push(socket);
	});
	socket.on('saveData', function(data){
		var listener = data.model + '_' + data.id;
		campaign[data.id] = data.data;
		for(var i in listeners[listener]){
			listeners[listener][i].emit('updateData', campaign[data.id]);
		}
	});

	socket.on('disconnect', function () {

	});
});

app.get('/', function(req, res){

	responseData = {
		advertisers : '/advertiser',
		campaigns : '/campaign',
		ads : '/ads',
		contacts : '/contact'
	};

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');

	var data = JSON.stringify(responseData);
	res.setHeader('Content-Length', data.length);
	res.end(data);
});

app.get('/campaign/:id?', function(req, res){
	responseData = {};

	var id = req.param('id') || false;

	if(id){
		id = parseInt(id);
		if(campaign[id] !== undefined){
			responseData = campaign[id];
		} else {
			responseData = [];
		}
	} else {
		responseData = [];
		for(key in campaign){
			responseData.push(campaign[key]);
		}
	}

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');

	var data = JSON.stringify(responseData);
	res.setHeader('Content-Length', data.length);
	res.end(data);
});

app.get('/ad/:id?', function(req, res){
	responseData = {};
	var id = req.param('id') || false;

	if(id){
		id = parseInt(id);
		if(ads[id] !== undefined){
			responseData = ads[id];
		} else {
			responseData = [];
		}
	} else {
		responseData = [];
		for(key in ads){
			responseData.push(ads[key]);
		}
	}

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');

	var data = JSON.stringify(responseData);
	res.setHeader('Content-Length', data.length);
	res.end(data);
});

app.get('/advertiser/:id?', function(req, res){
	responseData = {};
	var id = req.param('id') || false;

	if(id){
		id = parseInt(id);
		if(advertisers[id] !== undefined){
			responseData = advertisers[id];
		} else {
			responseData = [];
		}
	} else {
		responseData = [];
		for(key in advertisers){
			responseData.push(advertisers[key]);
		}
	}

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');

	var data = JSON.stringify(responseData);
	res.setHeader('Content-Length', data.length);
	res.end(data);
});

app.get('/contact/:id?', function(req, res){
	responseData = {};
	var id = req.param('id') || false;

	if(id){
		id = parseInt(id);
		if(contacts[id] !== undefined){
			responseData = contacts[id];
		} else {
			responseData = [];
		}
	} else {
		responseData = [];
		for(key in contacts){
			responseData.push(contacts[key]);
		}
	}

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');

	var data = JSON.stringify(responseData);
	res.setHeader('Content-Length', data.length);
	res.end(data);
});

app.get('/stats/:id?', function(req, res){
	responseData = {};
	var id = req.param('id') || false;

	if(id){
		id = parseInt(id);
		if(stats[id] !== undefined){
			responseData = stats[id];
		} else {
			responseData = [];
		}
	} else {
		responseData = [];
	}

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');

	var data = JSON.stringify(responseData);
	res.setHeader('Content-Length', data.length);
	res.end(data);
});

app.post('/campaign/:id', function(req, res){

	responseData = {};
	var id = req.param('id') || false;
	if((id = parseInt(id)) && parseInt(req.body.id) == id){
		campaign[id] = req.body;
		responseData = req.body;
	} else {
		responseData = [];
	}

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');

	var data = JSON.stringify(responseData);
	res.setHeader('Content-Length', data.length);
	res.end(data);
});

app.listen(3000);
