import Swal from "sweetalert2";
/**
 * /**
 * @file Axios Error Catcher With Sweetalert
 * @version 0.0.1
 * @author Berke Güleç <berke.ggulec@gmail.com>
 *
 * Axios Error Catcher usage example
 *  axios_request.post(URL).then((result) => {
 *    console.log(result);
 *  }).catch((err) => {
 *      axios_catcher(
 *          err,    //axios error obj
 *          (x)=>{} //optional
 *          ,true   //if param pass FALSE it returns only error object
 *      );
 *  });
 */
/**
 *
 * @param {Object} errObj
 * @param {Function} callBack
 * @param {Boolean} getMsg
 * @returns
 *
 */
export default (errObj, callBack, getMsg = true) => {
    if (typeof errObj.response !== "undefined") {
        let response = errObj.response;
        if (getMsg) {
            let swalContent = {
                icon: "error",
                text: response.data.msg,
            };
            if (response.status === 422) {
                let tmpErr = [];
                if (typeof response.data.errors !== "undefined") {
                    Object.keys(response.data.errors).forEach(e => response.data.errors[e].forEach(x => tmpErr.push(x)));
                    delete (swalContent.text), swalContent.html = tmpErr.join("<br>");
                }

            } else if (response.status === 404) {
                swalContent.text = response.data.message;
            }
            Swal.fire(swalContent).then((typeof callBack === "function" ? callBack(response.data) : null))
        }
        else return response;
    }
}

