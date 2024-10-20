import React from 'react';
import { Flex, Spin } from 'antd';

const contentStyle = {
    padding: 50,
    borderRadius: 4,
};

const content = <div style={contentStyle} />;

const Loader = () => (

    <Flex gap="middle" vertical>
        <Spin tip="Loading" size="large">
            {content}
        </Spin>
    </Flex>

);

export default Loader;