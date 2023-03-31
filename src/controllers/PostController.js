const postsData = [
  { id: "1", title: "azeaze", content: "azeaze" },
  { id: "2", title: "azeaze", content: "azeaze" },
];

const getAllPosts = (_, res) => {
  return res.send(postsData);
};

const getPost = (req, res) => {
  const { id } = req.params;
  const post = postsData.find((post) => post.id === id);
  return res.send(post);
};

const createPost = (_, res) => {
  // Traitement de création d'un post...
  return res.send(postsData);
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
};
