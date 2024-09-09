
const blogs = [
    {
        id: 1,
        title: "A Colorful Blog Post",
        description: "This blog has a vibrant design and animation!",
        content: "This is the full content of the blog with improved animation and color palette.",
        image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
        likes: 0
    },
    {
        id: 2,
        title: "Another Stunning Post",
        description: "This blog showcases modern web design.",
        content: "Here's some interesting content for your readers.",
        image: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fHww",
        likes: 0
    }
];

const blogSection = document.getElementById('blogs');

function renderBlogs() {
    blogSection.innerHTML = "";
    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');

        blogCard.innerHTML = `
            <img src="${blog.image}" alt="Blog Image">
            <div class="blog-card-content">
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
            </div>
            <div class="blog-card-actions">
                <button class="like-btn" onclick="likeBlog(${blog.id})">❤ <span>${blog.likes}</span></button>
                <button onclick="deleteBlog(${blog.id})">Delete</button>
            </div>
        `;
        blogSection.appendChild(blogCard);
    });
}

function likeBlog(id) {
    const blog = blogs.find(b => b.id === id);
    if (blog) {
        blog.likes++;
        renderBlogs();
    }
}


function deleteBlog(id) {
    const confirmation = confirm("Are you sure you want to delete this blog?");
    if (confirmation) {
        const index = blogs.findIndex(b => b.id === id);
        if (index !== -1) {
            blogs.splice(index, 1);
            renderBlogs();
        }
    }
}

const blogForm = document.getElementById('blog-form');

blogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('blog-title').value;
    const description = document.getElementById('blog-description').value;
    const content = document.getElementById('blog-content').value;
    const imageFile = document.getElementById('blog-image').files[0];

    let imageUrl = 'https://via.placeholder.com/600x400?text=New+Blog'; 

    if (imageFile) {
        const reader = new FileReader();

        reader.onloadend = function () {
            imageUrl = reader.result;
            const newBlog = {
                id: blogs.length + 1,
                title,
                description,
                content,
                image: imageUrl,
                likes: 0
            };

            blogs.push(newBlog);
            renderBlogs();
            blogForm.reset();
        };

        reader.onerror = function (error) {
            console.error('Error reading file:', error);
        };

        reader.readAsDataURL(imageFile); 
    } else {
        const newBlog = {
            id: blogs.length + 1,
            title,
            description,
            content,
            image: imageUrl,
            likes: 0
        };

        blogs.push(newBlog);
        renderBlogs();
        blogForm.reset();
    }
});

renderBlogs();








