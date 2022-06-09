import '@nextcss/reset';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Views/styles/global.css';
import { AppProvider } from '../data/context/ApiContext'

function MyApp({ Component, pageProps }) {
  return (<AppProvider>
              <Component {...pageProps} />
          </AppProvider>)
}
export default MyApp
