import https from 'https';

https.get('https://www.pngegg.com/en/png-iinay', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/<img[^>]+src="([^">]+png)"/g);
    console.log("matches:", match);
  });
}).on('error', (e) => {
  console.error(e);
});
