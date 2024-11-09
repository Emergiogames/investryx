import * as Yup from 'yup';

// const userId = user.userid || ""
export const initialValues = {
  name: "",
  industry: "",
  establish_yr: 0,
  description: "",
  address_1: "",
  address_2: "",
  state: "",
  pin: 0,
  city: "",
  employees: 0,
  entity: "",
  avg_monthly: 0,
  latest_yearly: 0,
  ebitda: 0,
  rate: 0,
  type_sale: "",
  url: "",
  top_selling: "",
  features: "",
  facility: "",
  reason: "",
  income_source: "",
  image1: [],
  doc1: [],
  proof1: [],
  userId: 0
}

export const validationSchema = Yup.object({
  images: Yup.array()
    .min(1, "At least one image is required")
    .required("Image file required"),
  title: Yup.string()
    .trim() // Trim leading and trailing spaces
    .required("Title is required")
    .matches(/^\S+.*\S$/, "Title cannot contain only spaces"),
  description: Yup.string()
    .trim() // Trim leading and trailing spaces
    .required("Description is required")
    .matches(/^\S+.*\S$/, "Description cannot contain only spaces"),
})