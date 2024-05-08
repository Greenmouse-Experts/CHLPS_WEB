import EmptyState1 from "../../lib/components/empty-state"

const MyMembership = () => {
  return (
    <div>
        <div className="drop-shadow-md bg-white p-4 lg:pt-5 lg:px-7 mt-6 rounded-lg">
            <EmptyState1 text="You currently are not subscribed to any membership plan" size={400}/>
        </div>
    </div>
  )
}

export default MyMembership