export const MovieCast =({img, name}) =>{
    return(
        <div className=" flex gap-3 my-10">
            
            <div className="cast-img flex gap-3 ">
                <img className="rounded-full w-24 h-24 object-cover" src={img} alt={name} />
            </div>
        </div>
    )
}