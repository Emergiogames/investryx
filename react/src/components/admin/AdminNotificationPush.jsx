// import React, { useEffect, useState } from "react";
// import { getAdminNotificationPush, sendAdminNotificationPush } from "../../services/admin/apiMethods";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { toast } from "sonner";

// function AdminNotificationPush() {
//   const [notification, setNotification] = useState([]);

//   useEffect(() => {
//     const fetchNotification = async () => {
//       try {
//         const response = await getAdminNotificationPush();
//         if (response.data.status === true) {
//           setNotification(response.data.notifications); // Adjust if notifications are nested
//         }
//       } catch (error) {
//         toast.error(error.message || "Issue with fetching notification");
//         console.error(error.message);
//       }
//     };
//     fetchNotification();
//   }, []);

//   const submit = async (values, { resetForm }) => {
//     try {
//       const response = await sendAdminNotificationPush(values); // Pass values as payload
//       if (response.data.status === true) {
//         toast.success("Notification sent successfully");
//         resetForm(); // Reset form fields after successful submission
//       }
//     } catch (error) {
//       toast.error(error.message || "Issue with sending notification");
//       console.error(error.message);
//     }
//   };

//   return (
//     <>
//       <div>
//         <h2>Push Notification for Users</h2>
//         <p>You can send to a particular user or to all users</p>
//         <ul>
//           {notification.length > 0 ? (
//             notification.map((notif, index) => (
//               <li key={index}>{notif.message}</li> // Adjust based on your data structure
//             ))
//           ) : (
//             <p>No notifications</p>
//           )}
//         </ul>
//       </div>

//       {/* Post Notification Form */}
//       <div className="pl-24 ml-28 w-full h-screen bg-gray-300 flex flex-col">
//         <Formik
//           initialValues={{ title: "", description: "" }}
//           onSubmit={submit}
//         >
//           <Form className="flex flex-col space-y-4">
//             <label htmlFor="title">Enter Title</label>
//             <Field type="text" name="title" id="title" />
//             <ErrorMessage name="title" component="div" className="text-red-500" />

//             <label htmlFor="description">Enter Description</label>
//             <Field type="text" name="description" id="description" />
//             <ErrorMessage name="description" component="div" className="text-red-500" />

//             <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//               Send Notification
//             </button>
//           </Form>
//         </Formik>
//       </div>
//     </>
//   );
// }

// export default AdminNotificationPush;









// import React, { useEffect, useState } from "react";
// import { getAdminNotificationPush, sendAdminNotificationPush } from "../../services/admin/apiMethods";
// import { Formik, Form, Field, ErrorMessage} from "formik";
// import { toast } from "sonner";


// function AdminNotificationPush() {
//   const [notification, setNotification] = useState([]);

//   useEffect(() => {
//     const fetchNotification = async () => {
//       try {
//         const response = await getAdminNotificationPush(); // Replace with your actual fetch function
//         if (response.data.status === true) {
//           setNotification(response.data);
//         }
//       } catch (error) {
//         toast.error(error.message || "Issue with fetching notification");
//         console.error(error.message)
//       }
//     };
//     fetchNotification();
//   }, []);

//   const submit = (values) => {
//     const sendNotification = async() => {
//       try {
//         const response = await sendAdminNotificationPush()
//         if(response.data.status === true){
//           toast.success("post send successfully")
//         }
//       } catch(error){
//         toast.error(error.message || "issue with sending data")
//         console.error(error.message)
//       }
//     }
//     sendNotification()
//   }


//   return (
//     <>
//       <div>
//         <div>Push Notification for users</div>
//         <div>You can send to particular user or for all users </div>
//         <div>{notification}</div>
//       </div>
//       {/* post notification */}
//       <div className="pl-24 ml-28 w-full h-screen bg-gray-300 flex flex-col">
//       <Formik  onSubmit={submit} initialValues={{title: "", description: ""}}>
//         <Form>
//           <Field
//           type = "title"
//           name = "title"
//           id = "title"
//           />
//           <label htmlFor = "title"> enter title</label>
        
//          <Field
//          type = "description"
//          name = "description"
//          id = "title"
//          />
//          <label htmlFor = "description">enter description here</label>
//          <button>send notification</button>
          
//         </Form>

//       </Formik>
//       </div>
//     </>
//   );
// }

// export default AdminNotificationPush;




import React, { useEffect, useState } from "react";
import { getAdminNotificationPush, sendAdminNotificationPush } from "../../services/admin/apiMethods";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "sonner";

const AdminNotificationPush = () => {
  // const [notification, setNotification] = useState([]);

  // useEffect(() => {
  //   const fetchNotification = async () => {
  //     try {
  //       const response = await getAdminNotificationPush();
  //       if (response.data.status === true) {
  //         setNotification(response.data);
  //       }
  //     } catch (error) {
  //       toast.error(error.message || "Issue with fetching notification");
  //       console.error(error.message);
  //     }
  //   };
  //   fetchNotification();
  // }, []);

  const submit = async (values) => {
    try {
      const response = await sendAdminNotificationPush(values);
      if (response.data.status === true) {
        toast.success("Notification sent successfully");
      }
    } catch (error) {
      toast.error(error.message || "Issue with sending notification");
      console.error(error.message);
    }
  };

  return (
    <>
      {/* <div>
        <div>Push Notification for users</div>
        <div>You can send to particular user or for all users</div>
        <div>{notification}</div>
      </div> */}
      <div className="pl-24 ml-28 w-full h-screen bg-gray-300 flex flex-col">
        <Formik initialValues={{ title: "", description: "", userId: "all" }} onSubmit={submit}>
          <Form>
            <Field type="title" name="title" id="title" />
            <label htmlFor="title">Enter title</label>
            <Field type="description" name="description" id="description" />
            <label htmlFor="description">Enter description</label>
            <Field type="userId" name="userId" id="userId" />
            <label htmlFor="userId">Enter userId</label>
            <button type="submit">Send notification</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AdminNotificationPush;