import { Card, Button } from 'antd';

const VisualCard = () => {
  return (
    <Card
      style={{ width: 300, margin: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
      cover={<img alt="example" src="https://via.placeholder.com/300" />}
      actions={[
        <Button type="primary" key="1">
          Action 1
        </Button>,
        <Button key="2">Action 2</Button>,
      ]}
    >
      <Card.Meta
        title="Card Title"
        description="This is the description of the card. It can include more details about the content."
      />
    </Card>
  );
};

export default VisualCard;
