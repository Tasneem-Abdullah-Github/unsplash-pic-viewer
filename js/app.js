const header = document.getElementById('header');
header.classList.add('text-center', 'text-warning');
document.getElementById('search-area').classList.add('d-flex', 'justify-content-center', 'align-item-center');
document.getElementById('search-btn').classList.add('btn', 'btn-outline-dark', 'm-2');
document.getElementById('search-field').classList.add('p-1', 'm-2');

const loadPhotos = () => {
    const inputField = document.getElementById('search-field');
    const searchText = inputField.value;
    const apiKey = 'Nsa25o_rEMuJvuqEj5t2C3v5Pequcn7W7uCGeZo5hFM';
    const url = `https://api.unsplash.com/search/photos?query=${searchText}&client_id=${apiKey}`
    fetch(url)
    .then(res => res.json())
    .then(data => showPhotos(data))
    inputField.value = '';
    const photosArea2 = document.getElementById('photos-area');
    photosArea2.textContent = '';
}

const showPhotos = data =>{
    const photos = data.results;
    const photosArea = document.getElementById('photos-areas');
    photosArea.classList.add('row');
    const photosArea2 = document.getElementById('photos-area');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.classList.add( 'my-2', 'rounded-2','col-10', 'mx-auto', 'col-md-8', 'col-lg-6')
        div.innerHTML = `
        <img src = "${photo.urls.regular}" class = "img-fluid rounded-2"></img>
        `
        photosArea2.appendChild(div)
    });
}

const searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', loadPhotos);

const inputField = document.getElementById('search-field');

inputField.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
})

const loadFooter = () =>{
const footer = document.createElement('footer');
footer.classList.add('m-5')
footer.innerHTML = `
<p class = "h5 text-center">Powered by <a href = "https://unsplash.com" target = "_blank">Unsplash</a></p>
<p class = "text-center h4">Made by <span class = "text-primary">Tasneem</span></p>
`
const body = document.getElementById('body');
body.appendChild(footer);
}
loadFooter();

