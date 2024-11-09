import * as Yup from "yup";

export const initialValues = {
  phone: "",
  password: "",
};

export const validationSchema = Yup.object({
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .matches(/^\S+$/, "Phone number should not contain spaces") 
    .required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/^\S+$/, "Password should not contain spaces"),
});

