# Blog Website Project

## Overview
This project is a simple blog website that allows users to create, view, update, and delete blog posts. The website includes features such as:
- **Add a Blog**: Users can submit a form to create a new blog post with a title, description, content, and an image.
- **View Blogs**: All blog posts are displayed on the homepage with pagination.
- **Like and Bookmark Blogs**: Users can like posts and bookmark them for later viewing.
- **Update and Delete Blogs**: Users can edit or delete their blog posts.

## Features
- Responsive design that works well across desktop, tablet, and mobile devices.
- Modern UI with smooth animations and color transitions.
- User-uploaded images for each blog post.
- Pagination for better performance when displaying multiple blogs.
- Basic form validation and image uploading support.
- Frontend built using **HTML**, **CSS**, and **JavaScript**.
  
## Folder Structure

## Requirements
To run this project locally, ensure you have a basic web browser and a local web server like **Live Server** (for VS Code) or **http-server** installed. No backend API is required for this version of the project.

## Running the Project

### Using VS Code with Live Server
1. Install the **Live Server** extension from the VS Code marketplace.
2. Right-click on `index.html` and choose **Open with Live Server**. This will launch the project in your browser at `http://127.0.0.1:5500/`.

## How to Add Blogs
1. Fill out the form on the "Add Blog" section with the blog's title, description, content, and an optional image.
2. Click "Submit" to add the blog post.
3. View the blog on the homepage, where you can like or delete the post.

## Known Issues / Future Improvements
- **Image Uploads**: Currently, images uploaded by users are stored as data URLs and only persist on the frontend.
- **API Integration**: In the future, the project could be connected to a real backend API for data persistence.
- **User Authentication**: Future versions could include user authentication to restrict blog post editing to the user who created it.

