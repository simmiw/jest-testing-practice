export function isValidString(userData:string) {
  if (!userData.match(/^[A-Za-z ]+$/)) {
    return false;
  } else {
    return true;
  }
}

export function isValidNumber(userData:Number | any) {
  if (!userData.match(/^[0-9]+$/)) {
    return false;
  } else {
    return true;
  }
}

export function isFieldNonEmpty(userData:string) {
  if (!userData.trim()) {
    return false;
  } else {
    return true;
  }
}
