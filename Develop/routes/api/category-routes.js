const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

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
  // To pull out info...req.body
  //.create{keyValue Pair} {name: req.body.name}
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;