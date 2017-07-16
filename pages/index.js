// import React from 'react'
// export default class extends React.Component {
//   static async getInitialProps ({ req }) {
//     return req
//       ? { userAgent: req.headers['user-agent'] }
//       : { userAgent: navigator.userAgent }
//   }
//   render () {
//     return <div>
//       Hello World {this.props.userAgent}
//     </div>
//   }
// }

// <div>Click url帶參數情況<Link href={{ pathname: 'about', query: { name: 'Zeit' }}}><a>here</a></Link> to read more</div>


// pages/index.js
import Link from 'next/link'
import Router from 'next/router'
export default () => (
  <div>
    <div>Click <Link href="/about"><a>here</a></Link> to read more</div>
    <div>Click onClick語法 <span className='huangyb' onClick={() => Router.push('/about')}>點我跳转</span> to read more</div>
    <div>
      style JSX 語法
      <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: #999;
        }
        .huangyb {
          color: #fcf;
          font-size: 25px;
          cursor: pointer;
        }
      `}</style>
    </div>
  </div>

)