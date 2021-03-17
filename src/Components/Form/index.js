import React from "react";
import { useFormik } from "formik"; // new

import * as Yup from "yup";
import Select from "react-select";
import { Create } from "../../Services/account/index";
export default function Form() {
  // const professions = [
  // 	{ label: "Alista Sistemas", value: 1 },
  // 	{ label: "Médico", value: 2 },
  // 	{ label: "Professor", value: 3 }
  //   ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthDate: "",
      profession: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nome tem que ser preenchido"),
      email: Yup.string().email().required("O email tem que ser preenchido"),
      birthDate: Yup.string().required(
        "Data Nascimento tem que ser preenchida"
      ),
      profession: Yup.string().required("Profissão tem que ser preenchida"),
    }),
    onSubmit(values) {
      Create(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      Nome:
      <input
        type="text"
        name="name"
        className={formik.errors.name ? "error" : null}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? (
        <span className="errorText">{formik.errors.name}</span>
      ) : null}
      Email:
      <input
        type="text"
        name="email"
        className={formik.errors.email ? "error" : null}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? (
        <span className="errorText">{formik.errors.email}</span>
      ) : null}
      DataNascimento:
      <input
        type="date"
        name="birthDate"
        className={formik.errors.birthDate ? "error" : null}
        onChange={formik.handleChange}
        value={formik.values.birthDate}
      />
      {formik.errors.birthDate ? (
        <span className="errorText">{formik.errors.birthDate}</span>
      ) : null}
      Profissão:
      <input
        type="text"
        name="profession"
        className={formik.errors.profession ? "error" : null}
        onChange={formik.handleChange}
        value={formik.values.profession}
      />
      {formik.errors.profession ? (
        <span className="errorText">{formik.errors.profession}</span>
      ) : null}
      <button type="submit">Cadastrar</button>
    </form>
  );
}
