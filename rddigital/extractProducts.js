import https from 'https';
https.get('https://rddigital.co.uk/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const lines = data.split('\n');
        let inProducts = false;
        let productsHtml = '';
        for (const line of lines) {
            if (line.includes('OUR PRODUCTS')) inProducts = true;
            if (inProducts) productsHtml += line + '\n';
            if (inProducts && line.includes('</section>')) break;
        }
        console.log(productsHtml.replace(/<svg[\s\S]*?<\/svg>/g, '<SVG>').substring(0, 3000));
    });
});
