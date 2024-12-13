import { Link } from "react-router-dom"
export const Home = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">Dashboard</Link>
      <Link to="/about">Profile</Link>
    </div>
  )
}