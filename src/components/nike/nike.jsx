import dodge1 from "/public/dodge1.jpg"
import dodge2 from "/public/dodge2.jpg"
import dodge3 from "/public/dodge3.jpg"
import dodge4 from "/public/dodge4.jpg"
import dodge5 from "/public/dodge5.avif"
import dodge6 from "/public/dodge6.jpg"
export const Nike = () => {
    return <div className="flex gap-3 flex-wrap justify-center ">
    <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={dodge1} alt="img" /></div>
    <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={dodge2} alt="img" /></div>
    <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={dodge3} alt="img" /></div>
    <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={dodge4} alt="img" /></div>
    <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={dodge5} alt="img" /></div>
    <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={dodge6} alt="img" /></div>
    </div>
}