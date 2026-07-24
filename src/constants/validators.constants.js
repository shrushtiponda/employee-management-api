const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,20}$/;
const NAME_REGEX = /^[A-Za-z ]+$/;

module.exports = {
    EMAIL_REGEX,
    PASSWORD_REGEX,
    NAME_REGEX
}