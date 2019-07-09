// Your code goes here
let emailPromt, passwordPromt, passwordChange, oldPasswordCheck, newPasswordPromt, newPasswordConfirm;
let emailMinLength = 6;
let passwordMinLength = 5;
let userEmail = 'user@gmail.com';
let userPassword = 'UserPass';
let adminEmail = 'admin@gmail.com';
let adminPassword = 'AdminPass';

emailPromt = prompt('Enter your email.');
if (!emailPromt) {
  alert('Canceled.');
} else if (emailPromt.length < emailMinLength) {
  alert('I don\'t know any emails having name length less than 6 symbols.')
} else if (emailPromt === userEmail || emailPromt === adminEmail) {
  passwordPromt = prompt('Enter your password.');
  if (!passwordPromt) {
    alert('Canceled.');
  } else if (passwordPromt === userPassword || passwordPromt === adminPassword) {
    passwordChange = confirm('Do you want to change your password?');
    if (!passwordChange) {
      alert('You have failed the change.');
    } else {
      oldPasswordCheck = prompt('Enter your old password.');
      if (
        emailPromt === userEmail && oldPasswordCheck === userPassword ||
        emailPromt === adminEmail && oldPasswordCheck === adminPassword
        ) {
        newPasswordPromt = prompt('Enter your new password.');
        if (newPasswordPromt.length < passwordMinLength) {
          alert('It’s too short password. Sorry.');
        } else {
          newPasswordConfirm = prompt('Confirm your new password.');
          if (newPasswordPromt === newPasswordConfirm) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      }
    }
  } else {
    alert('Wrong password.');
  }
} else {
  alert('I don’t know you.');
}
