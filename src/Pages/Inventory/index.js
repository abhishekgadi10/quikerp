import { Space, Table, Typography, Modal, Form, Input, Button, Rate, Row, Col } from "antd";
import { useEffect, useState } from "react";
import { getInventory, addProduct, editProduct, deleteProduct } from "../../API";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editProductId, setEditProductId] = useState(null);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  const handleAdd = () => {
    setModalVisible(true);
    setEditProductId(null);
    form.resetFields();
  };

  const handleEdit = (productId) => {
    setModalVisible(true);
    setEditProductId(productId);
    const productToEdit = dataSource.find((product) => product.id === productId);
    form.setFieldsValue(productToEdit);
  };

  const handleDelete = (productId) => {
    setLoading(true);
    deleteProduct(productId).then(() => {
      setDataSource((prev) => prev.filter((product) => product.id !== productId));
      setLoading(false);
    });
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      if (editProductId) {
        // Edit existing product
        editProduct(editProductId, values).then(() => {
          setDataSource((prev) =>
            prev.map((product) => (product.id === editProductId ? { ...product, ...values } : product))
          );
          setLoading(false);
          setModalVisible(false);
        });
      } else {
        // Add new product
        addProduct(values).then((res) => {
          setDataSource((prev) => [...prev, res]);
          setLoading(false);
          setModalVisible(false);
        });
      }
    });
  };

  const handleCancel = () => {
    setModalVisible(false);
    setEditProductId(null);
  };

  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      render: (link) => <img src={link} alt="Thumbnail" style={{ width: "50px", height: "50px" }} />,
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
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Actions",
      dataIndex: "id",
      render: (productId) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(productId)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(productId)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Space size={20} direction="vertical" style={{ padding: "20px" }}>
      <Typography.Title level={4}>Products</Typography.Title>
      <Button type="primary" onClick={handleAdd}>
        Add Product
      </Button>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      />
      <Modal
        title={editProductId ? "Edit Product" : "Add Product"}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="thumbnail" label="Thumbnail">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="title" label="Title">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="price" label="Price">
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="rating" label="Rating">
                <Rate />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="stock" label="Stock">
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="brand" label="Brand">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="category" label="Category">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </Space>
  );
}

export default Inventory;











// import { Space, Table, Typography, Modal, Form, Input, Button, Rate, Row, Col } from "antd";
// import { useEffect, useState } from "react";
// import { getInventory, addProduct, editProduct, deleteProduct } from "../../API";

// function Inventory() {
//   const [loading, setLoading] = useState(false);
//   const [dataSource, setDataSource] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [editProductId, setEditProductId] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     getInventory().then((res) => {
//       setDataSource(res.products);
//       setLoading(false);
//     });
//   }, []);

//   const handleAdd = () => {
//     setModalVisible(true);
//     setEditProductId(null);
//     form.resetFields();
//   };

//   const handleEdit = (productId) => {
//     setModalVisible(true);
//     setEditProductId(productId);
//     const productToEdit = dataSource.find((product) => product.id === productId);
//     form.setFieldsValue(productToEdit);
//   };

//   const handleDelete = (productId) => {
//     setLoading(true);
//     deleteProduct(productId).then(() => {
//       setDataSource((prev) => prev.filter((product) => product.id !== productId));
//       setLoading(false);
//     });
//   };

//   const handleOk = () => {
//     form.validateFields().then((values) => {
//       setLoading(true);
//       if (editProductId) {
//         // Edit existing product
//         editProduct(editProductId, values).then(() => {
//           setDataSource((prev) =>
//             prev.map((product) => (product.id === editProductId ? { ...product, ...values } : product))
//           );
//           setLoading(false);
//           setModalVisible(false);
//         });
//       } else {
//         // Add new product
//         addProduct(values).then((res) => {
//           setDataSource((prev) => [...prev, res]);
//           setLoading(false);
//           setModalVisible(false);
//         });
//       }
//     });
//   };

//   const handleCancel = () => {
//     setModalVisible(false);
//     setEditProductId(null);
//   };

