class GoogleBooksAdapter {

  static searchResults(searchTerm) {
    const JWT = sessionStorage.jwt
    return fetch(`http://localhost:3000/api/v1/search/${searchTerm}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JWT}`
      }),
    })
    .then(resp => resp.json())
  }

}

export default GoogleBooksAdapter;
