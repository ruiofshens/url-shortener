const QUERY = {
    ADD_URL: 'INSERT INTO urls (short_url, long_url, created_at) VALUES (?, ?, ?)',
    SELECT_URL: 'SELECT long_url FROM urls WHERE short_url = ?',
    SELECT_ALL_URLS: 'SELECT * FROM urls',
}

export default QUERY;