class SessionAdapter {

  static login(credentials) {
    const request = new Request('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static create(credentials) {
    credentials.email = credentials.email.toLowerCase()
    const request = new Request('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({user: credentials})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default SessionAdapter;
