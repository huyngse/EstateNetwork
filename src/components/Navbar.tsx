import { Button, Dropdown, MenuProps } from "antd"
import { Link } from "react-router-dom"
import { landForRentTypeData, landForSellTypeData, projectTypeData } from "@/constants/propertyTypes";
import { DownOutlined } from "@ant-design/icons";

const Navbar = () => {
    const landForSellItems: MenuProps['items'] = [];
    const landForRentItems: MenuProps['items'] = [];
    const projectItems: MenuProps['items'] = [];


    landForSellTypeData.forEach((e, index) => {
        landForSellItems.push({
            key: index,
            label: (
                <Link to={`/nha-dat-ban?type=${e.title}`}>
                    {e.title}
                </Link>
            ),
        })
    });
    landForRentTypeData.forEach((e, index) => {
        landForRentItems.push({
            key: index,
            label: (
                <Link to={`/nha-dat-ban?type=${e.title}`}>
                    {e.title}
                </Link>
            ),
        })
    });
    projectTypeData.forEach((e, index) => {
        projectItems.push({
            key: index,
            label: (
                <Link to={`/nha-dat-ban?type=${e.title}`}>
                    {e.title}
                </Link>
            ),
        })
    });
    return (
        <div className="flex justify-between px-5 py-3 sahdow">
            <div className="flex items-center">
                <div className="text-xl font-bold me-5">
                    <Link to="/">
                        Estate<span className="text-blue-600">Network</span>
                    </Link>
                </div>
                <div className="font-semibold text-base flex gap-5">
                    <Dropdown menu={{ items: landForSellItems }} placement="bottomLeft" arrow>
                        <Link to="/nha-dat-ban">Nhà đất bán
                            <DownOutlined style={{ width: "10px", marginLeft: "5px" }} />
                        </Link>
                    </Dropdown>
                    <Dropdown menu={{ items: landForRentItems }} placement="bottomLeft" arrow>
                        <Link to="/nha-cho-thue">Nhà đất cho thuê
                            <DownOutlined style={{ width: "10px", marginLeft: "5px" }} />
                        </Link>
                    </Dropdown>
                    <Dropdown menu={{ items: projectItems }} placement="bottomLeft" arrow>
                        <Link to="/du-an">Dự án
                            <DownOutlined style={{ width: "10px", marginLeft: "5px" }} />
                        </Link>
                    </Dropdown>

                </div>
            </div>
            <div className="flex gap-5 items-center">
                <Link to="/login">
                    <Button>Đăng nhập</Button>
                </Link>
                <Link to="/register">
                    <Button type="primary">Đăng ký</Button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar