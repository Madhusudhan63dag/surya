// Add static file serving for loader.io verification
app.get('/loaderio-f0fe75f597484ccca6017d6a13510f5f', (req, res) => {
  res.type('text/plain');
  res.send('loaderio-f0fe75f597484ccca6017d6a13510f5f');
});