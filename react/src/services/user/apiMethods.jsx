import { apiCall } from "./apiCalls";
import { userUrls } from "../endPoints";
import { postUrls } from "../endPoints";

export const postRegister = (userData  ) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", userUrls.register, userData)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ staus: 500, message: "Something wrong" });
    }
  });
};

//google authentication

export const googleAuthenticate = (userData) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", userUrls.googleAuth, userData)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ statuse: 500, message: "Something wrong" });
    }
  });
};
export const googleSignIn = (username) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", userUrls.googleSignIn, username)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ statuse: 500, message: "Something wrong" });
    }
  });
};

// login

export const postLogin = (userData) => {
  console.log("hey data 2", userData);
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", userUrls.login, userData)
        .then((response) => {
          resolve(response);
          // console.log(" hleloo" ,  response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

export const postRegOtp = (userData) => {
  return new Promise((resolve, reject) => {
    try {
      console.log("postRegOtp apiMtheod userdatat :", userData);

      apiCall("post", userUrls.postOtp, userData)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

// forgot password
export const forgotPassword = (phone) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", userUrls.forgotPassword, phone)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};


// verify the otp that is send(in forgot password)
export const forgotOTP = (data) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", userUrls.forgotOtp, data)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

// verify the otp that is send(in forgot password)
export const renewPassword = (data) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", userUrls.resetPassword, data)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};



//userProfile for header

export const getUserProfile = () => {
  return new Promise((resolve, reject) => {
    try {
      const endpoint = `/user`;

      apiCall("get", endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => [reject(err)]);
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

export const preference = (prefData) => {
  return new Promise((resolve, reject) => {
    try {
      console.log("preferenc data api call :", prefData);
      
      apiCall("post", userUrls.pref, prefData)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

//userProfile for header

// export const getUserProfile = (user_id) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const endpoint = `/user${user_id}`

//       apiCall('get', endpoint)
//       .then((response) => {
//         resolve(response)
//       })
//       .catch((err) => [
//         reject(err)
//       ])
//     } catch(error){
//       resolve({status: 500, message: "Something wrong"})
//     }
//   })
// }



//Delete account
export const deleteUserAccount = () => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("delete", userUrls.getUserData, null)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    } catch (error){
      resolve({status: 500, message: "Something wrong"})
    }
  })
}

//
export const getBusinessPosts = () => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("get", postUrls.getBusinessData)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

//
export const getInvestorPosts = (user_id) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("get", postUrls.getInvestorData, user_id)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};
//
export const getFranchisPosts = (user_id) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("get", postUrls.getFranchisData, user_id)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

export const getAdvisorPosts = (user_id) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("get", postUrls.getAdvisorData, user_id)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

export const addBusinessPost = (formData) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", postUrls.addBusinessPost, formData)
        .then((response) => {
          resolve(response);
          // console.log("rsp dat :" , response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

export const addFranchisePost = (formData) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", postUrls.addFranchisePost, formData)
        .then((response) => {
          resolve(response);
          // console.log("rsp dat :" , response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

export const addInvestorPost = (formData) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", postUrls.addInvestorPost, formData)
        .then((response) => {
          resolve(response);
          // console.log("rsp dat :" , response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

export const addAdvisorPost = () => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", postUrls.addAdvisorPost)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

export const deleteUser = () => {
  return new Promise((resolve, reject) => {
    try {
      apiCall("post", postUrls.deleteUser)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: 500, message: "Something wrong" });
    }
  });
};

export const addContact =(data)=> {
  return new Promise((resolve,reject) => {
    try {
      apiCall("post", userUrls.addContact, data)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    } catch(error){
      resolve({status: 500, message: "Something wrong"})
    }
  })
}

export const getActivity = () =>{
  return new Promise((resolve, reject) => {
    try {
      apiCall("get", userUrls.getActivity,null)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    }
    catch(error){
      resolve({status: 500, message: "Something wrong"})
    }
  })
}

export const getPlans = () => {
  return new Promise((resolve, reject) => {
    try{
      apiCall("get", userUrls.getPlan, null)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    }
    catch(error){
      resolve({status: 500, message: "Something wrong"})
    }
  })
}

export const getFeaturedList = () => {
  return new Promise((resolve,reject) => {
    try{
      apiCall('get', userUrls.getFeatured)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    }
    catch(error){
      resolve({status: 500, message : "Something wrong"})
    }
  })
}

export const getRecommendedList = () => {
  return new Promise((resolve, reject) => {
    try{
      apiCall("get", userUrls.getRecommended, null)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    }
    catch(error){
      resolve({status: 500, message: "Something wrong"})
    }
  })
}

export const getBanner = () => {
  return new Promise((resolve, reject) => {
    try{
      apiCall("get", userUrls.getBanner, null)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    }
    catch(error){
      resolve({status: 500, message: "Something wrong"})
    }
  })
}

export const getFeaturedExperts = () => {
  return new Promise((resolve, reject) => {
    try{
      apiCall("get", userUrls.getFeaturedExperts, null)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    }
    catch(error){
      resolve({status: 500, message: "Something wrong"})
    }
  })
}

export const getGraph = () => {
  return new Promise((resolve, reject) => {
    try{
      apiCall("get", userUrls.getGraph, null)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    }
    catch(error){
      resolve({status: 500, message: "Something wrong"})
    }
  })
}

export const setSubscribe= (data) => {
  return new Promise((resolve, reject) => {
    try {
      apiCall('post',userUrls.setSub,data)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    }
    catch(error){
      resolve({status: 500, message: "Something wrong"})
    }
  })
}

export const getNotification = () => {
  return new Promise((resolve, reject) => {
    try{
      apiCall('get', userUrls.getNoti, null)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    }
    catch(error){
      resolve({status: 500, message: "Something wrong"})
    }
})
}

export const leftPlan = () => {
  return new Promise((resolve, reject) => {
    try{
      apiCall('get', userUrls.getLeftPlan, null)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    }
    catch(error){
      resolve({status: 500, message: "Something wrong"})
    }
  })
}
