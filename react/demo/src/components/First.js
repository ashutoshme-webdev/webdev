

export default function First(com){
    let name=com.name;
    console.log(com);
    

    return(
        <div className=" text-rose-900 ">
            {com.children}<br/>
            checking for props for {name}, {com.type}, {com.obj.mark}, {com.ar[2].bike}
        </div>
    );
}