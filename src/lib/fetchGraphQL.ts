async function fetchGraphQL(text: string, variables?: any) {
    const Token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;
    const response = await fetch(`${process.env.NEXT_PUBLIC_RELAY_ENDPOINT}`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${Token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });
  
    return await response.json();
  }
  
  export default fetchGraphQL;