//   const columns = [
//     {
//       title: "Thumbnail",
//       dataIndex: "thumbnail",
//       render: (link) => <img src={link} alt="Thumbnail" style={{ width: 50, height: 50 }} />,
//     },
//     {
//       title: "Title",
//       dataIndex: "title",
//     },
//     {
//       title: "Price",
//       dataIndex: "price",
//       render: (value) => <span>${value}</span>,
//     },
//     {
//       title: "Rating",
//       dataIndex: "rating",
//     },
//     {
//       title: "Stock",
//       dataIndex: "stock",
//     },
//     {
//       title: "Brand",
//       dataIndex: "brand",
//     },
//     {
//       title: "Category",
//       dataIndex: "category",
//     },
//     {
//       title: "Actions",
//       dataIndex: "id",
//       render: (productId) => (
//         <Space>
//           <Button type="primary" onClick={() => handleEdit(productId)}>
//             Edit
//           </Button>
//           <Button type="danger" onClick={() => handleDelete(productId)}>
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <Space size={20} direction="vertical">
//       <Typography.Title level={4}>Products</Typography.Title>
//       <Button type="primary" onClick={handleAdd}>
//         Add Product
//       </Button>
//       <Table
//         loading={loading}
//         columns={columns}
//         dataSource={dataSource}
//         pagination={{
//           pageSize: 5,
//         }}
//       />
//       <Modal
//         title={editProductId ? "Edit Product" : "Add Product"}
//         visible={modalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <Form form={form} layout="vertical">
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item name="thumbnail" label="Thumbnail">
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item name="title" label="Title">
//                 <Input />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item name="price" label="Price">
//                 <Input type="number" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item name="rating" label="Rating">
//                 <Rate />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item name="stock" label="Stock">
//                 <Input type="number" />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item name="brand" label="Brand">
//                 <Input />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item name="category" label="Category">
//                 <Input />
//               </Form.Item>
//             </Col>
//           </Row>
//         </Form>
//       </Modal>
//     </Space>
//   );
// }

// export default Inventory;














// import { Space, Table, Typography, Modal, Form, Input, Button, Rate } from "antd";
// import { useEffect, useState } from "react";
// import { getInventory, addProduct, editProduct, deleteProduct } from "../../API";

// function Inventory() {
//   const [loading, setLoading] = useState(false);
//   const [dataSource, setDataSource] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [editProductId, setEditProductId] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     getInventory().then((res) => {
//       setDataSource(res.products);
//       setLoading(false);
//     });
//   }, []);

//   const handleAdd = () => {
//     setModalVisible(true);
//     setEditProductId(null);
//     form.resetFields();
//   };

//   const handleEdit = (productId) => {
//     setModalVisible(true);
//     setEditProductId(productId);
//     const productToEdit = dataSource.find((product) => product.id === productId);
//     form.setFieldsValue(productToEdit);
//   };

//   const handleDelete = (productId) => {
//     setLoading(true);
//     deleteProduct(productId).then(() => {
//       setDataSource((prev) => prev.filter((product) => product.id !== productId));
//       setLoading(false);
//     });
//   };

//   const handleOk = () => {
//     form.validateFields().then((values) => {
//       setLoading(true);
//       if (editProductId) {
//         // Edit existing product
//         editProduct(editProductId, values).then(() => {
//           setDataSource((prev) =>
//             prev.map((product) => (product.id === editProductId ? { ...product, ...values } : product))
//           );
//           setLoading(false);
//           setModalVisible(false);
//         });
//       } else {
//         // Add new product
//         addProduct(values).then((res) => {
//           setDataSource((prev) => [...prev, res]);
//           setLoading(false);
//           setModalVisible(false);
//         });
//       }
//     });
//   };

//   const handleCancel = () => {
//     setModalVisible(false);
//     setEditProductId(null);
//   };

