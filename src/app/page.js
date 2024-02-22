import HomeHeader from "@/components/HomeHeader"
import HomeSearch from "@/components/HomeSearch"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className=" flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google Logo"
          width={300}
          height={100}
          priority
          style={{width:"auto", height:"auto"}}
        />
      <HomeSearch/>
      </div> 
    </>
  )
}

export default Home