export async function handler(event) {
    try {
      const path = event.rawUrl.split('/.netlify/functions/api-proxy')[1] || '';
      const targetUrl = `http://app.qidah.net/api${path}`;
  
      const response = await fetch(targetUrl, {
        method: event.httpMethod,
        headers: event.headers,
        body: event.body
      });
  
      const body = await response.text();
  
      return {
        statusCode: response.status,
        body,
        headers: {
          'Content-Type': response.headers.get('content-type') || 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
      };
    }
  }
  