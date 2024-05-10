import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { getPropertyById } from "@/lib/api/property-api";
import { useDispatch } from "react-redux";
import { setPropertyDetail } from "@/lib/redux/propertySlice";
import { useAppSelector } from "@/hooks/useRedux";
import { abbreviateNumber } from "@/utils/NumberUtil";
import { Avatar, Button } from "antd";
import { HeartOutlined, MailOutlined, PhoneOutlined, ShareAltOutlined, WarningOutlined } from "@ant-design/icons";
import TiptapView from "@/components/tiptap/TiptapView";
import { BiArea, BiBath } from "react-icons/bi";
import { PiMoneyWavyLight } from "react-icons/pi";
import { IoBedOutline, IoDocumentTextOutline } from "react-icons/io5";
import { TbRoad, TbSofa } from "react-icons/tb";
import SecurityIcon from "@/assets/icons/security.png";
import { GrDirections } from "react-icons/gr";
import { MdBalcony } from "react-icons/md";
import { formatDate } from "@/utils/DateUtil";
const PropertyDetail = () => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const propertyDetail = useAppSelector(state => state.property.propertyDetail);
  useEffect(() => {
    const fetchData = async () => {
      if (id == null) return;
      const { data } = await getPropertyById(id);
      dispatch(setPropertyDetail(data.data));
    }
    fetchData();
  }, []);
  var images = [];
  if (propertyDetail == null) return (
    <div>
      404
    </div>
  )
  images = propertyDetail.images.map((x: string) => {
    return {
      original: x,
      thumbnail: x,
      thumbnailClass: "h-[75px] overflow-hidden",
    }
  });
  images.unshift(
    {
      original: propertyDetail.mainImage,
      thumbnail: propertyDetail.mainImage,
      thumbnailClass: "h-[75px] overflow-hidden"
    }
  );
  var priceString: ReactNode = "";
  if (propertyDetail.priceType == "negotiable") {
    priceString = "Giá thỏa thuận";
  } else if (propertyDetail.priceType == "per_meter") {
    priceString = <>{abbreviateNumber(propertyDetail.price) + "/m"}<sup>2</sup></>
  } else if (propertyDetail.priceType == "per_month") {
    priceString = abbreviateNumber(propertyDetail.price) + "/tháng"
  } else {
    priceString = abbreviateNumber(propertyDetail.price);
  }
  return (
    <div className="p-10 grid grid-cols-12 ">
      <div className="col-span-8">
        <ImageGallery
          items={images}
          showPlayButton={false}
        />
        <h2 className="text-2xl font-bold">
          {propertyDetail.name}
        </h2>
        <p>
          {propertyDetail.street + ", " + propertyDetail.ward + ", " + propertyDetail.district + ", " + propertyDetail.province}
        </p>
        <hr className="my-3" />
        <div className="flex justify-between">
          {/* LEFT BOX (PRICE, AREA ,NUM OF ROOM)*/}
          <div className="flex gap-5 text-xs font-semibold">
            <div>
              <p className=" text-gray-500">Mức giá</p>
              <p>
                {priceString}
              </p>
            </div>
            <div>
              <p className=" text-gray-500">Diện tích</p>
              <p>
                {propertyDetail.area} m<sup>2</sup>
              </p>
            </div>
            <div>
              <p className="text-gray-500">Phòng ngủ</p>
              <p>{propertyDetail.numOfBedRoom} NG</p>
            </div>
          </div>
          {/* RIGHT BOX (SHARE, REPORT, FAV) */}
          <div className="flex gap-3">
            <Button type="default" shape="circle" icon={<ShareAltOutlined />} />
            <Button type="default" shape="circle" icon={<WarningOutlined />} />
            {
              isFav ?
                <Button type="primary" shape="circle" icon={<HeartOutlined />} danger onClick={() => { setIsFav(false) }} /> :
                <Button type="default" shape="circle" icon={<HeartOutlined />} danger onClick={() => { setIsFav(true) }} />
            }
          </div>
        </div>
        <hr className="my-3" />
        <div className="">
          {/* THÔNG TIN MÔ TẢ */}
          <h3 className="font-bold">Thông tin mô tả</h3>
          <TiptapView content={propertyDetail.description} />
        </div>
        {/* VERIFIED */}
        {
          propertyDetail.verified && (
            <div className="bg-green-100 p-3 text-xs flex rounded-lg mt-2">
              <div className="flex">
                <div className="me-1">
                  <img src={SecurityIcon} width="25px"></img>
                </div>
                Đặc điểm bất động sản đã được đội ngũ EstateNetwork xác thực thông qua việc kiểm tra sổ đỏ và hình ảnh do người đăng tin cung cấp.
              </div>
              <div className="w-20">
              </div>
            </div>
          )
        }

        <div className="mt-3 mb-5">
          {/* ĐẶT ĐIỂM BẤT ĐỘNG SẢN*/}
          <h3 className="font-bold">Đặt điểm bất động sản</h3>
          <div className="grid grid-cols-12 mt-5">
            {
              propertyDetail.area && (
                <>
                  <div className="col-span-3 p-2 border-y flex gap-2 items-center">
                    <BiArea /> Diện tích
                  </div>
                  <div className="col-span-3 p-2 border-y">
                    {propertyDetail.area} m<sup>2</sup>
                  </div>
                </>
              )
            }
            <div className="col-span-3 p-2 border-y  flex gap-2 items-center">
              <PiMoneyWavyLight /> Mức giá
            </div>
            <div className="col-span-3 p-2 border-y">{priceString}</div>
            {
              propertyDetail.entranceLength && (
                <>
                  <div className="col-span-3 p-2 border-y  flex gap-2 items-center">
                    <TbRoad /> Đường vào
                  </div>
                  <div className="col-span-3 p-2 border-y">
                    {propertyDetail.entranceLength} m
                  </div>
                </>
              )
            }
            {
              propertyDetail.houseDirection && (
                <>
                  <div className="col-span-3 p-2 border-y  flex gap-2 items-center">
                    <GrDirections /> Hướng nhà
                  </div>
                  <div className="col-span-3 p-2 border-y">
                    {propertyDetail.houseDirection}
                  </div>
                </>
              )
            }
            {
              propertyDetail.balconyDirection && (
                <>
                  <div className="col-span-3 p-2 border-y  flex gap-2 items-center">
                    <MdBalcony /> Hướng ban công
                  </div>
                  <div className="col-span-3 p-2 border-y">
                    {propertyDetail.balconyDirection}
                  </div>
                </>
              )
            }
            {
              propertyDetail.numOfBedRoom && (
                <>
                  <div className="col-span-3 p-2 border-y  flex gap-2 items-center">
                    <IoBedOutline /> Số phòng ngủ
                  </div>
                  <div className="col-span-3 p-2 border-y">
                    {propertyDetail.numOfBedRoom} phòng
                  </div>
                </>
              )
            }
            {
              propertyDetail.numOfToilet && (
                <>
                  <div className="col-span-3 p-2 border-y  flex gap-2 items-center">
                    <BiBath /> Số toilet
                  </div>
                  <div className="col-span-3 p-2 border-y">
                    {propertyDetail.numOfToilet} phòng
                  </div>
                </>
              )
            }
            {
              propertyDetail.interior && (
                <>
                  <div className="col-span-3 p-2 border-y  flex gap-2 items-center">
                    <TbSofa /> Nội thất
                  </div>
                  <div className="col-span-3 p-2 border-y">
                    {propertyDetail.interior}
                  </div>
                </>
              )
            }
            {
              propertyDetail.juridical && (
                <>
                  <div className="col-span-3 p-2 border-y  flex gap-2 items-center">
                    <IoDocumentTextOutline /> Pháp lí
                  </div>
                  <div className="col-span-3 p-2 border-y">
                    {propertyDetail.juridical}
                  </div>
                </>
              )
            }
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between">
          {/* LEFT BOX (PUBLISH DATE ,EXPIRATION DATE)*/}
          <div className="flex gap-5 text-xs font-semibold">
            <div>
              <p className=" text-gray-500">Ngày đăng</p>
              <p>
                {formatDate(new Date(propertyDetail.publishDate))}
              </p>
            </div>
            <div>
              <p className=" text-gray-500">Ngày hết hạn</p>
              <p>
                {formatDate(new Date(propertyDetail.expirationDate))}
              </p>
            </div>
          </div>
        </div>
        <hr className="my-3" />

      </div>
      <div className="col-span-4">
        <div className="p-3 border rounded-lg flex flex-col items-center gap-3">
          <Avatar
            size={50}
            style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
          >
            {propertyDetail.owner.username[0]}
          </Avatar>
          <h5 className="font-semibold">
            {propertyDetail.owner.username}
          </h5>
          <Button type="primary" icon={<PhoneOutlined />} style={{ width: "80%" }}>
            Liên hệ &bull;  {propertyDetail.owner.phoneNumber}
          </Button>
          <Button type="default" icon={<MailOutlined />} style={{ width: "80%" }}>
            Gửi email
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail;