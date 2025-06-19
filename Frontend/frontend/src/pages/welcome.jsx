import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (


<div className="h-full flex items-end justify-center p-6 bg-gray-50">
  <div className="w-[300px] text-left space-y-6">
    
    <div>
      <h2 className="text-2xl font-bold text-neutral">Welcome to PopX</h2>
      <p className="text-sm text-gray-500 mt-1">
        Lorem ipsum dolor sit amet, <br/>    
       consectetur adipiscing elit.
      </p>
    </div>


    <div className="space-y-4 mt-4">
  <button
    onClick={() => navigate("/signup")}
    className="bg-[#6c25ff] text-white w-[280px] h-[40px] px-5 mb-[10px] rounded-[5px] font-semibold"
    style={{ color: 'white' }}
  >
    Create Account
  </button>

  <button
    onClick={() => navigate("/login")}
    className="bg-[#cebafb]  text-white w-[280px] h-[40px] mb-[20px] rounded-[5px] font-semibold"
    
  >
    Already Registered? Login
  </button>
</div>



  </div>
</div>


  );
};

export default Welcome;
