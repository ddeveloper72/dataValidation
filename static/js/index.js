import CSVFileValidator from '../js/csv-file-validator'


const requiredError = (headerName, rowNumber, columnNumber) => {
    return `<li class="list-group-item">${headerName} is required in the <strong>${rowNumber} row</strong> / <strong>${columnNumber} column</strong></li>`
}
const validateError = (headerName, rowNumber, columnNumber) => {
    return `<li class="list-group-item">${headerName} is not valid in the <strong>${rowNumber} row</strong> / <strong>${columnNumber} column</strong></li>`
}
const uniqueError = (headerName) => {
    return `<li class="list-group-item">${headerName} is not unique</li>`
}
const isEmailValid = function (email) {
    // firstname.lasname@commpany.domain limited to 3 letters & 2 letters respectively
    const reqExp = /[A-Za-z-]+\.[A-Za-z-0-9._%+-]+@([a-z-]{3,3})+\.[a-z]{2,2}$/
    return reqExp.test(email)
}
// const isPasswordValid = function (password) {
//     return password.length >= 4
// }


const CSVConfig = {
    headers: [
        {
            name: 'First Name',
            inputName: 'firstName',
            required: true,
            requiredError
        },
        {
            name: 'Last Name',
            inputName: 'lastName',
            required: true,
            requiredError
        },
        {
            name: 'Middle Name',
            inputName: 'middleName',
            required: false,
            requiredError
        },
        {
            name: 'Professional Number',
            inputName: 'profNumber',
            required: false,
            unique: true,
            uniqueError
        },
        {
            name: 'Job Description',
            inputName: 'jobDescription',
            required: true,
            requiredError
        },
        {
            name: 'Job Location',
            inputName: 'jobLocation',
            required: true,
            requiredError
        },
        {
            name: 'Staff/Agency',
            inputName: 'employeeType',
            required: true,
            requiredError
        },
        {
            name: 'Contact Number',
            inputName: 'contactNumber',
            required: true,
            requiredError
        },
        {
            name: 'Company Name',
            inputName: 'company',
            required: true,
            requiredError
        },
        {
            name: 'Login Name',
            inputName: 'loginName',
            required: false,
            requiredError,
            unique: true,
            uniqueError
        },
        {
            name: 'Email',
            inputName: 'email',
            required: false,
            requiredError,
            unique: true,
            uniqueError,
            validate: isEmailValid,
            validateError
        },
    ],
    isHeaderNameOptional: true // default (optional)
}



document.getElementById('file').onchange = function(event) {
    CSVFileValidator(event.target.files[0], CSVConfig)
        .then(csvData => {
            csvData.inValidMessages.forEach(message => {
                document.getElementById('invalidMessages').insertAdjacentHTML('beforeend', message)
            })
            console.log(csvData.inValidMessages)
            console.log(csvData.data)
        })
}
