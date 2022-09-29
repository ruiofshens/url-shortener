const QUERY = {
    ADD_URL: 'INSERT INTO urls (short_url, long_url) VALUES (?, ?);SELECT * FROM urls WHERE long_url = ?',
    FIND_BY_SHORT_URL: 'SELECT * FROM urls WHERE short_url = ?',
    FIND_BY_LONG_URL: 'SELECT * FROM urls WHERE long_url = ?',
    REMOVE_URL: 'DELETE FROM urls WHERE short_url = ?',
    SELECT_ALL_URLS: 'SELECT * FROM urls',
    UPDATE_URL: 'UPDATE urls SET long_url = ? WHERE short_url = ?; SELECT * FROM urls WHERE short_url = ?',
}

export default QUERY;