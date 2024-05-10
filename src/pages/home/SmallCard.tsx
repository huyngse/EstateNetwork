import { abbreviateNumber } from "@/utils/NumberUtil"
import { calculateTimeSince } from "@/utils/TimeUtil"
import { HeartOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { ReactNode, useState } from "react"
import { MdLocationPin } from "react-icons/md"
import { Link } from "react-router-dom"

const SmallCard = ({ data }: any) => {
  const [isFav, setIsFav] = useState(false);
  var priceString: ReactNode = "";
  if (data.priceType == "negotiable") {
    priceString = "Giá thỏa thuận";
  } else if (data.priceType == "per_meter") {
    priceString = <>{abbreviateNumber(data.price) + "/m"}<sup>2</sup></>
  } else if (data.priceType == "per_month") {
    priceString = abbreviateNumber(data.price) + "/tháng"
  } else {
    priceString = abbreviateNumber(data.price);
  }
  return (
    <div className="overflow-hidden shadow rounded-lg">
      <div className="overflow-hidden h-[150px]">
        <img src={data.mainImage}></img>
      </div>
      <div className="p-3 text-sm flex flex-col gap-2">
        <Link to={`/property/${data.id}`}>
          <h4 className="line-clamp-2 font-semibold">{data.name}</h4>
        </Link>
        <div className="text-blue-600">
          {priceString}
          &nbsp;
          &bull;
          &nbsp;
          {data.area}
          m<sup>2</sup>
        </div>
        <div className="text-gray-600 text-xs flex items-center font-semibold">
          <MdLocationPin /> {data.district + ", " + data.province}
        </div>
        <div className="flex justify-between">
          <div className="text-gray-500 text-xs">
            đăng {calculateTimeSince(new Date(data.publishDate))}
          </div>
          {
            isFav ?
              <Button type="primary" shape="circle" icon={<HeartOutlined />} danger onClick={() => { setIsFav(false) }} /> :
              <Button type="default" shape="circle" icon={<HeartOutlined />} danger onClick={() => { setIsFav(true) }} />
          }
        </div>

      </div>
    </div>
  )
}

export default SmallCard