const REDIS_PORT = process.env.PORT || 6379;
const redis = require('redis');
const client = redis.createClient(REDIS_PORT);

exports.All_Courses_Cache = (req, res, next) => {
  client.get('all_courses', (err, data) => {
    if (err) throw err;
    if (data !== null) {
      console.log('Middleware Run ..');
      let response = JSON.parse(data);
      return res.status(200).json({ courses: response });
    } else {
      next();
    }
  });
};
