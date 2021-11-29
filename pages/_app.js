import GlobalStyles from "../styles/globalCss"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles/>
    <Component {...pageProps} />
    </>
  )
}

export  {MyApp}
