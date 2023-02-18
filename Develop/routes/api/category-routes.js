const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product],
  }).then(categoryData => {
    res.json(categoryData);
  }).catch(err => {
    console.log(err);
    res.json(err);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    include: [Product],
    where: {
      id: req.params.id
    }
  }).then(categoryData => {
    res.json(categoryData);
  }).catch(err => {
    console.log(err);
    res.json(err);
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name 
  }).then(newCategory => {
    res.json(newCategory);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedCategory => {
    res.json(updatedCategory);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(deletedCategory => {
    res.json(deletedCategory);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

module.exports = router;