import { Space, Typography } from 'antd';

const {Text} = Typography

const KeyHandlerComponent = ({key},{keypressed}) => {
    let keypressedfound = ""
    keypressedfound = keypressed

    return (
        <Space className={`key-container ${keypressedfound.toLowerCase === key  ? 'key-pressed':''}`}>
            <Text>{key}</Text>
        </Space>
    )
}

export default KeyHandlerComponent