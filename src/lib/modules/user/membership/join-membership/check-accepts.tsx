import { Link } from "react-router-dom"

const CheckAccepts = () => {
  return (
    <div className="mt-6 grid gap-3">
        <div className="flex items-center gap-x-2">
            <input type="checkbox" className="w-4 h-4 shrink-0"/>
            <p>By signing up to this membership plan and agreeing to the Privacy Policy you agree to this web site storing your information.</p>
        </div>
        <div className="flex items-center gap-x-2">
            <input type="checkbox" className="w-4 h-4 shrink-0"/>
            <p>I want to subscribe to your newsletters.</p>
        </div>
        <div className="flex items-center gap-x-2">
            <input type="checkbox" className="w-4 h-4 shrink-0"/>
            <p>I accept <Link to={'/terms'} className="text-primary">Terms & Conditions</Link>.</p>
        </div>
    </div>
  )
}

export default CheckAccepts