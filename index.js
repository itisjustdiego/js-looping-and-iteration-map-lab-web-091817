// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(driver) {
  return  driver.toLowerCase()
  });
}

function nameToAttributes(array) {
  return array.map(function(driver) {
  let names = driver.split(' ')
  let oneName = names[0]
  let twoName = names[1]
  let obj = {firstName:oneName, lastName:twoName}
  return obj
  });
}

function attributesToPhrase(array) {
  return array.map(function(driver) {
    return `${driver['name']} is from ${driver.hometown}`
  })
}
