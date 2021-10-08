import { getPost, getPostComments, getAuthor, getRandomPic, getRandomProfile} from './helpers.js';

const params = new URLSearchParams(window.location.search); // tempat menampung parameter yang ada

const elPageTitle = document.querySelector('#page-title');
const elDetailBerita = document.querySelector('#detail-berita');
const elLoading = document.querySelector('#loading');
const elNotFound = document.querySelector('#not-found');
const elCardImg = document.querySelector('.card-img-top');
const elCardText = document.querySelector('.card-text');
const elCardAuthorImg = document.querySelector('#author-img');
const elCardAuthorName = document.querySelector('#author-name');
const elCardAuthorEmail = document.querySelector('#author-email');
const elListGroup = document.querySelector('#list-group');

const createListElement = (comment) => {
  const elListItem = document.createElement('div');
  const elListItemContainer = document.createElement('div');
  const elListItemTitle = document.createElement('div');
  const elListItemText = document.createElement('span');

  elListItem.classList.add('list-group-item');
  elListItemContainer.classList.add('ms-2', 'me-auto');
  elListItemTitle.classList.add('fw-bold');

  elListItemTitle.innerHTML = comment.email;
  elListItemText.innerHTML = comment.body;

  elListItemContainer.appendChild(elListItemTitle);
  elListItemContainer.appendChild(elListItemText);
  elListItem.appendChild(elListItemContainer);

  return elListItem;
};

/**
 * menampilkan detail post beserta dengan author dan comment
 */

const renderPost = async () => {
  // EDIT HERE

  console.log(params)
  let post = await getPost(params.get("post_id"));
  if (post == null) {
    elLoading.remove();
    elNotFound.classList.remove("d-none");
    return
  }
  let pic = await getRandomPic();
  let profilePic = await getRandomProfile()
  let comments = await getPostComments(post.id)
  let author = await getAuthor(post.userId)
  
  Array.from(comments).forEach(async (comment) => {
    elListGroup.appendChild(createListElement(comment))
  });
  
  elCardText.innerHTML = post.body
  elCardAuthorName.innerHTML = author.name
  elCardAuthorEmail.innerHTML = author.email
  elPageTitle.innerHTML = post.title;
  elCardImg.src = pic;
  elCardAuthorImg.src = profilePic;
  elLoading.remove();
  elDetailBerita.classList.remove('d-none');
};

renderPost();
