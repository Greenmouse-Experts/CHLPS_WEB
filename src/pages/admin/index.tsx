import {  Routes } from "react-router-dom";

const AdminIndex = () => {
    // const token = localStorage.getItem('guard_token')
    // const navigate = useNavigate()
    // useEffect(() => {
    //   if(!token){
    //     navigate("/auth/login");
    //   }
    // }, [])
    // if (!token) {
    //   return;
    // }
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<UserHome />} />
        <Route path="/courses/:id" element={<StudyCourse/>}/>
        <Route element={<UserDashboardLayout/>}> */}
          {/* <Route path="/dashboard" element={<UserDashboard/>}/>
          <Route path="/courses" element={<UserCourses/>}/>
          <Route path="/notify" element={<UserNotify/>}/>
          <Route path="/payments" element={<UserPayments/>}/>
          <Route path="/progress" element={<UserProgress/>}/>
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path="/support" element={<UserSupport/>}/> */}
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default AdminIndex;
