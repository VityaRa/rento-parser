import axios from 'axios';

export const request = async (params: URL) => {
  const result = await axios.get<string>(params.toString(), {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0',
      'Content-Type': 'text/html',
    },
    
  });
  return result.data;
}