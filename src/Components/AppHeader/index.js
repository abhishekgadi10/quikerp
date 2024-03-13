// import { BellFilled, MailOutlined } from "@ant-design/icons";
// import { Badge, Drawer, Image, List, Space, Typography } from "antd";
// import { useEffect, useState } from "react";
// import { getComments, getOrders } from "../../API";


import React, { useEffect, useState } from "react";
import { Image, Drawer, List, Space, Typography, Badge } from "antd";
import { MailOutlined, BellFilled } from "@ant-design/icons";
import { getComments, getOrders } from "../../API";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://yt3.ggpht.com/ytc/AKedOLRJTHta91TqSw-r4vN05o_2oolBF5k6RZrE21IeTg=s900-c-k-c0x00ffffff-no-rj"
      ></Image>
      <Typography.Title>ERP</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}
export default AppHeader;








// import React, { useEffect, useState } from "react";
// import { BellFilled, MailOutlined } from "@ant-design/icons";
// import { Badge, Drawer, Image, List, Space, Typography } from "antd";
// import { getComments, getOrders } from "../../API";

// function AppHeader() {
//   const [comments, setComments] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [commentsOpen, setCommentsOpen] = useState(false);
//   const [notificationsOpen, setNotificationsOpen] = useState(false);

//   useEffect(() => {
//     getComments().then((res) => {
//       setComments(res.comments);
//     });
//     getOrders().then((res) => {
//       setOrders(res.products);
//     });
//   }, []);

//   return (
//     <div className="AppHeader">
//       <Image
//         width={40}
//         src="https://yt3.ggpht.com/ytc/AKedOLRJTHta91TqSw-r4vN05o_2oolBF5k6RZrE21IeTg=s900-c-k-c0x00ffffff-no-rj"
//       />
//       <Typography.Title style={{ fontSize: "1.2rem", margin: 0, textAlign: "center" }}>ERP</Typography.Title>

//       <Space size={8} style={{ marginLeft: "auto" }}>
//         <Badge count={comments.length} dot>
//           <MailOutlined
//             style={{ fontSize: "1.5rem" }}
//             onClick={() => setCommentsOpen(true)}
//           />
//         </Badge>
//         <Badge count={orders.length}>
//           <BellFilled
//             style={{ fontSize: "1.5rem" }}
//             onClick={() => setNotificationsOpen(true)}
//           />
//         </Badge>
//       </Space>
//       <Drawer
//         title="Comments"
//         placement="left"
//         closable={true}
//         onClose={() => setCommentsOpen(false)}
//         visible={commentsOpen}
//         maskClosable
//       >
//         <List
//           dataSource={comments}
//           renderItem={(item) => <List.Item>{item.body}</List.Item>}
//         />
//       </Drawer>
//       <Drawer
//         title="Notifications"
//         placement="left"
//         closable={true}
//         onClose={() => setNotificationsOpen(false)}
//         visible={notificationsOpen}
//         maskClosable
//       >
//         <List
//           dataSource={orders}
//           renderItem={(item) => (
//             <List.Item>
//               <Typography.Text strong>{item.title}</Typography.Text> has been
//               ordered!
//             </List.Item>
//           )}
//         />
//       </Drawer>
//     </div>
//   );
// }

// export default AppHeader;















// import React, { useEffect, useState } from "react";
// import { BellFilled, MailOutlined } from "@ant-design/icons";
// import { Badge, Drawer, Image, List, Space, Typography } from "antd";
// import { getComments, getOrders } from "../../API";

// function AppHeader() {
//   const [comments, setComments] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [commentsOpen, setCommentsOpen] = useState(false);
//   const [notificationsOpen, setNotificationsOpen] = useState(false);

//   useEffect(() => {
//     getComments().then((res) => {
//       setComments(res.comments);
//     });
//     getOrders().then((res) => {
//       setOrders(res.products);
//     });
//   }, []);

//   return (
//     <div className="AppHeader" style={{ display: "flex", alignItems: "center", padding: "10px" }}>
//       <Image
//         width={40}
//         src="https://yt3.ggpht.com/ytc/AKedOLRJTHta91TqSw-r4vN05o_2oolBF5k6RZrE21IeTg=s900-c-k-c0x00ffffff-no-rj"
//       />
//       <div style={{ flex: 1, textAlign: "center", marginLeft: "10px" }}>
//         <Typography.Title style={{ fontSize: "2.2rem", margin: 0 }}>ERP</Typography.Title>
//       </div>

//       <Space size={8}>
//         <Badge count={comments.length} dot>
//           <MailOutlined style={{ fontSize: "1.5rem" }} onClick={() => setCommentsOpen(true)} />
//         </Badge>
//         <Badge count={orders.length}>
//           <BellFilled style={{ fontSize: "1.5rem" }} onClick={() => setNotificationsOpen(true)} />
//         </Badge>
//       </Space>
//       <Drawer
//         title="Comments"
//         placement="left"
//         closable={true}
//         onClose={() => setCommentsOpen(false)}
//         visible={commentsOpen}
//         maskClosable
//         width={300}
//       >
//         <List dataSource={comments} renderItem={(item) => <List.Item>{item.body}</List.Item>} />
//       </Drawer>
//       <Drawer
//         title="Notifications"
//         placement="left"
//         closable={true}
//         onClose={() => setNotificationsOpen(false)}
//         visible={notificationsOpen}
//         maskClosable
//         width={300}
//       >
//         <List
//           dataSource={orders}
//           renderItem={(item) => (
//             <List.Item>
//               <Typography.Text strong>{item.title}</Typography.Text> has been ordered!
//             </List.Item>
//           )}
//         />
//       </Drawer>
//     </div>
//   );
// }

// export default AppHeader;

