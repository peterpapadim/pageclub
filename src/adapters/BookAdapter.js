class BookAdapter {

  static create(book) {
      const JWT = sessionStorage.jwt
      const USER = JSON.parse(sessionStorage.user)
      return fetch("http://localhost:3000/api/v1/books", {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWT}`
        }),
        body: JSON.stringify({user: USER.id, book: book.id})
      });
  }

  static destroy(book) {
      const JWT = sessionStorage.jwt
      const USER = JSON.parse(sessionStorage.user)
      return fetch(`http://localhost:3000/api/v1/books/${book.id}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWT}`
        }),
        body: JSON.stringify({user: USER.id})
      });
  }

  static fetchLibrary(userId) {
    const JWT = sessionStorage.jwt
    return fetch(`http://localhost:3000/api/v1/users/${userId}/library`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JWT}`
      }),
    })
    .then(resp => resp.json())
  }

}

export default BookAdapter;
