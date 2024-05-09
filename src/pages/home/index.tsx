import Recommendation from "./Recommendation"
import SearchProperty from "./SearchProperty"

const index = () => {

  return (
    <div className="p-5">
      <div className="flex justify-center">
        <SearchProperty />
      </div>
      <div className="mt-10 p-5">
        <Recommendation />
      </div>
    </div>
  )
}

export default index