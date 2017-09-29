class UserAdapter {

  static show() {
    const JWT = `${sessionStorage.jwt}`
    return fetch('http://localhost:3000/api/v1/users/show', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JWT}`
      }),
    })
    .then(resp => resp.json())
  }

}

export default UserAdapter;
