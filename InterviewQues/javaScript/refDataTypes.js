// Object

let browser = {
    "name": "Swati",
    "version": "1.45",
    "vendor": "Firfox",
    fun: () => {
        console.log('I am Happy')
    }
}
console.log(typeof browser)
console.log(browser)
browser.fun();
console.log(browser.name)

// Browser

let families = [
    {
        "lastname": "Satpute",
        "version": "Fastfwd"
    },
    {
        "lastname": "Zarekar",
        "version": "Backwards"
    }
]

console.log(families)
console.log(families[0])
console.log(families[1])
console.log(families[1].lastname)
console.log(families[1].version)
console.table(families)
