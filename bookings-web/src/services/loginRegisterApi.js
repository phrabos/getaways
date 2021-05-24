export const userLogin = async (email, password) => {
  const res = await fetch(`${process.env.BASE_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type':'application/jSON' },
    body: JSON.stringify({ email, password })
  });
  const json = await res.json();
  console.log(json);
  return json;
};

export const userRegister = async (email, username, password) => {
  const res = await fetch(`${process.env.BASE_URL}/users/create`, {
    method: 'POST',
    headers: { 'Content-Type':'application/jSON' },
    body: JSON.stringify({ 
      email,
      password,
      username, 
    })
  });
  const json = await res.json();
  return json;

};

export const logUserOut = async () => {
  const res = await fetch(`${process.env.BASE_URL}/users/logout`, { 
    credentials: 'include'
  });
  const json = await res.json();
  localStorage.removeItem('TOKEN');
  return json;
};

export const userUpdate = async (id, oldEmail, newEmail, password, username) => {
  const res = await fetch(`${process.env.BASE_URL}/users/${id}`, { 
    credentials: 'include',
    method: 'PUT',
    headers: { 'Content-Type':'application/jSON' },
    body: JSON.stringify({ 
      oldEmail,
      newEmail,
      password,
      username, 
    })
  });
  const json = await res.json();
  localStorage.removeItem('TOKEN');
  return json;
};

