export const getNews = async () => {
  try {
    const res = await fetch('http://localhost:8080/news');
    return res.json();
  } catch (err) {
    return err;
  }
};

export const addNews = async (news) => {
  try {
    const res = await fetch('http://localhost:8080/news', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...news, isPublished: false, date: Date.now() })
    });
    return res.json();
  } catch (err) {
    return err;
  }

}

export const updateNews = async (news) => {
  const res = await fetch(`http://localhost:8080/news/${news.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(news)
  })
  return res.json();

}

export const removeNews = async (id)=> {
  const res =  await fetch(`http://localhost:8080/news/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    }
  });
  return res.json();
}