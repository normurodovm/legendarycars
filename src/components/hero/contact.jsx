import productimg2 from "/public/124.jpg"
import productimg4 from "/public/C-class-sedan.jpg"
import productimg5 from "/public/CLA-Coupe.jpg"
import productimg6 from "/public/cls63amg.jpg"
import productimg8 from "/public/G-Class-SUV.jpg"
import productimg11 from "/public/w211.jpg"
export const Contact = () => {
    return <div className=" flex gap-3 flex-wrap justify-center ">
        <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={productimg2} alt="img" /></div>
        <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={productimg4} alt="img" /></div>
        <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={productimg5} alt="img" /></div>
        <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={productimg6} alt="img" /></div>
        <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={productimg8} alt="img" /></div>
        <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={productimg11} alt="img" /></div>
    </div>
}