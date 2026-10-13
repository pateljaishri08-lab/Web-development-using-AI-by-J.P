import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../assets/PackageInReact.css'


export function PackageInReact() {
  function showWelcomeToast() {
    toast.success('Welcome To React Project', {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  return (
    <div className="pkgPage">
      <div className="pkgCard">
        <h1 className="pkgTitle">React Toastify Demo</h1>
        <p className="pkgSubtitle">Click the button to show a toast message.</p>

        <button className="pkgButton" onClick={showWelcomeToast} type="button">
          Show Welcome Message
        </button>
      </div>

      <ToastContainer />
    </div>
  )
}