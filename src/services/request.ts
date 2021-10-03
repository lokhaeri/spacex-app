export const getRequest = async (api: string) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow' as RequestRedirect
  };

  try {
    const response = await fetch(api, requestOptions);
    
    switch(response.status) {
      case 200:
        const data = await response.json();
        return data;
      case 500:
        throw new Error(response.statusText);
      default:
        throw new Error("Unrecognised response");
    }
  } catch (e) {
    throw e;
  }
};
