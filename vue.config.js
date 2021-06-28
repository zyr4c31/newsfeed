module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/newsfeed/' // --- '/<REPO_NAME>/'
    : '/',
};