//   const columns = [
//     // ... existing columns
//     {
//       title: "Actions",
//       dataIndex: "id",
//       render: (productId) => (
//         <Space>
//           <Button type="primary" onClick={() => handleEdit(productId)}>
//             Edit
//           </Button>
//           <Button type="danger" onClick={() => handleDelete(productId)}>
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <Space size={20} direction="vertical">
//       <Typography.Title level={4}>Inventory</Typography.Title>
//       <Button type="primary" onClick={handleAdd}>
//         Add Product
//       </Button>
//       <Table
//         loading={loading}
//         columns={columns}
//         dataSource={dataSource}
//         pagination={{
//           pageSize: 5,
//         }}
//       />
//       <Modal
//         title={editProductId ? "Edit Product" : "Add Product"}
//         visible={modalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <Form form={form} layout="vertical">
//           {/* Add form fields for product details (thumbnail, title, price, rating, stock, brand, category) */}
//           <Form.Item name="thumbnail" label="Thumbnail">
//             <Input />
//           </Form.Item>
//           {/* Add other form fields for title, price, rating, stock, brand, category */}
//           <Form.Item name="title" label="Title">
//             <Input />
//           </Form.Item>
//           {/* Add other form fields for price, rating, stock, brand, category */}
//           <Form.Item name="price" label="Price">
//             <Input type="number" />
//           </Form.Item>
//           <Form.Item name="rating" label="Rating">
//             <Rate />
//           </Form.Item>
//           <Form.Item name="stock" label="Stock">
//             <Input type="number" />
//           </Form.Item>
//           <Form.Item name="brand" label="Brand">
//             <Input />
//           </Form.Item>
//           <Form.Item name="category" label="Category">
//             <Input />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </Space>
//   );
// }

// export default Inventory;












// import { Avatar, Button, Form, Input, Modal, Rate, Space, Table, Typography } from "antd";
// import { useEffect, useState } from "react";
// import { getInventory, addProduct, editProduct, deleteProduct } from "../../API";

// function Inventory() {
//   const [loading, setLoading] = useState(false);
//   const [dataSource, setDataSource] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [editProductId, setEditProductId] = useState(null);

//   const showModal = (productId) => {
//     setModalVisible(true);
//     setEditProductId(productId);
//     if (productId) {
//       const productToEdit = dataSource.find((product) => product.id === productId);
//       form.setFieldsValue(productToEdit);
//     } else {
//       form.resetFields();
//     }
//   };

//   const handleCancel = () => {
//     setModalVisible(false);
//     setEditProductId(null);
//   };

//   const handleOk = () => {
//     form.validateFields().then((values) => {
//       setLoading(true);
//       if (editProductId) {
//         // Edit existing product
//         editProduct(editProductId, values).then((res) => {
//           setDataSource((prev) =>
//             prev.map((product) => (product.id === editProductId ? { ...product, ...res } : product))
//           );
//           setLoading(false);
//           setModalVisible(false);
//         });
//       } else {
//         // Add new product
//         addProduct(values).then((res) => {
//           setDataSource((prev) => [...prev, res]);
//           setLoading(false);
//           setModalVisible(false);
//         });
//       }
//     });
//   };

//   const handleDelete = (productId) => {
//     setLoading(true);
//     deleteProduct(productId).then(() => {
//       setDataSource((prev) => prev.filter((product) => product.id !== productId));
//       setLoading(false);
//     });
//   };

//   useEffect(() => {
//     setLoading(true);
//     getInventory().then((res) => {
//       setDataSource(res.products);
//       setLoading(false);
//     });
//   }, []);

//   const columns = [
//     // ... existing columns
//     {
//       title: "Actions",
//       dataIndex: "id",
//       render: (productId) => (
//         <Space>
//           <Button type="primary" onClick={() => showModal(productId)}>
//             Edit
//           </Button>
//           <Button type="danger" onClick={() => handleDelete(productId)}>
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <Space size={20} direction="vertical">
//       <Typography.Title level={4}>Inventory</Typography.Title>
//       <Button type="primary" onClick={() => showModal(null)}>
//         Add Product
//       </Button>
//       <Table
//         loading={loading}
//         columns={columns}
//         dataSource={dataSource}
//         pagination={{
//           pageSize: 5,
//         }}
//       ></Table>

//       <Modal
//         title={editProductId ? "Edit Product" : "Add Product"}
//         visible={modalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <Form form={form} layout="vertical">
//           <Form.Item name="thumbnail" label="Thumbnail">
//             <Input />
//           </Form.Item>
//           {/* Add other form fields for title, price, rating, stock, brand, category */}
//         </Form>
//       </Modal>
//     </Space>
//   );
// }

// export default Inventory;
