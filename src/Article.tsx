type Props = {
  articleImageSrc: string
}
export default function Article({articleImageSrc}: Props) {
  return (
    <div>
      <img src={articleImageSrc} alt="featured article image" />
      <div className="flex">
        <h1 className="text-6xl">The Bright Future of Web 3.0?</h1>
        <div>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button className="px-8 py-3 bg-[#F15D51] uppercase text-[#FFFDFA]">Read More</button>
        </div>
      </div>
    </div>
  )
}
