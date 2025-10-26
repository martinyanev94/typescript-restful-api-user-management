interface UserData {
  id: number;
  name: string;
}

function fetchUserData(id: number): Promise<UserData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User${id}` });
    }, 2000);
  });
}

async function displayFetchedUser(id: number): Promise<void> {
  const user = await fetchUserData(id);
  console.log(`Fetched User: ${user.name} (ID: ${user.id})`);
}

displayFetchedUser(1);
