// Form Validation and error message handling
// Error Flow => file:///C:/Users/Admin/Downloads/avz9u-9hmqy.webp
import { useFormik } from "formik"; // Step:4
import * as yup from 'yup'; //Step:12 - importing yup for adding validation 

// Example:4 Form validation
// Step:1 Create a component 
// export function BasicForm() {
//   return (
//     <form>
//       <h1>BasicForm</h1>
//       <input type="email" placeholder="Email"/>
//       <input type="password" placeholder="Password"/>
//       <button>Submit</button>
//     </form>
//   );
// }

// Step:2 create Route path at App.js file.
// **************************************************************************************

// Step:14
const movieValidationSchema = yup.object({
  // email: yup.string().min(8),
  // password: yup.string().min(4),

  // Step:16 You can also customize the message 
  // email: yup.string().min(8,"Need a bigger email 🤩"),
  // password: yup.string().min(4,"Need a strong password 🤩"),

  // Step:17 Customizing the message 
  // email: yup.string().min(8,"Need a bigger email 🤩").required(),
  // password: yup.string().min(4,"Need a strong password 🤩").required(),
  email: yup.string().min(8,"Need a bigger email 🤩").required("A cool email is in need 🤩"),
  password: yup.string().min(4,"Need a strong password 🤩").required("A cool password is in need 🤩"),
});

export function BasicForm() {
  // Step:3 Applying useFormik hook of Formik
  
  const formik = useFormik({
    // Step:5 Stytax is from Formik doc
    // default - initialValues
    // userdefined - email,password
    initialValues:{
      email: "",
      password: "", 
    },

    // Step:13
    validationSchema: movieValidationSchema,

    // Step:10
    // Flow -> When you press submit button -> onSubmit eventListener will trigger the formik.handleSubmit -> This will trigger the onSubmit key function of formik object-> and prodeuce the output.
    onSubmit: (values) => {
      console.log("Form values: ", values);
    },
  });

  return (
    // <form>
    // // Step:9 onSubmit eventListener is added to get the data from user
    // <form onSubmit={formik.handleSubmit}>

    // Step:18 Adding className for making flex
    // Step:19 Refer styling App.css => add-movie-form
    <form className="add-movie-form" onSubmit={formik.handleSubmit}>

      <h1>BasicForm</h1>
      
      {/* <input value={"abc"} type="email" placeholder="Email"/> */}
      {/* value - displaying purpose */}
      {/* formik.values - default */}

      {/* Step-:6 */}
      {/* <input value={formik.values.email} type="email" placeholder="Email"/>
      <input value={formik.values.password} type="password" placeholder="Password"/> */}

      {/* Step-:7 for editing the data `onChange={formik.handleChange}` added as attribute in input element */}
      {/* <input value={formik.values.email} type="email" placeholder="Email" onChange={formik.handleChange}/>
      <input value={formik.values.password} type="password" placeholder="Password" onChange={formik.handleChange}/> */}

      {/* Step-:8 Adding name or id to the element for editing the data at the particular element.(This is for making bond)*/}
      {/* <input value={formik.values.email} type="email" placeholder="Email" onChange={formik.handleChange} name="email"/>
      <input value={formik.values.password} type="password" placeholder="Password" onChange={formik.handleChange} name="password"/> */}

      {/* Step:15 adding formik error at every end of form elements to display the error made */}
      {/* <input value={formik.values.email} type="email" placeholder="Email" onChange={formik.handleChange} name="email"/>{formik.errors.email}
      <input value={formik.values.password} type="password" placeholder="Password" onChange={formik.handleChange} name="password"/>{formik.errors.password} */}

      
      <input 
      value={formik.values.email} 
        type="email" 
        placeholder="Email"
        name="email" 
        onChange={formik.handleChange} 
        // Step:20 Added onBlur={formik.handleBlur}
        onBlur={formik.handleBlur}
      />
      {/* {formik.errors.email} */}
      {/* Step:23 conditional rendering applied => error message only display, once you touched the input field and having error */}
      {formik.touched.email && formik.errors.email ? formik.errors.email : null }

      <input 
        value={formik.values.password} 
        type="password" 
        placeholder="Password" 
        onChange={formik.handleChange} 
        name="password"
        // Step:21 Added onBlur={formik.handleBlur}
        onBlur={formik.handleBlur}
      />
      {/* {formik.errors.password} */}
      {/* Step:24 conditional rendering applied => error message only display, once you touched the input field and having error */}
      {formik.touched.password && formik.errors.password ? formik.errors.password : null }


      {/* Step:22 */}
      <h2>Errors</h2>
      <pre>{JSON.stringify(formik.errors)}</pre>
      <h2>Touched</h2>
      <pre>{JSON.stringify(formik.touched)}</pre>

      {/* Step:11 put type="submit" for submit button to avoid confusing browser*/}
      {/* <button>Submit</button> */}
      <button type="submit">Submit</button>
    </form>
  );
}

