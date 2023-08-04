import { Navbar } from './components/Navbar'
import Path from './assets/path.jpg'
import { Link } from 'react-router-dom'


export function ErrorPage() {
  
  return (
    <>
        <Navbar/>
        <div className="section-padding">
            <div className="error-page">
                <h1>
                    Oops, it looks like you stumbled across the wrong page.
                    Follow this path to check out our products!
                </h1>
                <Link to="/products">
                    <img src={Path}></img>
                </Link>
            </div>
        </div>
    </>
  )
}

