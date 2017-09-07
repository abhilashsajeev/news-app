const baseUrl = 'http://localhost:8080/news' //https://news-app-goplztdsnq.now.sh/news'
export const getNews = async () => {
  try {
    const res = await fetch(baseUrl);
    return res.json();
  } catch (err) {
    return err;
  }
};

export const addNews = async (news) => {
  try {
    const res = await fetch(baseUrl, {
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
  const res = await fetch(`${baseUrl}/${news.id}`, {
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
  const res =  await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
  return res;
}