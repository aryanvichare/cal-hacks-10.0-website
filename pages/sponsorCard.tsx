import Link from "next/link"
import Image from "next/image"

export default function Sponsor( { imagePath }){
    return (
        <div className="flex justify-center items-center bg-white rounded-lg aspect-square">
            <img
                className="max-w"
                src={imagePath}
                alt="sponsor logo"
            />
        </div>
    )
}