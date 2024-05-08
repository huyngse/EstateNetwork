import { landForRentTypeData, landForSellTypeData, projectTypeData } from "@/constants/propertyTypes";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Tabs, TabsProps, TreeSelect } from "antd";
import { SearchProps } from "antd/es/input/Search";
import { useState } from "react";

const { SHOW_PARENT } = TreeSelect;



const { Search } = Input;
const onChange = (key: string) => {
    console.log(key);
};

const onSearchLandForSell: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value)
};

const LandForSell = () => {
    const [value, setValue] = useState<string[]>([]);
    const onChange = (newValue: string[]) => {
        console.log('onChange ', newValue);
        setValue(newValue);
    };
    const tProps = {
        treeData: landForSellTypeData,
        value,
        onChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Chọn loại nhà đất',
        style: {
            width: '100%'
        },
    };
    return (
        <div className="flex flex-col gap-3">
            <TreeSelect {...tProps} />
            <Search
                placeholder="Tìm nhanh. VD: Imperia Sola Park"
                allowClear
                onSearch={onSearchLandForSell}
                enterButton={
                    <div className="flex gap-2">
                        <SearchOutlined />
                        Tìm kiếm
                    </div>
                }
            />
        </div>
    )
}

const LandForRend = () => {
    const [value, setValue] = useState<string[]>([]);
    const onChange = (newValue: string[]) => {
        console.log('onChange ', newValue);
        setValue(newValue);
    };
    const tProps = {
        treeData: landForRentTypeData,
        value,
        onChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Chọn loại nhà đất',
        style: {
            width: '100%'
        },
    };
    return (
        <div className="flex flex-col gap-3">
            <TreeSelect {...tProps} />
            <Search
                placeholder="Tìm nhanh. VD: Imperia Sola Park"
                allowClear
                onSearch={onSearchLandForSell}
                enterButton={
                    <div className="flex gap-2">
                        <SearchOutlined />
                        Tìm kiếm
                    </div>
                }
            />
        </div>
    )
}

const Projects = () => {
    const [value, setValue] = useState<string[]>([]);
    const onChange = (newValue: string[]) => {
        console.log('onChange ', newValue);
        setValue(newValue);
    };
    const tProps = {
        treeData: projectTypeData,
        value,
        onChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Chọn loại nhà đất',
        style: {
            width: '100%'
        },
    };
    return (
        <div className="flex flex-col gap-3">
            <TreeSelect {...tProps} />
            <Search
                placeholder="Tìm nhanh. VD: Imperia Sola Park"
                allowClear
                onSearch={onSearchLandForSell}
                enterButton={
                    <div className="flex gap-2">
                        <SearchOutlined />
                        Tìm kiếm
                    </div>
                }
            />
        </div>
    )
}

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Nhà đất bán',
        children: <LandForSell />,
    },
    {
        key: '2',
        label: 'Nhà cho thuê',
        children: <LandForRend />,
    },
    {
        key: '3',
        label: 'Dự án',
        children: <Projects/>,
    },
];

const SearchProperty = () => {
    return (
        <div className="w-[80%]">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}


export default SearchProperty