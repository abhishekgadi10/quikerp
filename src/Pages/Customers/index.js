import React, { useEffect, useState } from "react";
import { Space, Table, Typography, Calendar, Modal } from "antd";
import { getCustomers, getCustomersByIds } from "../../API"; // Assuming API functions

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [ordersForDate, setOrdersForDate] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then(async (customers) => {
      const customersWithOrders = await Promise.all(
        customers.users.map(async (customer) => {
          const orders = await getCustomersByIds(customer.orderIds);
          return { ...customer, orders };
        })
      );
      setDataSource(customersWithOrders);
      setLoading(false);
    });
  }, []);

  const handleDateClick = async (date) => {
    setSelectedDate(date.format("YYYY-MM-DD"));
    const ordersForSelectedDate = await Promise.all(
      dataSource.flatMap(async (customer) => {
        const orders = await getCustomersByIds(customer.orderIds);
        return orders.filter(
          (order) => order.expectedDeliveryDate === date.format("YYYY-MM-DD")
        );
      })
    );
    setOrdersForDate(ordersForSelectedDate.flat());
    setCalendarVisible(true);
  };

  const handleCalendarCancel = () => {
    setCalendarVisible(false);
  };

  const renderCalendarCell = (date) => {
    const hasOrders = ordersForDate.some(
      (order) => order.expectedDeliveryDate === date.format("YYYY-MM-DD")
    );

    // Apply custom styling for cells with orders (optional)
    return hasOrders ? <div className="has-orders"></div> : null;
  };

  const getRandomOrdersForDate = (date) => {
    const numberOfOrders = Math.floor(Math.random() * 5) + 1; // Random number of orders (up to 5)
    const orders = [];
    for (let i = 1; i <= numberOfOrders; i++) {
      orders.push({
        orderId: i,
        title: `Random Order ${i}`,
        customer: {
          firstName: `Customer${i}`,
          lastName: `Last${i}`,
        },
      });
    }
    return orders;
  };

  // Adjust calendar size and style
  const calendarStyle = {
    width: "100%", // Full width for responsiveness
    maxWidth: "600px", // Max width for user-friendly display
    margin: "0 auto", // Center alignment
  };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Calendar</Typography.Title>
      <div style={calendarStyle}>
        <Calendar
          onSelect={handleDateClick}
          dateCellRender={renderCalendarCell}
        />
      </div>
      <Modal
        title={`Orders for ${selectedDate}`}
        visible={calendarVisible}
        onCancel={handleCalendarCancel}
        footer={null}
      >
        <Table
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
              title: "Customer",
              render: (_, record) => (
                <span>
                  {record.customer.firstName} {record.customer.lastName}
                </span>
              ),
            },
          ]}
          dataSource={getRandomOrdersForDate(selectedDate)}
        />
      </Modal>
    </Space>
  );
}

export default Customers;
