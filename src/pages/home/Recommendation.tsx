import { propertyPosts } from "@/constants/propertyData"
import SmallCard from "./SmallCard"

const Recommendation = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-5">Bất động sản dành cho bạn</h2>
      <div className="grid grid-cols-12 gap-5">
        {
          propertyPosts.map((post: any, index: number) => {
            return (
              <div className="col-span-3" key={`small-card-${index}`}>
                <SmallCard data={post}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Recommendation