import React from "react";

const profie = () => {
    return (
        <div className=" flex flex-col gap-[18px] text-neutral-600">
            <div className="tracking-tight font-semibold text-[20px] px-[18px] py-[24px] shadow bg-white">
                Account Settings
            </div>

            <div className="text-neutral-700 text-[14px]  h-[652px] flex flex-col border-neutral-300 gap-[20px] p-[18px]" style={{background:"rgb(211 211 211 / 17%)"}}>
                <div className="flex gap-[12px]">
                    <div>
                        <img
                            className="rounded-full h-[80px] w-[80px] "
                            src="https://educase-react-js.vercel.app/profile.png"
                            alt="Marry Doe"
                        />
                    </div>

                    <div
        
        className="relative top-[40px] left-[-22px] bg-white p-2 rounded-full shadow cursor-pointer"
      >
        <img alt="Camera Icon"  src="https://pop-x-three-psi.vercel.app/cam.svg" style={{color: "transparent"}}></img>
      </div>


                    <div className="flex flex-col gap-[4px]">
                        <div className="font-semibold">Marry Doe</div>
                        <div>marry@gmail.com</div>
                    </div>
                </div>
                <div >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea    
                    commodo consequat.
                </div>
            </div>

        </div>   
    );
};

export default profie

