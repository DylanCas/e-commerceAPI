const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll().then((tagData) => {
    res.json(tagData);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne(
    {
      where: {
        id: req.params.id
      },
    }
  ).then((findOneTag) => {
    res.json(findOneTag)
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then((tag) => {
    res.status(200).json(tag);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  // follow up response 
.then(updatedTag => {
  res.json(updatedTag);
})
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(removedTag => {
     res.json(removedTag)
  })
});

module.exports = router;
