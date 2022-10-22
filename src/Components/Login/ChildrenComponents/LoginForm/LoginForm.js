import {useFormik} from 'formik';
import validationSchema from '../../../../assets/validationSchema';
import FormControl from '../../../common/FormControl';


let LoginForm = ({login}) => {
    const formik = useFormik({
        initialValues: {
          login: '',
          password: '',
          agree: false,
        },
        onSubmit: values => {
          let rememberMe = values.agree ? true : false;

          login(values.login, values.password, rememberMe, formik.setStatus);
        },
        validationSchema,
      });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
              <FormControl formik={formik} elemName='login' elemType='email'/>
            </div>
            <div>
              <FormControl formik={formik} elemName='password' elemType='password'/>
            </div>
            <div>
              <input  name='agree' type='checkbox' checked={formik.values.agree} onChange={formik.handleChange}/>
            </div>
            {formik.status && <p>{formik.status}</p>}
            <button className='border-2 border-black' type='submit'>login</button>
        </form>
    );
};

export default LoginForm;