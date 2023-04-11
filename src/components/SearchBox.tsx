import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ISearchBoxProps } from "../ts/interfaces";

const SearchBox: React.FC<ISearchBoxProps> = ({handleSearch}) => {
  return (
    <div className='center searchbox-container'>
      <Input
        className='input'
        onPressEnter={handleSearch as ()=>void}
        placeholder="Filter Countries by Name"
        prefix={<SearchOutlined className="site-form-item-icon" />}
      />
    </div>
  );
};

export default React.memo(SearchBox);
