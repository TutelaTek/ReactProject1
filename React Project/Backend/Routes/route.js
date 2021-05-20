const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');


// list all routes
router.get('/menu', controller.menu_items);
router.post('/menu', controller.post_item);
router.post('/menus', controller.delete_item);
router.put('/menu/:id', controller.update_item);
router.get('/item/:id', controller.get_item);

router.get('/location', controller.location_item);
router.post('/location', controller.post_location);
router.post('/locations', controller.delete_location);

router.post('/comment', controller.post_comment);

//router.post('/register', controller.register);'


module.exports = router;