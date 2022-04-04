import AppbarContainer from '../components/appbar/AppbarContainer'
import HeaderContainer from '../components/header/HeaderContainer'
import FormContainer from '../components/form/FormContainer'

const FormPage = () => {
    return (
        <div className='bg-main-100 w-full h-[150vh] flex flex-col items-center justify-center'>
            <AppbarContainer />
            <HeaderContainer />
            <FormContainer />
        </div>
    )
}

export default FormPage;