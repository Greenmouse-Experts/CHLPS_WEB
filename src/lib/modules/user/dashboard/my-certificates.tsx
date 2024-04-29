import EmptyState1 from "../../../components/empty-state"
import HeaderText from "../../../components/header-text"

const MyCertificates = () => {
  return (
    <div className="p-5 drop-shadow-md rounded-[6px] bg-white">
      <div className="fw-500 text-primary mb-4">
       <HeaderText text="My Certificates"/>
       </div>
       <div className="py-12">
        <EmptyState1 text="There are currently no certificates" size={200}/>
       </div>
    </div>
  )
}

export default MyCertificates