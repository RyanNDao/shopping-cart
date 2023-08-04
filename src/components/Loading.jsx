import loading from '../assets/loading.gif'

export function Loading() {
  
  return (
    <>
        <div className="overlay">
            <img className="loading-spinner" src={loading}></img>
            Loading Products...
        </div>
    </>
  )
}

