import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Submitting:", values);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("Response:", data))
      .catch((err) => console.error(err))
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-2 w-64">
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />

          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
}