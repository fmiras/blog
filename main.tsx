/** @jsx h */

import blog, { ga, redirects } from 'blog'

blog({
  title: "Fefo's Blog",
  description: `Hi There! I'm Federico Mirás, you can call me "Fefo". I'm a Tech Entrepreneur, Angel Investor & Hacker. Here I share a few thoughts and challenges I faced during my career.`,
  // footer: <footer>Your custom footer</footer>,
  avatar: 'https://fmiras.com/_next/image?url=%2Fimages%2Fprofile.jpg&w=384&q=75',
  avatarClass: 'rounded-full',
  author: 'Federico Mirás',

  middlewares: [
    ga('G-G64GWBMMKR'),
    redirects({
      '/hello_world.html': '/hello_world'
    })
  ]
})
