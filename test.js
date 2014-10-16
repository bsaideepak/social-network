var env = require('./config/environment');

module.exports = {
	main: function(req, res) {
		res.send(env.error);
	}
}
