export default function genetarePass(){
  let password: string = "";
  let characters: string =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!$%¨&*()_+=-§{}[]:;?<>|;.,~^£¢¬ºª#'?";
  let passwordLength: number = 8;

  for (let index = 0; index < passwordLength; index++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}