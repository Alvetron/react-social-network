const FormControl = ({formik, elemName, elemType}) => {
    return ( 
        <div className="form-control">
            <input className='border-2 border-black' name={elemName} type={elemType} value={formik.values[elemName]} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.errors[elemName] && formik.touched[elemName] ? <div>{formik.errors[elemName]}</div> : null}
        </div>
     );
}
 
export default FormControl;