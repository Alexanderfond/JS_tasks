const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let enteredPass = prompt("Enter password", "");
if (enteredPass == "jqueryismyjam")
{
    message = "Ласкаво просимо!";
}
else if (user_password == null)
{
    message = "Скасовано користувачем!";
}
else
{
    message = "Доступ заборонений, невірний пароль!";
}
alert(message);