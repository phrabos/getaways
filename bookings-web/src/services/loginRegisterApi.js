export const userLogin = async (email, password) => {
  const res = await fetch(`${process.env.BASE_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type':'application/jSON' },
    body: JSON.stringify({ email, password })
  });
  const json = await res.json();
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
  localStorage.removeItem('USER');
  return json;
};

export const userUpdate = async (oldEmail, newEmail, password, newUsername) => {
  const res = await fetch(`${process.env.BASE_URL}/users/update`, { 
    credentials: 'include',
    method: 'PUT',
    headers: { 'Content-Type':'application/jSON' },
    body: JSON.stringify({ 
      oldEmail,
      newEmail,
      password,
      newUsername, 
    })
  });
  const json = await res.json();
  return json;
};

