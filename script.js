const blogList = document.getElementById('blog-list');
const blogForm = document.getElementById('blog-form');
const addBlogButton = document.getElementById('add-blog-button');
const submitBlogButton = document.getElementById('submit-blog');
const cancelButton = document.getElementById('cancel-button');
const formTitle = document.getElementById('form-title');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const contentInput = document.getElementById('content');

let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
let isEditing = false;
let editIndex = null;

function renderBlogs() {
    blogList.innerHTML = '';
    blogs.forEach((blog, index) => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');
        blogItem.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <button onclick="editBlog(${index})">Edit</button>
            <button onclick="deleteBlog(${index})">Delete</button>
        `;
        blogList.appendChild(blogItem);
    });
}

function addBlog(title, description, content) {
    blogs.push({ title, description, content });
    localStorage.setItem('blogs', JSON.stringify(blogs));
    renderBlogs();
}

function updateBlog(index, title, description, content) {
    blogs[index] = { title, description, content };
    localStorage.setItem('blogs', JSON.stringify(blogs));
    renderBlogs();
}

function deleteBlog(index) {
    if (confirm('Are you sure you want to delete this blog?')) {
        blogs.splice(index, 1);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        renderBlogs();
    }
}

function editBlog(index) {
    const blog = blogs[index];
    titleInput.value = blog.title;
    descriptionInput.value = blog.description;
    contentInput.value = blog.content;
    formTitle.textContent = 'Edit Blog';
    blogForm.style.display = 'block';
    isEditing = true;
    editIndex = index;
}

blogForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = titleInput.value;
    const description = descriptionInput.value;
    const content = contentInput.value;

    if (isEditing) {
        updateBlog(editIndex, title, description, content);
        isEditing = false;
        editIndex = null;
        formTitle.textContent = 'Add New Blog';
    } else {
        addBlog(title, description, content);
    }

    
    titleInput.value = '';
    descriptionInput.value = '';
    contentInput.value = '';
    blogForm.style.display = 'none';
});

addBlogButton.addEventListener('click', function () {
    blogForm.style.display = 'block';
});

cancelButton.addEventListener('click', function () {
    blogForm.style.display = 'none';
});

renderBlogs();
