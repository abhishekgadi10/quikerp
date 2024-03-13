import React, { useEffect, useState } from "react";
import { Space, Table, Typography, Checkbox, Modal, Button } from "antd";
import { getOrders } from "../../API";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderDetailsVisible, setOrderDetailsVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Assuming getOrders returns an array of orders with dates
    getOrders().then((res) => {
      // Add a random date to each order for demonstration
      const ordersWithDates = res.products.map((order, index) => ({
        ...order,
        orderDate: getRandomDate(),
        orderId: index + 1, // Assuming the order ID is based on the array index
      }));
      setDataSource(ordersWithDates);
      setLoading(false);
    });
  }, []);

  const getRandomDate = () => {
    const today = new Date();
    const randomDaysAgo = Math.floor(Math.random() * 30) + 1;
    const randomDate = new Date(today);
    randomDate.setDate(today.getDate() - randomDaysAgo);
    return randomDate.toISOString().split("T")[0];
  };

  const handleCheckboxChange = (orderId, checked) => {
    const updatedDataSource = dataSource.map((order) =>
      order.orderId === orderId ? { ...order, delivered: checked } : order
    );
    setDataSource(updatedDataSource);
    // Implement logic to update order status on the server
    console.log(`Order ID ${orderId} status changed: ${checked ? "Delivered" : "Not Delivered"}`);
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setOrderDetailsVisible(true);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedDataSource = dataSource.filter((order) => order.orderId !== orderId);
    setDataSource(updatedDataSource);
    // Implement logic to delete order on the server
    console.log(`Order ID ${orderId} deleted`);
  };

  const orderDetailsColumns = [
    {
      title: "Attribute",
      dataIndex: "attribute",
    },
    {
      title: "Value",
      dataIndex: "value",
    },
  ];

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Order ID",
            dataIndex: "orderId",
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Discounted Price",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
          {
            title: "Order Date",
            dataIndex: "orderDate",
          },
          {
            title: "Delivered",
            dataIndex: "delivered",
            render: (_, record) => (
              <Checkbox
                checked={record.delivered}
                onChange={(e) => handleCheckboxChange(record.orderId, e.target.checked)}
              />
            ),
          },
          {
            title: "Actions",
            dataIndex: "actions",
            align: "center",
            render: (_, record) => (
              <Space size="small">
                <Button type="link" onClick={() => handleViewDetails(record)}>
                  View Details
                </Button>
                <Button type="link" onClick={() => handleDeleteOrder(record.orderId)}>
                  Delete
                </Button>
              </Space>
            ),
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>

      <Modal
        title="Order Details"
        visible={orderDetailsVisible}
        onCancel={() => setOrderDetailsVisible(false)}
        footer={null}
      >
        <Table
          columns={orderDetailsColumns}
          dataSource={selectedOrder ? Object.entries(selectedOrder).map(([key, value]) => ({ attribute: key, value })) : []}
          pagination={false}
        />
      </Modal>
    </Space>
  );
};

export default Orders;
