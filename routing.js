// This is a function that takes a page path as an argument
// You need to make the function load the content of that page into the "content" div on the index file
async function loadPage(page) {
  console.log(location.hash)
  // fetch the page, use await
  const res = await fetch(page)
  // get text from res, use await
  const content = await res.text();
  // get the element with id 'content'
  const element = document.getElementById('content');
  // set innerHTML of the element
  // your code goes here
  element.innerHTML = content;
};

/*
async function loadPage(){
  console.log(location.hash);
  let page      = location.hash.replace('#', '');
  const res     = await fetch(page);
  const content = await res.text();
  const element = document.getElementById('content');
  element.innerHTML = content;
};            

window.addEventListener('hashchange', loadPage);
*/
