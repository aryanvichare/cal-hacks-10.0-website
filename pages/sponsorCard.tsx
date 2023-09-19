import Link from "next/link"
import Image from "next/image"

export default function Sponsor( { imagePath }){
    return (
        <div className="flex justify-center items-center bg-white rounded-lg aspect-[4/3]">
            <img
                className="phone:max-h-12 md:max-h-40 xl:max-h-55 2xl:max-h-60 max-w-[20vw]"
                src={imagePath}
                alt="sponsor logo"
            />
        </div>
    )
}