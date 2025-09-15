import Button from "./Button";
import Logo from "./Logo";

export default function Navbar(){
  return (
    <>
      <nav className="sticky top-0 bg-white z-10 flex justify-between items-center h-20 w-full px-5 py-2">
        <Logo/>
        <Button title="Sign Up"/>
      </nav>
    </>
  )
}