const blogPosts = [
    {
      id: 1,
      title: 'The Impact of Artificial Intelligence on Ecommerce',
      image: 'assets/images/products/7.jpg',
      content: 'Artificial intelligence (AI) is revolutionizing the ecommerce industry. From personalized product recommendations to chatbots and voice assistants, AI is changing the way we shop online.',
      date: '2022-01-01'
    },
    {
      id: 2,
      title: 'Ecommerce Marketing Strategies for Small Businesses',
      image: 'assets/images/products/8.jpg',
      content: 'As a small business owner, competing with larger ecommerce companies can be daunting. However, with the right marketing strategies, you can level the playing field and drive sales. In this article.',
      date: '2022-01-15'
    },
    {
      id: 3,
      title: 'The Role of Social Media in Ecommerce',
      image: 'assets/images/products/3.jpg',
      content: 'Social media has become an essential channel for ecommerce businesses. Not only can it drive traffic and sales, but it also provides a platform for customer engagement and brand building. In this article.',
      date: '2022-01-15'
    },
    {
      id: 4,
      title: 'Ecommerce Website Optimization: Best Practices',
      image: 'assets/images/products/4.jpg',
      content: 'A well-designed and optimized ecommerce website is crucial for driving conversions and sales. In this article.',
      date: '2022-01-15'
    },
    {
      id: 5,
      title: 'The Future of Ecommerce: Trends and Predictions',
      image: 'assets/images/products/5.jpg',
      content: 'The ecommerce industry is constantly evolving, with new technologies and trends emerging every year.',
      date: '2022-01-15'
    },
    {
      id: 6,
      title: 'Ecommerce Customer Service: Strategies for Success',
      image: 'assets/images/products/6.jpg',
      content: 'Providing excellent customer service is critical for ecommerce businesses. In this article.',
      date: '2022-01-15'
    },
    // Add more blog posts here...
  ];
  
  // Function to display blog posts
  function displayBlogPosts(blogPosts) {
    const blogPostHTML = blogPosts.map((blogPost) => {
      return `
        <div class="blog-post">
          <img src="${blogPost.image}" alt="${blogPost.title}">
          <h2>${blogPost.title}</h2>
          <p>${blogPost.content}</p>
          <p>Posted on ${blogPost.date}</p>
          <a href="#">Read more</a>
        </div>
      `;
    }).join('');
    document.querySelector('.blog-posts').innerHTML = blogPostHTML;
  }
  
  // Display blog posts
  displayBlogPosts(blogPosts);
  
  