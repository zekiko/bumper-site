export default function validate(values) {
    let errors = {};

    //name validator
    if (!values.name || values.name.length > 255) {
        errors.name = "Please enter your name"
    }

    //company validator
    if (!values.company || values.company.length > 255) {
        errors.company = "Please enter company name"
    }

    //phone validator
    if (!values.mobile_phone || !/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(values.mobile_phone)) {
        errors.mobile_phone = "Please enter mobile"
    }

    //email validator
    if (!values.email_address || !/\S+@\S+\.\S+/.test(values.email_address)) {
        errors.email_address = "Please enter email"
    }

    //postcode validator
    if (!values.postcode || values.postcode.length > 30) {
        errors.postcode = "Must be a valid postcode"
    }

    //payment validator
    if ((values.pay_later === "false" && values.pay_now === "false") ||
        (values.pay_later === "true" && values.pay_now === "true")) {
        errors.pay = "Select pay later or pay now"
    }

    return errors;
};