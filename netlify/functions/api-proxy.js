export async function handler(event, context) {
    try {
      // رابط API الـHTTP (غيّره حسب حاجتك)
      const apiUrl = "http://app.qidah.net/api";
  
      // جلب البيانات من API
      const response = await fetch(apiUrl);
      const data = await response.text(); // أو .json() لو البيانات JSON
  
      return {
        statusCode: 200,
        body: data,
        headers: {
          "Content-Type": "application/json", // عدل لو نوع مختلف
          "Access-Control-Allow-Origin": "*", // للسماح من أي دومين
        },
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }
  