class UserAdapter {

  static show() {
    const JWT = sessionStorage.jwt
    return fetch('http://localhost:3000/api/v1/users/show', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JWT}`
      }),
    })
    .then(resp => resp.json())
  }

  static update(updated_full_name) {
      const JWT = sessionStorage.jwt
      return fetch(`http://localhost:3000/api/v1/users/${JSON.parse(sessionStorage.user).id}`, {
        method: 'PATCH',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWT}`
        }),
        body: JSON.stringify({updated_full_name: updated_full_name})
      });
  }

  static delete() {
      const JWT = sessionStorage.jwt
      return fetch(`http://localhost:3000/api/v1/users/${JSON.parse(sessionStorage.user).id}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWT}`
        }),
      });
  }
}

export default UserAdapter;
