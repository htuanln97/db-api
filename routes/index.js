/* Connect */
const express = require('express');
const router = express.Router();

/* Call user api */
const userRoutes = require('./users');
const interviewerRoutes = require('./interviewers');


router.get('/', (req, res, next) => {
  res.send({
    message: 'api',
    routes: {
      users: '/api/users', interviewers: '/api/interviewers',
    }
  });
});


router.use('/users', userRoutes);
router.use('/interviewers', interviewerRoutes);
module.exports = router;
