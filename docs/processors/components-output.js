module.exports = {
  name: 'components-output',
  description: 'Put the components into the output',
  runAfter: ['adding-extra-docs'],
  runBefore: ['extra-docs-added'],
  process: function(docs, componentDocs) {
    componentDocs.forEach(function(doc) {
      docs.push(doc);
    });
  }
};
