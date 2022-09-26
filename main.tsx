/** @jsx h */
import blog, { h } from 'blog'
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

const gaScript = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-G64GWBMMKR');
`

blog({
  author: 'Federico Mirás',
  title: "Fefo's Blog",
  avatar: 'https://cdn.fmiras.com/avatar.jpg',
  avatarClass: 'rounded-full',
  favicon: 'https://cdn.fmiras.com/favicon.ico',
  description: `Hi There! I'm Federico Mirás, you can call me "Fefo". I'm a Tech Entrepreneur, Angel Investor & Hacker. Here I share a few thoughts and challenges I faced during my career.`,
  links: [
    { title: 'Email', url: 'mailto:miras.federico@gmail.com' },
    { title: 'GitHub', url: 'https://github.com/fmiras' },
    { title: 'Twitter', url: 'https://twitter.com/fefomiras' }
  ],
  footer: (
    <footer>
      <br />
      Want to{' '}
      <b>
        <a href="mailto:miras.federico@gmail.com">contact me?</a>
      </b>{' '}
      You can encrypt your email using{' '}
      <b>
        <a href="https://keyserver.ubuntu.com/pks/lookup?search=0x575B7F0EE31E840A42FD16A929B90C56E55F7745&amp;fingerprint=on&amp;op=index">
          my PGP public key.
        </a>
      </b>
      <br />
      Fingerprint: <b>575B 7F0E E31E 840A 42FD 16A9 29B9 0C56 E55F 7745</b>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-G64GWBMMKR" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-G64GWBMMKR"></script>
      <script dangerouslySetInnerHTML={{ __html: gaScript }} />
    </footer>
  ),
  middlewares: [
    rewrites({
      '/pluggy-2021-federico': 'https://pluggy.ai/blog/pluggy-2021-federico',
      '/decentraland-and-wallet-connect':
        'https://decentraland.org/blog/announcements/decentraland-and-wallet-connect',
      '/decentraland-on-now': 'https://decentraland.org/blog/announcements/decentraland-on-now'
    })
  ]
})
