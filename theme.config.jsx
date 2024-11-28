export default {
    logo: <span>My Nextra Documentation</span>,
    project: {
      link: 'https://github.com/alvarosaavedrau'
    },
    docsRepositoryBase: 'https://github.com/shuding/nextra/tree/main/docs',
    useNextSeoProps() {
      return {
        titleTemplate: 'Página web de Álvaro Saavedra de la Peña Úbeda',
        description: 'Página web de Álvaro Saavedra de la Peña Úbeda, usada para guardar documentación'
      }
    },

    logo: (
      <>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M0 0h24v24H0z" fill="none"/><path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"
          />
        </svg>
        <span style={{ marginLeft: '.4em', fontWeight: 500 }}>
          alvarosaavedra.es
        </span>
      </>
    ),

    chat: {
      link: 'https://www.linkedin.com/in/alvaro-saavedra/',
      icon: (
        <svg width="24" height="24" viewBox="0 0 248 204">
          <path
            fill="currentColor"
            d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
          />
        </svg>
      )
    },

    banner: {
      key: 'Página web en construcción',
      text: (
        <a>🚧 Página web en construcción 🚧</a>
      )
    },

    head: (
      <>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </>
    ),

}