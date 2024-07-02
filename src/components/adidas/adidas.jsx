import audi1 from "/public/audi1.jpg"
import audi2 from "/public/audi2.avif"
import audi3 from "/public/audi3.jpg"
// import audi4 from "/public/audi4.jpg"
// import audi5 from "/public/audi5.jpg"
// import audi6  from "/public/audi5.jpg"
export const Cls = () => {
    return  <div className=" flex gap-3 flex-wrap justify-center ">
    <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={audi1} alt="img" /></div>
    <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={audi2} alt="img" /></div>
    <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={audi3} alt="img" /></div>
    {/* <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={audi4} alt="img" /></div>
    <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={audi5} alt="img" /></div>
    <div className="rounded-3xl bg-white p-6 w-[375px] "><img src={audi6} alt="img" /></div> */}
</div>
}