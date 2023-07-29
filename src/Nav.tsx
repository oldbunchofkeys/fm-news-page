
type Props = {
  logoImageSrc: string
}
export default function Nav({logoImageSrc}: Props) {
  return (
    <nav className="flex items-center">
      <img className='mr-auto' src={logoImageSrc} alt="logo" />
      <a className='ml-10' href="#">Home</a>
      <a className='ml-10' href="#">New</a>
      <a className='ml-10' href="#">Popular</a>
      <a className='ml-10' href="#">Trending</a>
      <a className='ml-10' href="#">Categories</a>
    </nav>
  )
}

