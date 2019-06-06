// Importing ToastContainer to show alerts
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({
    autoClose: 4000
});


  
// This function will trigger to show alert messages
export const showToastifyAlert = (msg, msgType) => {

    if(msgType === "success") {

        return toast.success(msg, {
            // position: toast.POSITION.TOP_CENTER
            // position: toast.POSITION.TOP_LEFT
            position: toast.POSITION.BOTTOM_CENTER
            // position: toast.POSITION.BOTTOM_RIGHT
        });

    } 
    else { // msgType === "error"
        return toast.error(msg, {  position: toast.POSITION.BOTTOM_CENTER });
    }

} // End of showToastifyAlert()