/** @jsx h */

import blog, { ga } from 'blog'
import { BlogMiddleware, BlogContext } from 'blog/types'

export function rewrites(rewritesMap: Record<string, string>): BlogMiddleware {
  return async function (req: Request, ctx: BlogContext): Promise<Response> {
    const { pathname } = new URL(req.url)

    let maybeRewrite = rewritesMap[pathname]

    if (!maybeRewrite) {
      // trim leading slash
      maybeRewrite = rewritesMap[pathname.slice(1)]
    }

    if (maybeRewrite) {
      return new Response(null, {
        status: 307,
        headers: {
          location: maybeRewrite
        }
      })
    }

    return await ctx.next()
  }
}

blog({
  title: "Fefo's Blog",
  description: `Hi There! I'm Federico Mirás, you can call me "Fefo". I'm a Tech Entrepreneur, Angel Investor & Hacker. Here I share a few thoughts and challenges I faced during my career.`,
  // footer: <footer>Your custom footer</footer>,
  avatar: 'https://fmiras.com/_next/image?url=%2Fimages%2Fprofile.jpg&w=384&q=75',
  avatarClass: 'rounded-full',
  author: 'Federico Mirás',
  middlewares: [
    ga('G-G64GWBMMKR'),
    rewrites({
      '/pluggy-2021-federico': 'https://pluggy.ai/blog/pluggy-2021-federico',
      '/decentraland-and-wallet-connect':
        'https://decentraland.org/blog/announcements/decentraland-and-wallet-connect',
      '/decentraland-on-now': 'https://decentraland.org/blog/announcements/decentraland-on-now'
    })
  ]
})
