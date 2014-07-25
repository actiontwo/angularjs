/**
 * BlogController
 *
 * @description :: Server-side logic for managing blogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `BlogController.index()`
   */
  index: function (req, res) {
    console.log('ab');
    Blog.find().exec(function(err,blog){
      res.send(blog);
    });
  },


  /**
   * `BlogController.find()`
   */
  find: function (req, res) {
    Blog.findOneById(req.param('id')).exec(function(err,blog){
      res.send(blog);
    })
  },


  /**
   * `BlogController.create()`
   */
  create: function (req, res) {
  Blog.create(req.body).exec(function(err,blog){
    res.send(blog);
  });
  },


  /**
   * `BlogController.update()`
   */
  update: function (req, res) {
    var id = req.param('id');
    Blog.update({id:id},req.body).exec(function(err,blog){
      res.send(blog);
    })
  },


  /**
   * `BlogController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

