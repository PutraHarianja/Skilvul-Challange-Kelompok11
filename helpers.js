export const getPosts = async () => {
  // EDIT HERE
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
    const jsonUserData = await response.json();
    return jsonUserData.slice(0,16);
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (post_id) => {
  // EDIT HERE
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`, {
      method: "GET",
    });
    if(response.status == 404) return null;
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
    return -1;
  }
};

export const getPostComments = async (post_id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`, {
      method: "GET",
    });
    const jsonData = await response.json();
    console.log()
    return jsonData;
  } catch (error) {
    console.log(error);
    return -1;
  }
};

export const getAuthor = async (user_id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`, {
      method: "GET",
    });
    const jsonData = await response.json();
    console.log()
    return jsonData;
  } catch (error) {
    console.log(error);
    return -1;
  }
};

export const getPostsByAuthor = async (author_id) => {
  // EDIT HERE
};

export const getRandomPic = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/random/720x480');
    return image.url;
  } catch (error) {
    console.log('getRandomPic', error);
    throw error;
  }
};

export const getRandomProfile = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/480x480/?profile');
    return image.url;
  } catch (error) {
    console.log('getRandomProfile', error);
    throw error;
  }
};
